import ScreenLayout from "./ScreenLayout";
import { AppLogo } from "./AppLogo";

const stats = [
  { value: "12", label: "Check-ins" },
  { value: "11", label: "Places" },
  { value: "4", label: "Areas" },
];

const nights = [
  {
    venue: "Bardot",
    date: "Tue 21:02",
    gradient: "from-violet-900 via-purple-800 to-fuchsia-900",
  },
  {
    venue: "Trädgården",
    date: "Sat 23:40",
    gradient: "from-emerald-900 via-teal-800 to-cyan-900",
  },
];

const tabs = ["All", "Mine", "Tagged"];

export function ProfileScreen() {
  return (
    <ScreenLayout activeTab="profil">
      <div className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-primary/10 via-primary-light/40 to-transparent" />

        <div className="relative px-3 pt-9 pb-2">
          <div className="flex items-center justify-between">
            <AppLogo />
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-border/60 bg-white shadow-soft">
              <svg className="h-3.5 w-3.5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>

          <div className="mt-4 flex flex-col items-center text-center">
            <div className="relative">
              <div className="h-16 w-16 overflow-hidden rounded-full border-[3px] border-white bg-gradient-to-br from-slate-700 to-slate-900 shadow-card">
                <div className="flex h-full w-full items-end justify-center bg-gradient-to-t from-black/30 to-transparent">
                  <div className="mb-2 h-6 w-6 rounded-full bg-white/20" />
                </div>
              </div>
              <span className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-accent-green" />
            </div>

            <p className="mt-2.5 text-sm font-bold text-dark">Alex</p>
            <p className="text-[9px] text-muted">Stockholm</p>
            <p className="mt-1.5 text-[8px] text-muted/80">
              Last at <span className="font-medium text-dark">Bardot</span> · Tue 21:02
            </p>
          </div>

          <div className="mt-3 flex rounded-2xl border border-border/40 bg-white px-2 py-3 shadow-soft">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex-1 text-center ${i > 0 ? "border-l border-border/40" : ""}`}
              >
                <p className="text-base font-bold text-dark">{s.value}</p>
                <p className="text-[7px] text-muted">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <p className="text-[11px] font-bold text-dark">Your nights</p>
            <p className="text-[8px] text-muted">Your best nights in the city</p>

            <div className="mt-2 flex gap-1">
              {tabs.map((tab, i) => (
                <span
                  key={tab}
                  className={`rounded-full px-2.5 py-1 text-[7px] font-semibold ${
                    i === 0
                      ? "bg-primary-light text-primary"
                      : "bg-white text-muted shadow-soft"
                  }`}
                >
                  {tab}
                </span>
              ))}
            </div>

            <div className="mt-2.5 grid grid-cols-2 gap-2">
              {nights.map((m) => (
                <div
                  key={m.venue}
                  className="overflow-hidden rounded-2xl bg-white shadow-soft"
                >
                  <div className={`relative h-16 bg-gradient-to-br ${m.gradient}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.12),transparent_60%)]" />
                    <div className="absolute top-1.5 right-1.5 flex h-5 w-5 items-center justify-center rounded-md bg-white/20 backdrop-blur-sm">
                      <svg className="h-2.5 w-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </div>
                    <div className="absolute bottom-1.5 left-1.5 flex items-end gap-px">
                      {[6, 10, 5, 12, 8].map((h, i) => (
                        <div
                          key={i}
                          className="w-0.5 rounded-full bg-white/35"
                          style={{ height: `${h}px` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="px-2 py-1.5">
                    <p className="text-[8px] font-bold text-dark">{m.venue}</p>
                    <p className="text-[7px] text-muted">{m.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2 flex items-center justify-center gap-1.5 rounded-2xl border border-dashed border-primary/20 bg-primary-light/30 py-2">
              <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              <span className="text-[7px] font-medium text-primary">
                Save your next night here
              </span>
            </div>
          </div>
        </div>
      </div>
    </ScreenLayout>
  );
}
