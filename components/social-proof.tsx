import { site } from "@/lib/site";

export function SocialProof() {
  return (
    <section className="border-y border-ink/8 bg-white/50">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <p className="text-sm font-semibold tracking-[0.18em] text-teal uppercase">
          From the App Store
        </p>
        <p className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
          {site.rating.average}
          <span className="ml-2 text-lg font-medium text-muted">
            from {site.rating.count} ratings
          </span>
        </p>
        <blockquote className="mt-8">
          <p className="font-display text-2xl leading-snug font-medium text-ink sm:text-[1.75rem]">
            \u201cEasy interface, useful coach suggestions, and it helped my protein\n            intake.\u201d
          </p>
          <footer className="mt-4 text-sm text-muted">
            Paraphrased from an App Store review. Early ratings. Read them on\n            the listing.
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
