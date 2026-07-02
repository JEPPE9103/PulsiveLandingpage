import ScreenLayout from "./ScreenLayout";
import { AppLogo } from "./AppLogo";

const filters = [
  { label: "Live", active: true, icon: true },
  { label: "Nearby", active: false },
  { label: "Friends", active: false },
];

export function DiscussionsScreen() {
  return (
    <ScreenLayout activeTab="diskussioner">
      <div className="px-3 pt-9">
        <AppLogo />

        <h2 className="mt-3 text-base font-bold text-dark">Live Feed</h2>
        <p className="text-[9px] text-muted">See what people are saying right now</p>

        <div className="mt-3 flex gap-1.5">
          {filters.map((f) => (
            <div
              key={f.label}
              className={`flex items-center gap-1 rounded-full px-2.5 py-1.5 ${
                f.active
                  ? "bg-primary text-white"
                  : "bg-white text-muted shadow-soft"
              }`}
            >
              {f.icon && (
                <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
                  <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                </svg>
              )}
              <span className="text-[8px] font-semibold">{f.label}</span>
            </div>
          ))}
        </div>

        <div className="relative mt-4 overflow-hidden rounded-3xl border border-primary/10 bg-white p-5 shadow-soft">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-pink-50/50 to-purple-50/30" />

          <div className="relative flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-soft">
              <div className="relative flex h-8 w-8 items-center justify-center">
                <div className="absolute h-8 w-8 rounded-full border-2 border-pink-300/60" />
                <div className="absolute h-5 w-5 rounded-full border-2 border-pink-400/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-pink-400" />
              </div>
            </div>

            <p className="mt-3 text-[11px] font-bold text-dark">
              Start the conversation 🔥
            </p>
            <p className="mt-1 text-[8px] text-muted">
              Be the first to share what&apos;s happening here.
            </p>

            <div className="mt-4 w-full space-y-2">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-1.5 rounded-full border border-border bg-white py-2.5 text-[8px] font-semibold text-primary shadow-soft"
              >
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.5 2 6 5 6 9c0 5.25 6 13 6 13s6-7.75 6-13c0-4-2.5-7-6-7z" />
                </svg>
                See what&apos;s live
              </button>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-1.5 rounded-full border border-border bg-white py-2.5 text-[8px] font-semibold text-primary shadow-soft"
              >
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Open map
              </button>
            </div>
          </div>
        </div>
      </div>
    </ScreenLayout>
  );
}
