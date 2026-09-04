import { AppStoreButton } from "@/components/app-store-button";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-navy/95 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg items-center justify-between gap-3">
        <p className="text-sm leading-snug text-cream">
          Snap a meal. Get your protein.
        </p>
        <AppStoreButton theme="light" className="shrink-0 scale-90" />
      </div>
    </div>
  );
}
