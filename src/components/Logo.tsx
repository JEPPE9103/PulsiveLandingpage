import Image from "next/image";
import { SITE_NAME } from "@/lib/site";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const sizes = {
  // ~8–10% larger than previous mark sizes (36 / 40 / 50)
  sm: { box: "h-[2.4375rem] w-[2.4375rem]", text: "text-base", px: 39 },
  md: { box: "h-11 w-11", text: "text-lg", px: 44 },
  lg: { box: "h-[3.4375rem] w-[3.4375rem]", text: "text-xl", px: 55 },
};

export default function Logo({ size = "md", showText = true }: LogoProps) {
  const s = sizes[size];

  return (
    <div className="flex items-center gap-1">
      <Image
        src="/logo.png"
        alt={SITE_NAME}
        width={s.px}
        height={s.px}
        sizes={`${s.px}px`}
        className={`${s.box} object-contain [filter:drop-shadow(0_0_1px_rgba(90,58,217,0.85))_drop-shadow(0_1px_2px_rgba(109,74,255,0.35))]`}
        priority
      />
      {showText && (
        <span className={`${s.text} font-bold tracking-tight text-primary-dark`}>
          {SITE_NAME}
        </span>
      )}
    </div>
  );
}
