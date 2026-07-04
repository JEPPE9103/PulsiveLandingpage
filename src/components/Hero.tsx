"use client";

import FadeIn from "./FadeIn";
import Logo from "./Logo";
import BrandTagline from "./BrandTagline";
import PhoneFrame from "./phones/PhoneFrame";
import { MapScreen } from "./phones/MapScreen";
import { LiveScreen } from "./phones/LiveScreen";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute top-20 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-accent-green/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <FadeIn>
            <Logo size="lg" />
            <BrandTagline size="md" className="mt-3 max-w-sm" />

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-light/90 px-4 py-1.5 shadow-[0_0_20px_rgba(109,74,255,0.12)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-primary">
                Invite-only · Stockholm inner city
              </span>
            </div>

            <h1 className="mt-5 text-4xl leading-[1.08] font-bold tracking-tight text-dark sm:text-5xl lg:text-[3.25rem]">
              Stockholm&apos;s pulse.{" "}
              <span className="bg-gradient-to-r from-primary to-[#8B6FFF] bg-clip-text text-transparent">
                Live.
              </span>
            </h1>

            <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">
              The best nights happen fast. See where Stockholm is alive{" "}
              <span className="font-medium text-dark">before everyone else</span>
              — venues, areas, and what people are saying right now.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#beta"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_24px_rgba(109,74,255,0.35)] transition-all hover:bg-primary-dark hover:shadow-[0_8px_32px_rgba(109,74,255,0.45)]"
              >
                Get early access
                <span aria-hidden>→</span>
              </a>
              <a
                href="#map"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-7 py-3.5 text-sm font-semibold text-dark transition-all hover:border-primary/25 hover:shadow-soft"
              >
                See the app
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[440px]">
              <div className="absolute -inset-4 rounded-full bg-primary/10 blur-3xl" />
              {/* Map — back phone, shifted left so more is visible */}
              <div className="relative mb-8 sm:mb-0 sm:absolute sm:top-14 sm:-left-6 lg:-left-10 sm:z-10 sm:-rotate-6 sm:scale-[0.9]">
                <PhoneFrame floatDelay={0}>
                  <MapScreen variant="dark" priority />
                </PhoneFrame>
              </div>
              {/* Live — front phone */}
              <div className="relative sm:absolute sm:top-0 sm:right-0 lg:-right-2 sm:z-20 sm:rotate-3 sm:scale-[0.93]">
                <PhoneFrame floatDelay={1.5}>
                  <LiveScreen priority />
                </PhoneFrame>
              </div>
              <div className="hidden sm:block sm:h-[540px]" aria-hidden />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
