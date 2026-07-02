interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export default function Logo({ size = "md", showText = true }: LogoProps) {
  const iconSize =
    size === "sm" ? "h-8 w-8" : size === "lg" ? "h-11 w-11" : "h-9 w-9";
  const textSize =
    size === "sm" ? "text-base" : size === "lg" ? "text-xl" : "text-lg";
  const letterSize = size === "lg" ? "text-base" : "text-sm";

  return (
    <div className="flex items-center gap-2.5">
      <div
        className={`${iconSize} flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark shadow-card`}
      >
        <span className={`${letterSize} font-bold text-white`}>P</span>
      </div>
      {showText && (
        <span className={`${textSize} font-bold tracking-tight text-dark`}>
          PULSIVE
        </span>
      )}
    </div>
  );
}
