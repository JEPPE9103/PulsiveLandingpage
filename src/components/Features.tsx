"use client";

import FadeIn from "./FadeIn";

const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Live Pulse",
    description: "See where Stockholm is alive in real time — areas heating up, venues buzzing, energy shifting.",
    accent: "from-primary/10 to-primary/5",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "Live Map",
    description: "Area-by-area and venue-by-venue activity. Know exactly where to go — before the crowd catches on.",
    href: "#map",
    accent: "from-[#8B6FFF]/10 to-primary/5",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Pulse Feed",
    description: "See what people are saying live. Real talk from the city — not delayed, not filtered.",
    href: "#pulse-feed",
    accent: "from-accent-green/10 to-primary/5",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Moments",
    description: "Save and relive your best nights. The vimmel, the venue, the energy — captured as it happened.",
    href: "#moments",
    accent: "from-[#1a0a2e]/10 to-primary/5",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">
            The full ecosystem
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            More than a map.
            <br />
            <span className="text-primary">The city, live.</span>
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const card = (
              <div className={`group relative h-full overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br ${feature.accent} p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_12px_40px_rgba(109,74,255,0.12)]`}>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-primary shadow-soft transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_24px_rgba(109,74,255,0.35)]">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-base font-bold text-dark">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            );

            return (
              <FadeIn key={feature.title} delay={i * 0.08}>
                {feature.href ? (
                  <a href={feature.href} className="block h-full">
                    {card}
                  </a>
                ) : (
                  card
                )}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
