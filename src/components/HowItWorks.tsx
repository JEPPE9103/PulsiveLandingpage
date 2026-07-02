"use client";

import FadeIn from "./FadeIn";

const steps = [
  {
    number: "01",
    title: "Kolla pulsen",
    description: "Öppna appen och se vad som är live.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Upptäck & snacka",
    description: "Se vilka ställen som lever och vad folk säger.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Checka in & dela",
    description: "Bli en del av stadens puls.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Så funkar det
          </h2>
        </FadeIn>

        <div className="relative mt-16">
          <div className="absolute top-8 bottom-8 left-6 hidden w-px bg-gradient-to-b from-primary/30 via-primary/10 to-transparent md:block" />

          <div className="space-y-6 md:space-y-8">
            {steps.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.12}>
                <div className="relative flex gap-6 rounded-3xl border border-border/80 bg-[#FAFAFC] p-6 shadow-soft transition-all duration-300 hover:border-primary/20 hover:shadow-card md:p-8">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-light text-primary">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold tracking-widest text-primary uppercase">
                      Steg {step.number}
                    </span>
                    <h3 className="mt-1 text-xl font-bold text-dark">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
