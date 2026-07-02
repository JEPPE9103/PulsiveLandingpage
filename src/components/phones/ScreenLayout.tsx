import { type ReactNode } from "react";
import BottomNav from "./BottomNav";

type Tab = "live" | "karta" | "diskussioner" | "profil";

interface ScreenLayoutProps {
  children: ReactNode;
  activeTab: Tab;
}

export default function ScreenLayout({ children, activeTab }: ScreenLayoutProps) {
  return (
    <div className="flex h-[500px] flex-col bg-[#FAFAFC]">
      <div className="flex-1 overflow-hidden">{children}</div>
      <BottomNav active={activeTab} />
    </div>
  );
}
