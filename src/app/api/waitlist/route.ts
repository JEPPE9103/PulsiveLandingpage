import { NextResponse } from "next/server";
import {
  checkRateLimit,
  isHoneypotFilled,
  isValidEmail,
  normalizeEmail,
  persistWaitlistSignup,
} from "@/lib/waitlist";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot — bots fill hidden fields; humans never see them
    if (isHoneypotFilled(body.company) || isHoneypotFilled(body.website)) {
      return NextResponse.json({ success: true, skipDeliver: true });
    }

    if (body.consent !== true) {
      return NextResponse.json(
        { error: "Please accept the privacy policy to join the waitlist." },
        { status: 400 },
      );
    }

    const email =
      typeof body.email === "string" ? normalizeEmail(body.email) : "";
    const name =
      typeof body.name === "string" ? body.name.trim().slice(0, 100) : "";

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 },
      );
    }

    const forwarded = request.headers.get("x-forwarded-for");
    const ip =
      forwarded?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many attempts. Please try again in a few minutes." },
        { status: 429 },
      );
    }

    const payload = {
      email,
      name: name || null,
      source: "landing-page",
      createdAt: new Date().toISOString(),
      consent: true as const,
    };

    const { stored, duplicate } = await persistWaitlistSignup(payload);

    if (!stored) {
      return NextResponse.json(
        {
          error:
            "Could not save your signup right now. Please try again shortly.",
        },
        { status: 503 },
      );
    }

    return NextResponse.json({ success: true, duplicate: Boolean(duplicate) });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
