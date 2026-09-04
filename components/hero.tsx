import Image from "next/image";
import { AppStoreButton } from "@/components/app-store-button";
import { PhoneFrame } from "@/components/phone-frame";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_80%_0%,rgba(11,127,123,0.09),transparent_55%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:py-20">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-3 py-1.5 text-sm text-muted shadow-sm">
            <Image
              src="/images/icon.png"
              alt=""
              width={22}
              height={22}
              className="rounded-md"
            />
            Protein tracker for iPhone
          </div>
          <h1 className="font-display text-[2.35rem] leading-[1.08] font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Protect the muscle. Track protein, not every calorie.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Snap a meal. Get a protein count in seconds. Hit one daily target,
            with streaks and groups that keep you honest.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <AppStoreButton />
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Free to start. {site.pricing.trial}, then {site.pricing.monthly}{" "}
              or {site.pricing.yearly} through Apple.
            </p>
          </div>
          <p className="mt-6 text-sm text-muted">
            {site.rating.label}. Use that as a starting signal, not a crowd.
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-[320px] lg:max-w-none">
          <PhoneFrame
            src="/images/home.jpg"
            alt="Protein Pic home screen showing a completed daily protein goal of 295 grams of 195, with photo, barcode, and menu scan buttons"
            priority
            className="relative z-10 lg:ml-auto"
          />
        </div>
      </div>
    </section>
  );
}
