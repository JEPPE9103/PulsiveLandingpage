"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import CountUp from "./CountUp";

function DashCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-white/60 bg-white/70 p-3 shadow-soft backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}

function MiniKpi({ label, value, suffix = "" }: { label: string; value: number; suffix?: string }) {
  return (
    <DashCard>
      <p className="text-[10px] font-medium tracking-wide text-muted uppercase">{label}</p>
      <p className="mt-1 text-lg font-bold text-dark">
        <CountUp value={value} suffix={suffix} />
      </p>
    </DashCard>
  );
}

const pulseData = [32, 38, 45, 52, 61, 74, 88, 94, 91, 86, 78, 72];
const chartPath = pulseData
  .map((v, i) => {
    const x = (i / (pulseData.length - 1)) * 280;
    const y = 80 - (v / 100) * 70;
    return `${i === 0 ? "M" : "L"}${x},${y}`;
  })
  .join(" ");

const districts = [
  { name: "Södermalm", pct: 34 },
  { name: "Östermalm", pct: 22 },
  { name: "Norrmalm", pct: 18 },
  { name: "Kungsholmen", pct: 12 },
  { name: "Vasastan", pct: 9 },
];

const competitors = [
  { name: "Spy Bar", score: 92 },
  { name: "Sturecompagniet", score: 88 },
  { name: "F12", score: 81, highlight: true },
  { name: "Berns", score: 77 },
];

const heatmap = [
  [0.2, 0.4, 0.7, 0.9, 0.6, 0.3],
  [0.3, 0.5, 0.8, 1.0, 0.7, 0.4],
  [0.15, 0.35, 0.6, 0.85, 0.55, 0.25],
  [0.1, 0.25, 0.45, 0.65, 0.4, 0.15],
];

export default function VenuesDashboard() {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative"
    >
      <div className="absolute -inset-6 rounded-[2rem] bg-primary/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-[1.25rem] border border-border/80 bg-gradient-to-br from-white via-[#FAFAFC] to-primary-light/30 shadow-[0_24px_64px_rgba(109,74,255,0.12)]">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-border/60 bg-white/80 px-4 py-2.5 backdrop-blur-md">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28CA41]" />
          </div>
          <div className="mx-auto flex items-center gap-2 rounded-lg bg-[#FAFAFC] px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-green animate-pulse" />
            <span className="text-[10px] font-medium text-muted">venues.pulsive.app · F12 Stockholm</span>
          </div>
        </div>

        <div className="max-h-[680px] space-y-3 overflow-y-auto p-3 sm:p-4 [&::-webkit-scrollbar]:hidden">
          {/* KPI row */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            <DashCard className="col-span-2 border-primary/20 bg-gradient-to-br from-primary/10 to-white sm:col-span-1 lg:col-span-2">
              <p className="text-[10px] font-semibold tracking-wide text-primary uppercase">Live Pulse Score</p>
              <p className="mt-1 text-3xl font-bold text-primary">
                <CountUp value={87} />
              </p>
              <div className="mt-1 flex items-center gap-2 text-[10px]">
                <span className="font-medium text-accent-green">↑ 12%</span>
                <span className="text-muted">vs last week</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-primary/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "87%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-[#8B6FFF]"
                />
              </div>
            </DashCard>
            <MiniKpi label="Active Guests" value={214} />
            <MiniKpi label="Check-ins" value={89} />
            <MiniKpi label="Moments" value={47} />
            <MiniKpi label="Pulse Msgs" value={156} />
            <MiniKpi label="Satisfaction" value={94} suffix="%" />
          </div>

          {/* Chart + Peak forecast */}
          <div className="grid gap-2 lg:grid-cols-3">
            <DashCard className="lg:col-span-2">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-xs font-bold text-dark">Live Pulse over time</p>
                <div className="flex gap-3 text-[10px] text-muted">
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-3 rounded-full bg-primary" /> Tonight
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-3 rounded-full bg-border" /> Last Friday
                  </span>
                </div>
              </div>
              <svg viewBox="0 0 280 90" className="h-24 w-full">
                <defs>
                  <linearGradient id="pulseFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6D4AFF" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#6D4AFF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  d={`${chartPath} L280,90 L0,90 Z`}
                  fill="url(#pulseFill)"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
                <motion.path
                  d={chartPath}
                  fill="none"
                  stroke="#6D4AFF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <circle cx="224" cy="16" r="4" fill="#6D4AFF" className="animate-pulse" />
              </svg>
              <p className="text-[10px] text-muted">Current pulse: <span className="font-semibold text-primary">87</span> · Peak predicted 00:42</p>
            </DashCard>

            <DashCard className="border-primary/15 bg-gradient-to-br from-primary/5 to-white">
              <p className="text-[10px] font-semibold tracking-wide text-primary uppercase">Peak Forecast</p>
              <p className="mt-2 text-2xl font-bold text-dark">00:42</p>
              <p className="text-[10px] text-muted">Predicted peak</p>
              <div className="mt-3 space-y-2 border-t border-border/60 pt-3">
                <div className="flex justify-between text-[10px]">
                  <span className="text-muted">Expected Pulse</span>
                  <span className="font-bold text-primary"><CountUp value={94} /></span>
                </div>
                <div className="flex justify-between text-[10px]">
                  <span className="text-muted">Confidence</span>
                  <span className="font-semibold text-accent-green">High</span>
                </div>
              </div>
            </DashCard>
          </div>

          {/* Live crowd + Queue */}
          <div className="grid gap-2 sm:grid-cols-2">
            <DashCard>
              <p className="text-xs font-bold text-dark">Live Crowd</p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {[
                  { label: "Current", value: 214 },
                  { label: "Arriving", value: 38 },
                  { label: "Leaving", value: 12 },
                  { label: "Capacity", value: 78, suffix: "%" },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg bg-[#FAFAFC] px-2 py-1.5">
                    <p className="text-[9px] text-muted">{item.label}</p>
                    <p className="text-sm font-bold text-dark">
                      <CountUp value={item.value} suffix={item.suffix} />
                    </p>
                  </div>
                ))}
              </div>
            </DashCard>
            <DashCard>
              <p className="text-xs font-bold text-dark">Queue Forecast</p>
              <p className="mt-1 text-xl font-bold text-dark">
                <CountUp value={12} /> min
              </p>
              <p className="text-[10px] text-muted">Estimated wait</p>
              <div className="mt-2 flex items-center justify-between text-[10px]">
                <span className="text-muted">Trend</span>
                <span className="font-medium text-accent-green">↓ Decreasing</span>
              </div>
              <p className="mt-1 text-[10px] text-primary font-medium">Best arrival: 23:15</p>
            </DashCard>
          </div>

          {/* Origin + Heatmap */}
          <div className="grid gap-2 sm:grid-cols-2">
            <DashCard>
              <p className="text-xs font-bold text-dark">Guest Origin</p>
              <div className="mt-2 space-y-1.5">
                {districts.map((d) => (
                  <div key={d.name} className="flex items-center gap-2">
                    <span className="w-20 truncate text-[10px] text-muted">{d.name}</span>
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-primary/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${d.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="h-full rounded-full bg-primary/70"
                      />
                    </div>
                    <span className="w-8 text-right text-[10px] font-semibold text-dark">{d.pct}%</span>
                  </div>
                ))}
              </div>
            </DashCard>
            <DashCard>
              <p className="text-xs font-bold text-dark">Venue Heatmap</p>
              <div className="mt-2 grid grid-cols-6 gap-1">
                {heatmap.flatMap((row, ri) =>
                  row.map((intensity, ci) => (
                    <motion.div
                      key={`${ri}-${ci}`}
                      whileHover={{ scale: 1.15 }}
                      className="aspect-square rounded-sm transition-colors"
                      style={{
                        backgroundColor: `rgba(109, 74, 255, ${0.15 + intensity * 0.75})`,
                      }}
                    />
                  )),
                )}
              </div>
              <p className="mt-1.5 text-[9px] text-muted">Floor activity · Live</p>
            </DashCard>
          </div>

          {/* Competitors + Social */}
          <div className="grid gap-2 sm:grid-cols-2">
            <DashCard>
              <p className="text-xs font-bold text-dark">Competitor Pulse · Tonight</p>
              <div className="mt-2 space-y-1.5">
                {competitors.map((c) => (
                  <div
                    key={c.name}
                    className={`flex items-center justify-between rounded-lg px-2 py-1.5 text-[10px] ${
                      c.highlight ? "bg-primary/10 ring-1 ring-primary/20" : "bg-[#FAFAFC]"
                    }`}
                  >
                    <span className={`font-medium ${c.highlight ? "text-primary" : "text-dark"}`}>
                      {c.name}
                    </span>
                    <span className="font-bold text-dark">{c.score}</span>
                  </div>
                ))}
              </div>
            </DashCard>
            <DashCard>
              <p className="text-xs font-bold text-dark">Social Buzz</p>
              <div className="mt-2 flex gap-3">
                <div className="flex-1 rounded-lg bg-accent-green/10 px-2 py-1.5 text-center">
                  <p className="text-sm font-bold text-accent-green"><CountUp value={78} suffix="%" /></p>
                  <p className="text-[9px] text-muted">Positive</p>
                </div>
                <div className="flex-1 rounded-lg bg-red-50 px-2 py-1.5 text-center">
                  <p className="text-sm font-bold text-red-400"><CountUp value={22} suffix="%" /></p>
                  <p className="text-[9px] text-muted">Negative</p>
                </div>
              </div>
              <p className="mt-2 text-[10px] text-muted">
                Trending: <span className="font-medium text-dark">#F12Friday #StockholmNight</span>
              </p>
            </DashCard>
          </div>

          {/* Moments + Promotions + Returning + Weekly - compact row */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              { title: "Moments", stats: [["Uploaded", 47], ["Views", "12.4k"], ["Saves", 892]] },
              { title: "Promotions", stats: [["CTR", "8.2%"], ["ROI", "3.4x"], ["Visits", 156]] },
              { title: "Returning", stats: [["Return", "42%"], ["First-time", "58%"], ["Loyal", 89]] },
              { title: "Weekly", stats: [["Best night", "Fri"], ["Peak", 94], ["Growth", "+18%"]] },
            ].map((block) => (
              <DashCard key={block.title}>
                <p className="text-[10px] font-bold text-dark">{block.title}</p>
                <div className="mt-1.5 space-y-0.5">
                  {block.stats.map(([k, v]) => (
                    <div key={k} className="flex justify-between text-[9px]">
                      <span className="text-muted">{k}</span>
                      <span className="font-semibold text-dark">{v}</span>
                    </div>
                  ))}
                </div>
              </DashCard>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
