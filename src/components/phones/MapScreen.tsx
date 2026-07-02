import { PhoneScreenshot } from "./PhoneScreenshot";

interface MapScreenProps {
  variant?: "light" | "dark";
  priority?: boolean;
}

export function MapScreen({ variant = "light", priority = false }: MapScreenProps) {
  const src = variant === "dark" ? "/app/map-dark.png" : "/app/map-light.png";
  const alt =
    variant === "dark"
      ? "PULSIVE map — night mode, Stockholm"
      : "PULSIVE map — light mode, Stockholm";

  return <PhoneScreenshot src={src} alt={alt} priority={priority} />;
}
