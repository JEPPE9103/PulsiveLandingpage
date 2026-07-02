"use client";

import FadeIn from "./FadeIn";

export default function FinalCTA() {
  return (
    <section id="beta" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary to-primary-dark px-8 py-16 text-center sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute right-0 bottom-0 h-full w-1/2 opacity-10">
              <svg viewBox="0 0 300 400" className="h-full w-full" fill="white">
                <path d="M150 50 L180 200 L220 380 L150 350 L80 380 L120 200 Z" />
                <rect x="130" y="30" width="40" height="30" rx="4" />
              </svg>
            </div>

            <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Sluta chansa.
              <br />
              Kolla pulsen innan du drar ut.
            </h2>
            <p className="relative mt-4 text-lg text-white/80">
              Gå med i beta och få tillgång först.
            </p>
            <a
              href="#"
              className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-primary transition-all hover:shadow-lg hover:shadow-black/10"
            >
              Gå med i beta
              <span>→</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
