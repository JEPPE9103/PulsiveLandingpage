"use client";

import FadeIn from "./FadeIn";
import VenuesDashboard from "./venues/VenuesDashboard";

const features = [
  {
    title: "Understand your guests",
    description: "Real-time guest insights. Visitor origin. Returning guests. Peak hours.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Grow every event",
    description: "Measure campaigns. Track Moments. Monitor engagement. Compare weekends.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Stay ahead",
    description: "Compare against nearby competitors. Predict busy hours. Optimize staffing.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const plans = [
  {
    name: "Starter",
    price: "149",
    features: ["Analytics"],
    popular: false,
  },
  {
    name: "Pro",
    price: "399",
    features: ["Analytics", "Promotions", "Pulse Insights"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Unlimited venues", "API", "Dedicated support"],
    popular: false,
  },
];

export default function ForVenues() {
  return (
    <section id="venues" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-primary/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero grid */}
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-14">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest text-primary uppercase">
              For Venues
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Turn your venue into a{" "}
              <span className="bg-gradient-to-r from-primary to-[#8B6FFF] bg-clip-text text-transparent">
                live data engine.
              </span>
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">
              Understand your guests, measure engagement, optimize promotions and
              see how your venue performs in real time.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Live Pulse Score & peak forecasting",
                "Guest origin, crowd & queue analytics",
                "Competitor benchmarking & social buzz",
                "Moments, promotions & ROI tracking",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-dark">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:hello@pulsive.app?subject=Request%20Demo%20-%20PULSIVE%20Venues"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_24px_rgba(109,74,255,0.35)] transition-all hover:bg-primary-dark hover:shadow-[0_8px_32px_rgba(109,74,255,0.45)]"
              >
                Request Demo
                <span aria-hidden>→</span>
              </a>
              <a
                href="mailto:hello@pulsive.app?subject=Become%20a%20Venue%20Partner"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-7 py-3.5 text-sm font-semibold text-dark transition-all hover:border-primary/25 hover:shadow-soft"
              >
                Become a Venue Partner
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <VenuesDashboard />
          </FadeIn>
        </div>

        {/* Feature cards */}
        <div className="mt-20 grid gap-6 sm:grid-cols-3">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.08}>
              <div className="group h-full rounded-3xl border border-border/80 bg-[#FAFAFC] p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_12px_40px_rgba(109,74,255,0.1)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-light text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_20px_rgba(109,74,255,0.3)]">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-base font-bold text-dark">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Pricing */}
        <FadeIn className="mt-20">
          <div id="venue-pricing" className="text-center">
            <p className="text-xs font-semibold tracking-widest text-primary uppercase">
              Pricing
            </p>
            <h3 className="mt-3 text-2xl font-bold text-dark sm:text-3xl">
              Simple plans. Recurring value.
            </h3>
            <p className="mt-2 text-sm text-muted">
              SaaS pricing built for venues of every size.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {plans.map((plan, i) => (
              <FadeIn key={plan.name} delay={i * 0.1}>
                <div
                  className={`relative h-full rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                    plan.popular
                      ? "border-primary/30 bg-gradient-to-br from-primary/5 to-white shadow-[0_12px_40px_rgba(109,74,255,0.12)]"
                      : "border-border/80 bg-white shadow-soft hover:border-primary/20"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-[10px] font-bold tracking-wide text-white uppercase">
                      Most Popular
                    </span>
                  )}
                  <h4 className="text-lg font-bold text-dark">{plan.name}</h4>
                  <div className="mt-3">
                    {plan.price === "Custom" ? (
                      <p className="text-2xl font-bold text-dark">Custom</p>
                    ) : (
                      <p className="text-3xl font-bold text-dark">
                        {plan.price}
                        <span className="text-base font-normal text-muted"> €/mo</span>
                      </p>
                    )}
                  </div>
                  <ul className="mt-4 space-y-2">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted">
                        <span className="h-1 w-1 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:hello@pulsive.app?subject=PULSIVE%20${plan.name}%20Plan`}
                    className={`mt-6 block rounded-full py-2.5 text-center text-sm font-semibold transition-all ${
                      plan.popular
                        ? "bg-primary text-white hover:bg-primary-dark hover:shadow-card"
                        : "border border-border text-dark hover:border-primary/25 hover:bg-primary-light/30"
                    }`}
                  >
                    {plan.price === "Custom" ? "Contact sales" : "Get started"}
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-muted">
            Contact us for multi-venue groups.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
