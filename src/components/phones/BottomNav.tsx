import { type ReactNode } from "react";

type Tab = "live" | "karta" | "diskussioner" | "profil";

const tabs: { id: Tab; label: string; icon: (active: boolean) => ReactNode }[] = [
  {
    id: "live",
    label: "Live",
    icon: (active) => (
      <svg className={`h-3.5 w-3.5 ${active ? "text-primary" : "text-muted"}`} viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth={active ? 0 : 1.5}>
        {active ? (
          <path d="M12 2C8.5 2 6 5 6 9c0 5.25 6 13 6 13s6-7.75 6-13c0-4-2.5-7-6-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        )}
      </svg>
    ),
  },
  {
    id: "karta",
    label: "Map",
    icon: (active) => (
      <svg className={`h-3.5 w-3.5 ${active ? "text-primary" : "text-muted"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    id: "diskussioner",
    label: "Feed",
    icon: (active) => (
      <svg className={`h-3.5 w-3.5 ${active ? "text-primary" : "text-muted"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    id: "profil",
    label: "Profile",
    icon: (active) => (
      <svg className={`h-3.5 w-3.5 ${active ? "text-primary" : "text-muted"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

export default function BottomNav({ active }: { active: Tab }) {
  return (
    <div className="border-t border-border/60 bg-white px-2 pt-1.5 pb-2">
      <div className="flex justify-around">
        {tabs.map((tab) => {
          const isActive = tab.id === active;
          return (
            <div key={tab.id} className="flex flex-col items-center gap-0.5">
              {tab.icon(isActive)}
              <span className={`text-[7px] font-medium ${isActive ? "text-primary" : "text-muted"}`}>
                {tab.label}
              </span>
              {isActive && <span className="h-1 w-1 rounded-full bg-primary" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
