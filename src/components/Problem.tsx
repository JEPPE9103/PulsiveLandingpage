"use client";

import FadeIn from "./FadeIn";

const problems = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Group chats lie",
    description: "Someone said it was popping. It wasn't. You wasted the Uber, the outfit, and the first hour of the night.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Stories are too late",
    description: "By the time you see it on Instagram or Snapchat, the moment already moved. You're always one step behind.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12H4m16 0a8 8 0 11-16 0 8 8 0 0116 0z" />
      </svg>
    ),
    title: "You arrive. It's dead.",
    description: "The plan sounded good. The venue looked promising. You walk in and feel it immediately — wrong call.",
  },
];

export default function Problem() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">
            The problem
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            By the time you hear about it,
            <br />
            you missed it.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            People still rely on group chats, stories, and guesswork to decide
            where to go.
          </p>
          <p className="mt-3 text-lg font-semibold text-dark">
            Too often, you arrive and realize: it&apos;s dead.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {problems.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="group h-full rounded-3xl border border-border/80 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_12px_40px_rgba(109,74,255,0.1)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-light text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_20px_rgba(109,74,255,0.3)]">
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
