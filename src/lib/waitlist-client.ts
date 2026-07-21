import { SITE_EMAIL } from "@/lib/site";

/**
 * Browser-only FormSubmit delivery.
 * FormSubmit blocks server-side fetch from Vercel; the browser Origin is required.
 */
export async function deliverWaitlistViaFormSubmit(input: {
  email: string;
  name: string;
}): Promise<{ ok: boolean; error?: string }> {
  const inbox =
    process.env.NEXT_PUBLIC_WAITLIST_EMAIL?.trim() || SITE_EMAIL;

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${inbox}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: input.name || "Waitlist signup",
        email: input.email,
        _replyto: input.email,
        _subject: "PULZIVE beta waitlist signup",
        _template: "table",
        _captcha: "false",
        message: [
          "New PULZIVE waitlist signup",
          `Name: ${input.name || "—"}`,
          `Email: ${input.email}`,
          `Consent: yes`,
          `Source: landing-page`,
          `Time: ${new Date().toISOString()}`,
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      return { ok: false, error: "Could not save your signup right now." };
    }

    const data = (await res.json()) as {
      success?: string | boolean;
      message?: string;
    };

    if (data.success === true || data.success === "true") {
      return { ok: true };
    }

    const msg = (data.message ?? "").toLowerCase();
    // First submission triggers FormSubmit activation email — still accepted.
    if (msg.includes("activat") || msg.includes("confirm")) {
      return { ok: true };
    }

    return {
      ok: false,
      error:
        data.message ||
        "Could not save your signup right now. Please try again shortly.",
    };
  } catch {
    return {
      ok: false,
      error: "Could not save your signup right now. Please try again shortly.",
    };
  }
}
