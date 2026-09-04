import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/8 bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3">
          <Image
            src="/images/icon.png"
            alt=""
            width={40}
            height={40}
            className="rounded-[10px]"
          />
          <div>
            <p className="font-semibold text-ink">Protein Pic</p>
            <p className="text-sm text-muted">
              \u00a9 {new Date().getFullYear()} {site.copyright}
            </p>
          </div>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/privacy" className="text-muted hover:text-ink">
            Privacy
          </Link>
          <Link href="/terms" className="text-muted hover:text-ink">
            Terms
          </Link>
          <a
            href={site.appStoreUrl}
            className="text-muted hover:text-ink"
          >
            App Store
          </a>
        </nav>
      </div>
    </footer>
  );
}
