export type WaitlistPayload = {
  email: string;
  name: string | null;
  source: string;
  createdAt: string;
  consent: true;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Best-effort in-memory guards for serverless instances */
const recentEmails = new Map<string, number>();
const recentIps = new Map<string, number[]>();

const DUPLICATE_WINDOW_MS = 1000 * 60 * 60 * 24; // 24h per instance
const RATE_LIMIT_WINDOW_MS = 1000 * 60 * 10; // 10 min
const RATE_LIMIT_MAX = 5;

export function isValidEmail(email: string) {
  return emailRegex.test(email) && email.length <= 254;
}

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function isHoneypotFilled(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

export function checkDuplicateEmail(email: string): boolean {
  const now = Date.now();
  for (const [key, ts] of recentEmails) {
    if (now - ts > DUPLICATE_WINDOW_MS) recentEmails.delete(key);
  }
  if (recentEmails.has(email)) return true;
  recentEmails.set(email, now);
  return false;
}

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const stamps = (recentIps.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  if (stamps.length >= RATE_LIMIT_MAX) {
    recentIps.set(ip, stamps);
    return false;
  }
  stamps.push(now);
  recentIps.set(ip, stamps);
  return true;
}

async function storeViaWebhook(payload: WaitlistPayload): Promise<boolean> {
  const webhook = process.env.WAITLIST_WEBHOOK_URL;
  if (!webhook) return false;

  const res = await fetch(webhook, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Idempotency-Key": payload.email,
    },
    body: JSON.stringify(payload),
  });

  // Treat 2xx and 409 (already exists) as durable success
  return res.ok || res.status === 409;
}

async function notifyViaResend(payload: WaitlistPayload): Promise<boolean> {
  const resendKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.WAITLIST_NOTIFY_EMAIL;
  if (!resendKey || !notifyEmail) return false;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
          from: process.env.RESEND_FROM ?? "PULZIVE <onboarding@resend.dev>",
          to: notifyEmail,
          subject: "New beta signup — PULZIVE",
      text: [
        `Name: ${payload.name || "—"}`,
        `Email: ${payload.email}`,
        `Consent: yes`,
        `Source: ${payload.source}`,
        `Time: ${payload.createdAt}`,
      ].join("\n"),
    }),
  });

  return res.ok;
}

async function storeViaResendAudience(payload: WaitlistPayload): Promise<boolean> {
  const resendKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!resendKey || !audienceId) return false;

  const res = await fetch(
    `https://api.resend.com/audiences/${audienceId}/contacts`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: payload.email,
        first_name: payload.name ?? undefined,
        unsubscribed: false,
      }),
    },
  );

  // 409 = contact already exists → still durable
  return res.ok || res.status === 409;
}

/**
 * Persist waitlist signup to at least one durable backend.
 * Production requires WAITLIST_WEBHOOK_URL and/or Resend audience/notify.
 */
export async function persistWaitlistSignup(
  payload: WaitlistPayload,
): Promise<{ stored: boolean; duplicate: boolean }> {
  const alreadySeen = checkDuplicateEmail(payload.email);

  const results = await Promise.allSettled([
    storeViaWebhook(payload),
    storeViaResendAudience(payload),
    notifyViaResend(payload),
  ]);

  const durable = results.some(
    (r) => r.status === "fulfilled" && r.value === true,
  );

  if (durable) {
    return { stored: true, duplicate: alreadySeen };
  }

  // Local/dev fallback so the form remains testable without secrets
  if (process.env.NODE_ENV === "development") {
    console.log("[waitlist signup]", payload);
    return { stored: true, duplicate: alreadySeen };
  }

  return { stored: false, duplicate: alreadySeen };
}
