import { Features } from "@/components/features";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SocialProof } from "@/components/social-proof";
import { StickyCta } from "@/components/sticky-cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="pb-24 md:pb-0">
        <Hero />
        <HowItWorks />
        <Features />
        <SocialProof />
        <FinalCta />
      </main>
      <SiteFooter />
      <StickyCta />
    </>
  );
}
