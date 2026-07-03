"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Vision() {
  return (
    <section id="cities" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary-light/20 to-background" />
        <Image
          src="/app/map-light.png"
          alt=""
          fill
          className="object-cover object-center opacity-[0.05] blur-sm"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl">
            Starting in Stockholm nightlife.
            <br />
            Built for city life everywhere.
          </h2>

          <div className="mt-8 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              We&apos;re building the real-time layer for how people discover
              cities — live, social, and in the moment.
            </p>
            <p className="font-medium text-dark">
              Nightlife is the starting point. The vision is bigger.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
