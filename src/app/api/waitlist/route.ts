import { NextResponse } from "next/server";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const name = typeof body.name === "string" ? body.name.trim() : "";

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const payload = {
      email,
      name: name || null,
      source: "landing-page",
      createdAt: new Date().toISOString(),
    };

    let stored = false;

    const webhook = process.env.WAITLIST_WEBHOOK_URL;
    if (webhook) {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      stored = res.ok;
    }

    const resendKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.WAITLIST_NOTIFY_EMAIL;
    if (resendKey && notifyEmail) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM ?? "PULSIVE <onboarding@resend.dev>",
          to: notifyEmail,
          subject: "New beta signup — PULSIVE",
          text: `Name: ${name || "—"}\nEmail: ${email}\nTime: ${payload.createdAt}`,
        }),
      });
      stored = stored || res.ok;
    }

    if (!stored && process.env.NODE_ENV === "development") {
      console.log("[waitlist signup]", payload);
      stored = true;
    }

    if (!stored) {
      return NextResponse.json(
        { error: "Could not save your signup right now. Please try again shortly." },
        { status: 503 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
