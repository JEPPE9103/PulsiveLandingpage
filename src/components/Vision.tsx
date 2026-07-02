"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Vision() {
  return (
    <section id="städer" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary-light/25 to-background" />
        <Image
          src="/app/map-light.png"
          alt=""
          fill
          className="object-cover object-center opacity-[0.06] blur-sm"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl">
            Börjar i Stockholm.
            <br />
            Byggt för alla städer.
          </h2>

          <div className="mt-8 space-y-4 text-lg leading-relaxed text-muted">
            <p>PULSIVE börjar med Stockholms nattliv.</p>
            <p className="font-medium text-dark">Visionen är större.</p>
            <p>
              Vi bygger framtidens realtidslager för hur människor upptäcker
              städer.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
