import Image from "next/image";

interface PhoneScreenshotProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export function PhoneScreenshot({ src, alt, priority = false }: PhoneScreenshotProps) {
  return (
    <div className="relative aspect-[472/1024] w-full overflow-hidden bg-[#FAFAFC]">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 640px) 220px, 250px"
        className="object-cover object-top"
      />
    </div>
  );
}
