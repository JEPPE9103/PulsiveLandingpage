import Image from "next/image";
import { SITE_NAME } from "@/lib/site";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const sizes = {
  sm: { box: "h-8 w-8", text: "text-base", px: 32 },
  md: { box: "h-9 w-9", text: "text-lg", px: 36 },
  lg: { box: "h-11 w-11", text: "text-xl", px: 44 },
};

export default function Logo({ size = "md", showText = true }: LogoProps) {
  const s = sizes[size];

  return (
    <div className="flex items-center gap-2.5">
      <Image
        src="/logo.png"
        alt={SITE_NAME}
        width={s.px}
        height={s.px}
        className={`${s.box} rounded-xl object-cover shadow-card ring-1 ring-black/10`}
        priority
      />
      {showText && (
        <span className={`${s.text} font-bold tracking-tight text-dark`}>
          {SITE_NAME}
        </span>
      )}
    </div>
  );
}
