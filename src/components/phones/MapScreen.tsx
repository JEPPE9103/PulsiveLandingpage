import { PhoneScreenshot } from "./PhoneScreenshot";

interface MapScreenProps {
  variant?: "light" | "dark";
  priority?: boolean;
}

export function MapScreen({ variant = "light", priority = false }: MapScreenProps) {
  const src = variant === "dark" ? "/app/map-dark.png" : "/app/map-light.png";
  const alt =
    variant === "dark"
      ? "PULZIVE live map — night mode, Stockholm"
      : "PULZIVE live map — light mode, Stockholm";

  return <PhoneScreenshot src={src} alt={alt} priority={priority} />;
}
