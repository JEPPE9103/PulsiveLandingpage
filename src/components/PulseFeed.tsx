"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import PhoneFrame from "./phones/PhoneFrame";
import { DiscussionsScreen } from "./phones/DiscussionsScreen";

const bubbles = [
  {
    message: "Spy Bar is packed tonight 🔥",
    venue: "Spy Bar · Södermalm",
    time: "2m ago",
    align: "left" as const,
    delay: 0,
  },
  {
    message: "Guestlist moving fast at F12",
    venue: "F12 · Norrmalm",
    time: "5m ago",
    align: "right" as const,
    delay: 0.15,
  },
  {
    message: "Trädgården is insane right now",
    venue: "Trädgården · Söder",
    time: "8m ago",
    align: "left" as const,
    delay: 0.3,
  },
];

export default function PulseFeed() {
  return (
    <section id="pulse-feed" className="relative overflow-hidden bg-[#FAFAFC] py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-accent-green/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest text-primary uppercase">
              Pulse Feed
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              See what people are saying.{" "}
              <span className="text-primary">Live.</span>
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
              Real conversations from the city — not delayed stories, not
              outdated posts. Talk live, discuss venues, feel the buzz before
              you move.
            </p>

            <div className="mt-8 space-y-3">
              {bubbles.map((bubble) => (
                <motion.div
                  key={bubble.message}
                  initial={{ opacity: 0, x: bubble.align === "left" ? -16 : 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: bubble.delay }}
                  className={`max-w-sm rounded-2xl border border-border/60 bg-white px-4 py-3.5 shadow-soft ${
                    bubble.align === "right" ? "ml-auto" : ""
                  }`}
                >
                  <p className="text-sm font-medium text-dark">{bubble.message}</p>
                  <div className="mt-1.5 flex items-center gap-2 text-xs text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-green animate-pulse" />
                    <span>{bubble.venue}</span>
                    <span>·</span>
                    <span>{bubble.time}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-primary/10 blur-3xl" />
              <PhoneFrame floatDelay={0.8}>
                <DiscussionsScreen />
              </PhoneFrame>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
