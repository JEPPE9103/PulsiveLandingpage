"use client";

import FadeIn from "./FadeIn";
import PhoneFrame from "./phones/PhoneFrame";
import { MapScreen } from "./phones/MapScreen";

export default function MapSpotlight() {
  return (
    <section id="map" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-primary-light/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">
            Live Map
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl">
            Stockholm on the map. Live.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            See what&apos;s buzzing across the city — venue by venue, area by
            area. Light or night mode, always in sync.
          </p>
        </FadeIn>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn delay={0.1}>
            <div className="flex flex-col items-center">
              <PhoneFrame floatDelay={0}>
                <MapScreen variant="light" />
              </PhoneFrame>
              <div className="mt-5 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-light">
                  <svg className="h-3.5 w-3.5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="5" />
                  </svg>
                </span>
                <p className="text-sm font-semibold text-dark">Light mode</p>
              </div>
              <p className="mt-1 max-w-xs text-center text-xs text-muted">
                Clean Scandinavian UI for daytime discovery
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col items-center">
              <PhoneFrame floatDelay={1.5}>
                <MapScreen variant="dark" />
              </PhoneFrame>
              <div className="mt-5 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-dark">
                  <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </span>
                <p className="text-sm font-semibold text-dark">Night mode</p>
              </div>
              <p className="mt-1 max-w-xs text-center text-xs text-muted">
                Premium dark map built for nightlife
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="mt-14">
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
            {[
              { label: "Pulse zones", desc: "See activity hotspots glow on the map" },
              { label: "Venue cards", desc: "Tap into live status for every spot" },
              { label: "Day & night", desc: "Switch modes to match your vibe" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border/80 bg-[#FAFAFC] px-4 py-5 text-center shadow-soft"
              >
                <p className="text-sm font-bold text-dark">{item.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
