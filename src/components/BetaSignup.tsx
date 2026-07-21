"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import FadeIn from "./FadeIn";
import { deliverWaitlistViaFormSubmit } from "@/lib/waitlist-client";

type Status = "idle" | "loading" | "success" | "error";

export default function BetaSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    if (!consent) {
      setErrorMsg("Please accept the privacy policy to join the waitlist.");
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          consent: true,
          company: honeypot,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      // Honeypot trap: pretend success, do not email
      if (data.skipDeliver) {
        setStatus("success");
        setName("");
        setEmail("");
        setConsent(false);
        setHoneypot("");
        return;
      }

      // FormSubmit must run in the browser — it rejects Vercel server fetch.
      const delivered = await deliverWaitlistViaFormSubmit({ name, email });
      if (!delivered.ok) {
        setErrorMsg(
          delivered.error ??
            "Could not save your signup right now. Please try again shortly.",
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setConsent(false);
      setHoneypot("");
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section id="beta" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#5a3ad9] via-primary to-[#8B6FFF] px-6 py-14 text-center shadow-[0_24px_64px_rgba(109,74,255,0.25)] sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent-green/10 blur-3xl" />

            {status === "success" ? (
              <div className="relative mx-auto max-w-md" role="status" aria-live="polite">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                  You&apos;re in.
                </h2>
                <p className="mt-2 text-lg text-white/80">
                  We&apos;ll reach out when your spot opens up.
                </p>
              </div>
            ) : (
              <>
                <div className="relative mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-green animate-pulse" />
                  <span className="text-xs font-semibold tracking-wide text-white/90 uppercase">
                    Limited spots remaining
                  </span>
                </div>

                <h2 className="relative mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Be first in Stockholm.
                </h2>
                <p className="relative mx-auto mt-3 max-w-md text-base text-white/80 sm:text-lg">
                  Invite-only beta. Inner city. Early access to the city&apos;s
                  pulse before anyone else.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="relative mx-auto mt-8 max-w-md space-y-3 text-left"
                  noValidate
                >
                  {/* Honeypot — hidden from users */}
                  <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="beta-name" className="mb-1.5 block text-xs font-medium text-white/80">
                      Name <span className="text-white/50">(optional)</span>
                    </label>
                    <input
                      id="beta-name"
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      autoComplete="name"
                      className="w-full rounded-2xl border border-white/20 bg-white/95 px-4 py-3.5 text-sm text-dark placeholder:text-muted focus:border-white focus:ring-2 focus:ring-white/30 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="beta-email" className="mb-1.5 block text-xs font-medium text-white/80">
                      Email address
                    </label>
                    <input
                      id="beta-email"
                      type="email"
                      name="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                      className="w-full rounded-2xl border border-white/20 bg-white/95 px-4 py-3.5 text-sm text-dark placeholder:text-muted focus:border-white focus:ring-2 focus:ring-white/30 focus:outline-none"
                      placeholder="you@email.com"
                    />
                  </div>

                  <label className="flex items-start gap-2.5 pt-1 text-left text-xs leading-relaxed text-white/75">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/30 accent-white"
                      required
                    />
                    <span>
                      I agree to the{" "}
                      <Link href="/privacy" className="underline underline-offset-2 hover:text-white">
                        Privacy Policy
                      </Link>{" "}
                      and consent to being contacted about the PULZIVE beta.
                    </span>
                  </label>

                  {status === "error" && errorMsg && (
                    <p className="text-center text-sm text-red-200" role="alert" aria-live="assertive">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full rounded-full bg-white px-8 py-4 text-base font-semibold text-primary shadow-[0_4px_24px_rgba(0,0,0,0.15)] transition-all hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)] disabled:opacity-70"
                  >
                    {status === "loading" ? "Submitting..." : "Get early access"}
                  </button>
                  <p className="text-center text-xs text-white/50">
                    No spam. Invite-only. Stockholm inner city.
                  </p>
                </form>
              </>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
