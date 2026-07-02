import ScreenLayout from "./ScreenLayout";
import { AppLogo } from "./AppLogo";

const districts = [
  { name: "Södermalm", status: "Buzzing" },
  { name: "Norrmalm", status: "Rising" },
  { name: "Östermalm", status: "Quiet" },
];

export function LiveScreen() {
  return (
    <ScreenLayout activeTab="live">
      <div className="px-3 pt-9 pb-2">
        <AppLogo />

        <div className="relative mt-3 overflow-hidden rounded-3xl bg-gradient-to-br from-[#6D4AFF] via-[#7B5CFF] to-[#5B6FE8] p-3.5 shadow-card">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
            <span className="text-[7px] font-semibold tracking-widest text-white/80 uppercase">
              Stockholm Pulse
            </span>
          </div>

          <p className="mt-2 text-2xl font-bold text-white">Buzzing</p>
          <p className="mt-0.5 text-[9px] text-white/75">
            The city is alive right now
          </p>

          <div className="mt-2.5 inline-flex rounded-full bg-white/20 px-2.5 py-1 backdrop-blur-sm">
            <span className="text-[8px] text-white/90">
              Hottest: <span className="font-semibold">Södermalm</span> · Just now
            </span>
          </div>

          <div className="mt-4 flex h-14 items-end justify-between gap-1 px-1">
            {[40, 55, 35, 70, 50, 65, 45, 80, 55, 40, 60, 75].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-white/25"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>

          <div className="mt-2 flex justify-between border-t border-white/15 pt-2">
            {[
              { val: "24", label: "Venues live" },
              { val: "3", label: "Hot areas" },
              { val: "8", label: "Friends out" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-sm font-bold text-white">{s.val}</p>
                <p className="text-[6px] text-white/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3">
          <p className="text-[10px] font-bold text-dark">Trending now</p>
          <p className="text-[8px] text-muted">Areas with most energy</p>
          <div className="mt-2 flex gap-2 overflow-hidden">
            {districts.map((d) => (
              <div
                key={d.name}
                className="min-w-[72px] flex-1 overflow-hidden rounded-2xl border border-border/50 bg-white shadow-soft"
              >
                <div className="h-1 bg-accent-green" />
                <div className="p-2">
                  <p className="text-[9px] font-bold text-dark">{d.name}</p>
                  <p className="mt-0.5 text-[7px] font-medium text-accent-green">
                    {d.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3">
          <p className="mb-1.5 text-[10px] font-bold text-dark">What&apos;s hot</p>
          <div className="relative h-24 overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900" />
            <div
              className="absolute inset-0 opacity-80"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 60%, rgba(99,102,241,0.8) 0%, transparent 50%), radial-gradient(circle at 70% 40%, rgba(139,92,246,0.6) 0%, transparent 40%)",
              }}
            />
            <div className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
              <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </div>
            <span className="absolute bottom-2 left-2 rounded-full bg-amber-400 px-2 py-0.5 text-[7px] font-bold text-amber-900">
              Buzzing
            </span>
          </div>
        </div>
      </div>
    </ScreenLayout>
  );
}
