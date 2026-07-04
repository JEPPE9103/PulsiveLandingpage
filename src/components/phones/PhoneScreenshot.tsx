import Image from "next/image";

interface PhoneScreenshotProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export function PhoneScreenshot({ src, alt, priority = false }: PhoneScreenshotProps) {
  return (
    <div className="relative w-full overflow-hidden bg-[#FAFAFC]">
      <Image
        src={src}
        alt={alt}
        width={472}
        height={1024}
        priority={priority}
        sizes="(max-width: 640px) 220px, 250px"
        className="block h-auto w-full"
      />
    </div>
  );
}
