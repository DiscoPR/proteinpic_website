import { AppStoreButton } from "@/components/app-store-button";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="bg-teal">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 py-14 sm:px-6 md:flex-row md:items-center">
        <div className="max-w-xl text-white">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Snap before you overthink dinner.
          </h2>
          <p className="mt-3 text-white/85">
            Free to start on iPhone. {site.pricing.trial}, then{" "}
            {site.pricing.monthly} or {site.pricing.yearly} via Apple in-app
            purchase. Cancel in your Apple ID settings.
          </p>
        </div>
        <AppStoreButton theme="light" />
      </div>
    </section>
  );
}
