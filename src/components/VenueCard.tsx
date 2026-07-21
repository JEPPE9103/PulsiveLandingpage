import Image from "next/image";

interface VenueCardProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export default function VenueCard({ src, alt, priority = false }: VenueCardProps) {
  return (
    <div className="group relative aspect-[382/300] w-full overflow-hidden rounded-2xl shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(109,74,255,0.2)]">
      <div className="pointer-events-none absolute -inset-px z-10 rounded-2xl bg-gradient-to-b from-primary/15 via-transparent to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 640px) 45vw, 220px"
        className="object-cover"
      />
    </div>
  );
}
