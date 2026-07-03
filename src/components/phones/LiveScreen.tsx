import { PhoneScreenshot } from "./PhoneScreenshot";

interface LiveScreenProps {
  priority?: boolean;
}

export function LiveScreen({ priority = false }: LiveScreenProps) {
  return (
    <PhoneScreenshot
      src="/app/live.png"
      alt="PULSIVE Live — city pulse in real time"
      priority={priority}
    />
  );
}
