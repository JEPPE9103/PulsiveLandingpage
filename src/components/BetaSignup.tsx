"use client";

import { useState, type FormEvent } from "react";
import FadeIn from "./FadeIn";

type Status = "idle" | "loading" | "success" | "error";

export default function BetaSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section id="beta" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary to-primary-dark px-6 py-14 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute right-0 bottom-0 h-full w-1/2 opacity-10">
              <svg viewBox="0 0 300 400" className="h-full w-full" fill="white">
                <path d="M150 50 L180 200 L220 380 L150 350 L80 380 L120 200 Z" />
                <rect x="130" y="30" width="40" height="30" rx="4" />
              </svg>
            </div>

            {status === "success" ? (
              <div className="relative mx-auto max-w-md">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                  You&apos;re on the waitlist.
                </h2>
                <p className="mt-2 text-lg text-white/80">We&apos;ll be in touch soon.</p>
              </div>
            ) : (
              <>
                <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Join Stockholm beta
                </h2>
                <p className="relative mt-3 text-sm text-white/80">
                  Invite-only · Stockholm inner city · Limited spots
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="relative mx-auto mt-8 max-w-md space-y-3 text-left"
                >
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name (optional)"
                    className="w-full rounded-2xl border border-white/20 bg-white/95 px-4 py-3.5 text-sm text-dark placeholder:text-muted focus:border-white focus:ring-2 focus:ring-white/30 focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address *"
                    className="w-full rounded-2xl border border-white/20 bg-white/95 px-4 py-3.5 text-sm text-dark placeholder:text-muted focus:border-white focus:ring-2 focus:ring-white/30 focus:outline-none"
                  />
                  {status === "error" && errorMsg && (
                    <p className="text-center text-sm text-red-200">{errorMsg}</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full rounded-full bg-white px-8 py-4 text-base font-semibold text-primary transition-all hover:shadow-lg hover:shadow-black/10 disabled:opacity-70"
                  >
                    {status === "loading" ? "Submitting..." : "Join beta"}
                  </button>
                </form>
              </>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
