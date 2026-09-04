import Image from "next/image";
import { cn } from "@/lib/utils";

type PhoneFrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  caption?: string;
};

export function PhoneFrame({
  src,
  alt,
  priority,
  className,
  caption,
}: PhoneFrameProps) {
  return (
    <figure className={cn("mx-auto w-full max-w-[280px]", className)}>
      <div className="relative">
        <div className="overflow-hidden rounded-[2.35rem] border-[10px] border-[#141414] bg-black shadow-[0_28px_60px_-24px_rgba(16,24,32,0.55)]">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-center pt-2">
            <div className="h-[18px] w-[92px] rounded-full bg-black" />
          </div>
          <Image
            src={src}
            alt={alt}
            width={886}
            height={1917}
            priority={priority}
            className="h-auto w-full"
            sizes="(max-width: 768px) 260px, 280px"
          />
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-3 text-center text-sm text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
