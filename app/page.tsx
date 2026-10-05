import Link from "next/link";
import { Features } from "@/components/features";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SocialProof } from "@/components/social-proof";
import { StickyCta } from "@/components/sticky-cta";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="pb-24 md:pb-0">
        <Hero />
        <HowItWorks />
        <Features />
        <section className="border-t border-ink/8 bg-paper">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
            <p className="text-sm leading-relaxed text-muted">
              <Link
                href={site.compare.path}
                className="font-medium text-teal underline decoration-teal/40 underline-offset-4 hover:text-ink"
              >
                {site.compare.h1}
              </Link>
              {" "}
              — where each app wins, with public pricing and unknowns labeled.
            </p>
          </div>
        </section>
        <SocialProof />
        <FinalCta />
      </main>
      <SiteFooter />
      <StickyCta />
    </>
  );
}
