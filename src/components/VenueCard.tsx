import Image from "next/image";

interface VenueCardProps {
  src: string;
  alt: string;
  priority?: boolean;
}

const CARD_WIDTH = 382;
const CARD_HEIGHT = 300;

export default function VenueCard({ src, alt, priority = false }: VenueCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(109,74,255,0.2)]">
      <div className="absolute -inset-px z-10 rounded-2xl bg-gradient-to-b from-primary/15 via-transparent to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
      <Image
        src={src}
        alt={alt}
        width={CARD_WIDTH}
        height={CARD_HEIGHT}
        priority={priority}
        sizes="(max-width: 640px) 45vw, 220px"
        className="block h-auto w-full"
      />
    </div>
  );
}
