"use client";

import FadeIn from "./FadeIn";

const problems = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Guessing",
    description: "Gruppchattar och Instagram stories — ingen vet var det faktiskt händer.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12H4m16 0a8 8 0 11-16 0 8 8 0 0116 0z" />
      </svg>
    ),
    title: "Dead venues",
    description: "Du kommer fram och inser att det är dött. Kvällen är redan förstörd.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Missing info",
    description: "Ingen berättar hur läget faktiskt är just nu. Du missar kvällens bästa ställe.",
  },
];

export default function Problem() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Nightlife idag är trasigt.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Folk använder gruppchattar, Instagram stories och ren chansning för
            att välja vart de ska gå.
          </p>
          <p className="mt-3 text-lg font-medium text-dark">
            Ofta kommer man fram och inser: det är dött.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {problems.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="group h-full rounded-3xl border border-border/80 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-light text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold text-dark">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
