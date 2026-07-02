"use client";

import FadeIn from "./FadeIn";
import Logo from "./Logo";
import BrandTagline from "./BrandTagline";
import PhoneFrame from "./phones/PhoneFrame";
import { LiveScreen } from "./phones/LiveScreen";
import { MapScreen } from "./phones/MapScreen";
import { DiscussionsScreen } from "./phones/DiscussionsScreen";

const avatars = ["E", "M", "S"];

export default function Hero() {
  return (
    <section id="hem" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute top-20 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <svg viewBox="0 0 1440 900" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#6D4AFF" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <path d="M0 400 Q360 300 720 380 T1440 350" fill="none" stroke="#6D4AFF" strokeWidth="2" opacity="0.5" />
          <path d="M0 550 Q400 480 800 520 T1440 490" fill="none" stroke="#6D4AFF" strokeWidth="1.5" opacity="0.4" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-12">
          <FadeIn>
            {/* 1. Logo + PULSIVE */}
            <Logo size="lg" />

            {/* 2. Brand tagline */}
            <BrandTagline size="lg" className="mt-4 max-w-md" />

            {/* Live badge — contextual, between tagline & headline */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary-light/80 px-4 py-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent-green" />
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                Live in Stockholm
              </span>
            </div>

            {/* 3. Main headline */}
            <h1 className="mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-dark sm:text-5xl lg:text-[3.5rem]">
              Se var Stockholm lever.{" "}
              <span className="text-primary">Live.</span>
            </h1>

            {/* 4. Subheadline */}
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
              Slipp gissa.
              <br />
              Se vilka områden som lever, vilka venues som är heta och vad folk
              säger — live.
            </p>

            {/* 5. CTAs */}
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#beta"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-card-hover"
              >
                Gå med i beta
                <span aria-hidden>→</span>
              </a>
              <a
                href="#showcase"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-7 py-3.5 text-sm font-semibold text-dark transition-all hover:border-primary/25 hover:shadow-soft"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-light text-xs text-primary">
                  ▶
                </span>
                Se appen
              </a>
            </div>

            <div className="mt-9 flex items-center gap-3">
              <div className="flex -space-x-2">
                {avatars.map((letter, i) => (
                  <div
                    key={letter}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-primary/70 to-primary text-xs font-bold text-white"
                    style={{ zIndex: avatars.length - i }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted">
                <span className="font-semibold text-dark">10K+</span> personer
                på väntelistan
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="relative flex justify-center lg:justify-end">
            <div className="relative h-[500px] w-full max-w-lg sm:h-[560px]">
              <div className="absolute top-12 left-0 z-10 -rotate-6 scale-[0.88]">
                <PhoneFrame floatDelay={0}>
                  <MapScreen variant="light" priority />
                </PhoneFrame>
              </div>
              <div className="absolute top-0 left-1/2 z-20 -translate-x-1/2 scale-[0.93]">
                <PhoneFrame floatDelay={1.5}>
                  <LiveScreen />
                </PhoneFrame>
              </div>
              <div className="absolute top-12 right-0 z-10 rotate-6 scale-[0.88]">
                <PhoneFrame floatDelay={3}>
                  <DiscussionsScreen />
                </PhoneFrame>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-36 opacity-[0.06]">
        <svg viewBox="0 0 1440 140" className="h-full w-full" preserveAspectRatio="none">
          <path
            d="M0 140 L60 110 L120 115 L200 85 L280 95 L360 70 L440 80 L520 55 L600 65 L680 50 L760 60 L840 45 L920 55 L1000 40 L1080 50 L1160 38 L1240 48 L1320 35 L1400 45 L1440 40 L1440 140 Z"
            fill="#6D4AFF"
          />
          <path d="M680 50 L700 20 L720 50 Z" fill="#6D4AFF" />
        </svg>
      </div>
    </section>
  );
}
