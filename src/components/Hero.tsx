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
      <div className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute top-20 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <FadeIn>
            <Logo size="lg" />
            <BrandTagline size="md" className="mt-3 max-w-sm" />

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary-light/80 px-4 py-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent-green" />
              <span className="text-xs font-semibold tracking-wide text-primary">
                Invite-only beta · Stockholm inner city
              </span>
            </div>

            <h1 className="mt-5 text-4xl leading-[1.08] font-bold tracking-tight text-dark sm:text-5xl lg:text-[3.25rem]">
              Stockholm&apos;s pulse.{" "}
              <span className="text-primary">Live.</span>
            </h1>

            <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">
              Stop guessing where the city is alive. See which areas and venues
              are hot right now — and what people are saying live.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#beta"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-card-hover"
              >
                Join Stockholm beta
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
            <div className="relative h-[480px] w-full max-w-md sm:h-[520px]">
              <div className="absolute top-8 left-0 z-10 -rotate-6 scale-[0.9]">
                <PhoneFrame floatDelay={0}>
                  <MapScreen variant="dark" priority />
                </PhoneFrame>
              </div>
              <div className="absolute top-0 right-0 z-20 rotate-3 scale-[0.93]">
                <PhoneFrame floatDelay={1.5}>
                  <LiveScreen priority />
                </PhoneFrame>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
