"use client";

import FadeIn from "./FadeIn";
import PhoneFrame from "./phones/PhoneFrame";
import { MapScreen } from "./phones/MapScreen";

export default function MapSpotlight() {
  return (
    <section id="map" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">
            Live map
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl">
            Stockholm&apos;s pulse on the map. Live.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            See where the city is alive — area by area, venue by venue.
            Real-time discovery in light and night mode.
          </p>
        </FadeIn>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn delay={0.1}>
            <div className="flex flex-col items-center">
              <PhoneFrame floatDelay={0}>
                <MapScreen variant="light" />
              </PhoneFrame>
              <p className="mt-5 text-sm font-semibold text-dark">Light mode</p>
              <p className="mt-1 max-w-xs text-center text-xs text-muted">
                Scandinavian premium UI for day and evening
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col items-center">
              <PhoneFrame floatDelay={1.5}>
                <MapScreen variant="dark" />
              </PhoneFrame>
              <p className="mt-5 text-sm font-semibold text-dark">Night mode</p>
              <p className="mt-1 max-w-xs text-center text-xs text-muted">
                Built to read the city&apos;s energy as it happens
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="mt-14">
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
            {[
              { label: "Pulse zones", desc: "See where energy clusters on the map" },
              { label: "Venue cards", desc: "Live status for every spot" },
              { label: "Day & night", desc: "Switch modes as the city shifts" },
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
