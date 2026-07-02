interface BrandTaglineProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "text-sm sm:text-base",
  md: "text-base sm:text-lg",
  lg: "text-lg sm:text-xl lg:text-[1.35rem]",
};

export default function BrandTagline({
  className = "",
  size = "md",
}: BrandTaglineProps) {
  return (
    <p
      className={`font-medium tracking-tight text-dark/75 ${sizeClasses[size]} ${className}`}
    >
      See the{" "}
      <span className="font-semibold text-primary">pulse</span>. Feel the{" "}
      <span className="bg-gradient-to-r from-primary via-[#8B6FFF] to-[#A78BFA] bg-clip-text font-semibold text-transparent">
        vibe
      </span>
      .
    </p>
  );
}
