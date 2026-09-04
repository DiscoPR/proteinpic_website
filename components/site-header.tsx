import Image from "next/image";
import Link from "next/link";
import { AppStoreButton } from "@/components/app-store-button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/8 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/icon.png"
            alt=""
            width={36}
            height={36}
            className="rounded-[9px] shadow-sm"
          />
          <span className="text-[17px] font-semibold tracking-tight text-ink">
            Protein Pic
          </span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-5">
          <Link
            href="/#how-it-works"
            className="hidden text-sm font-medium text-muted hover:text-ink sm:inline"
          >
            How it works
          </Link>
          <Link
            href="/#features"
            className="hidden text-sm font-medium text-muted hover:text-ink sm:inline"
          >
            Features
          </Link>
          <AppStoreButton className="scale-90 sm:scale-100" />
        </nav>
      </div>
    </header>
  );
}
