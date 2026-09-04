import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main
        id="main"
        className="mx-auto flex max-w-xl flex-col items-start px-4 py-24 sm:px-6"
      >
        <p className="text-sm font-semibold tracking-[0.18em] text-teal uppercase">
          404
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink">
          That page is gone.
        </h1>
        <p className="mt-3 text-muted">
          The old Replit site is offline. The App Store listing, Privacy, and
          Terms live here now.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/">Back to Protein Pic</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/privacy">Privacy</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/terms">Terms</Link>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
