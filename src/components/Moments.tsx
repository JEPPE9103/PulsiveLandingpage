"use client";

import FadeIn from "./FadeIn";
import PhoneFrame from "./phones/PhoneFrame";
import { ProfileScreen } from "./phones/ProfileScreen";
import VenueCard from "./VenueCard";

const venues = [
  {
    src: "/venues/spy-bar.png",
    alt: "Spy Bar — Peak now, Friday at Spy",
  },
  {
    src: "/venues/tradgarden.png",
    alt: "Trädgården — Rising, Summer opening",
  },
  {
    src: "/venues/f12.png",
    alt: "F12 — Trending, Packed tonight",
  },
  {
    src: "/venues/wirstroms.png",
    alt: "Wirströms — Buzzing tonight",
  },
];

export default function Moments() {
  return (
    <section id="moments" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-primary-light/15 to-white" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <FadeIn delay={0.1} className="order-2 flex justify-center lg:order-1 lg:justify-start">
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-primary/10 blur-3xl" />
              <PhoneFrame floatDelay={1.2}>
                <ProfileScreen />
              </PhoneFrame>
            </div>
          </FadeIn>

          <FadeIn className="order-1 lg:order-2">
            <p className="text-xs font-semibold tracking-widest text-primary uppercase">
              Moments
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              The city moves live.
              <br />
              It leaves moments behind.
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
              Save your nights. Relive the energy. See what happened at venues
              long after the lights go out — your vimmel, your story.
            </p>

            <div className="mt-8 grid grid-cols-2 items-stretch gap-3 sm:gap-4">
              {venues.map((venue, i) => (
                <FadeIn key={venue.src} delay={i * 0.08} className="h-full">
                  <VenueCard
                    src={venue.src}
                    alt={venue.alt}
                    priority={i < 2}
                  />
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
