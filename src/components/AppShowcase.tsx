"use client";

import FadeIn from "./FadeIn";
import PhoneFrame from "./phones/PhoneFrame";
import { LiveScreen } from "./phones/LiveScreen";
import { MapScreen } from "./phones/MapScreen";
import { DiscussionsScreen } from "./phones/DiscussionsScreen";
import { ProfileScreen } from "./phones/ProfileScreen";

const screens = [
  { label: "Live", desc: "City pulse in real time", component: <LiveScreen /> },
  { label: "Map", desc: "Hot areas on the map", component: <MapScreen variant="light" /> },
  { label: "Feed", desc: "What people are saying", component: <DiscussionsScreen /> },
  { label: "Profile", desc: "Your nights & memories", component: <ProfileScreen /> },
];

export default function AppShowcase() {
  return (
    <section id="showcase" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary-light/30 via-background to-background" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl">
            Allt du behöver för en bättre kväll.
          </h2>
          <p className="mt-4 text-lg text-muted">
            Fyra skärmar. En app. Stockholms puls i fickan.
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-10">
          {screens.map((screen, i) => (
            <FadeIn key={screen.label} delay={i * 0.1}>
              <div className="group flex flex-col items-center">
                <div className="transition-transform duration-500 group-hover:scale-[1.02]">
                  <PhoneFrame floatDelay={i * 0.8}>
                    {screen.component}
                  </PhoneFrame>
                </div>
                <p className="mt-5 text-sm font-bold text-dark">{screen.label}</p>
                <p className="mt-0.5 text-xs text-muted">{screen.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
