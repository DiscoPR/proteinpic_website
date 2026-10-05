import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: site.compare.title },
  description: site.compare.description,
  alternates: { canonical: site.compare.path },
  keywords: [
    "Protein Pic vs MyFitnessPal",
    "Protein Pic vs Cal AI",
    "snap protein tracker",
    "AI meal protein count",
  ],
  openGraph: {
    title: site.compare.title,
    description: site.compare.description,
    url: site.compare.path,
  },
  twitter: {
    title: site.compare.title,
    description: site.compare.description,
  },
};

const picks = [
  {
    want: "Full calorie + macro diary, huge food database, Android + iOS",
    app: "MyFitnessPal",
  },
  {
    want: "Fast photo → calories + full macros (protein, carbs, fat)",
    app: "Cal AI",
  },
  {
    want: "One protein target, camera-first, minimal logging friction",
    app: "Protein Pic",
  },
] as const;

const glance: { label: string; cells: ReactNode[] }[] = [
  {
    label: "Core job",
    cells: [
      <>
        Hit a daily <strong className="font-semibold text-ink">protein</strong>{" "}
        number
      </>,
      "Log calories + macros + exercise",
      <>
        Snap meals for{" "}
        <strong className="font-semibold text-ink">calories + macros</strong>
      </>,
    ],
  },
  {
    label: "Logging feel",
    cells: [
      "Photo → protein (edit before save)",
      "Search / barcode / voice / meal scan (Premium)",
      "Photo → full macros (Premium)",
    ],
  },
  {
    label: "Platforms",
    cells: [
      <>
        <strong className="font-semibold text-ink">iOS only</strong> (no
        Android as of this page)
      </>,
      "iOS + Android + web",
      "iOS + Android",
    ],
  },
  {
    label: "Free tier",
    cells: [
      "Free to start; core flow behind trial → paid",
      "Usable free diary (ads); Premium unlocks speed tools",
      <>
        Free download;{" "}
        <strong className="font-semibold text-ink">
          AI photo scan is paid
        </strong>{" "}
        (common report)
      </>,
    ],
  },
  {
    label: "Trial (public)",
    cells: [
      site.pricing.trial,
      "7-day Premium trial (eligible first-time)",
      "3-day trial (common report)",
    ],
  },
  {
    label: "Typical paid price (US, public / commonly shown)",
    cells: [
      <>
        <strong className="font-semibold text-ink">
          {site.pricing.monthlyShort} or {site.pricing.yearlyShort}
        </strong>{" "}
        via Apple IAP
      </>,
      "Premium ~$19.99/mo or $79.99/yr; Premium+ ~$24.99/mo or $99.99/yr (confirm in-app)",
      "Commonly $9.99/mo or $29.99/yr; paywall A/B-tests—confirm in-app",
    ],
  },
  {
    label: "Social / accountability",
    cells: [
      "Groups + streaks (protein)",
      "Large community + friends (category-leading scale)",
      "Groups + streaks (reported on Premium)",
    ],
  },
  {
    label: "Best for",
    cells: [
      "Gym protein targets; GLP-1 protein protection (not dose tracking)",
      "Long-term food diary; custom macros; device sync",
      "Ballpark full-macro logging from photos",
    ],
  },
];

const faqs = [
  {
    q: "Is Protein Pic a MyFitnessPal killer?",
    a: "No. MFP wins on breadth. Protein Pic wins when protein is the only daily score that matters.",
  },
  {
    q: "Is Protein Pic just Cal AI for protein?",
    a: "Related category, different job. Cal AI optimizes for full macros from a photo. Protein Pic optimizes for protein adherence and habit (streaks and groups) around that one target.",
  },
  {
    q: "Do you have a free forever plan like MFP?",
    a: "Protein Pic is free to start with a short trial, then a subscription. MFP’s free diary is more complete for long-term unpaid use.",
  },
  {
    q: "Android?",
    a: "Not yet. Use MFP or Cal AI if you need Android today.",
  },
  {
    q: "Accuracy?",
    a: "No app should promise perfect grams from a photo of a mixed plate. Protein Pic lets you edit before save. We do not invent head-to-head accuracy stats on this page.",
  },
] as const;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function ComparePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-sm text-muted">
            <Link href="/" className="hover:text-ink">
              Protein Pic
            </Link>
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {site.compare.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Three apps, three jobs. MyFitnessPal is the full nutrition journal.
            Cal AI is snap-to-calories (and macros). Protein Pic is
            snap-to-protein—one daily number, less spreadsheet.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            This page is an honest comparison. No fake accuracy scores. Pricing
            is what was publicly listed or commonly reported as of early
            October 2026; labels note anything that A/B-tests or we could not
            verify live in each App Store region.
          </p>

          <section className="mt-14" aria-labelledby="quick-take">
            <h2
              id="quick-take"
              className="font-display text-3xl font-semibold tracking-tight text-ink"
            >
              Quick take
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {picks.map((pick) => (
                <article
                  key={pick.app}
                  className="rounded-2xl border border-ink/8 bg-white/70 p-6 shadow-[0_12px_30px_-24px_rgba(16,24,32,0.45)]"
                >
                  <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
                    If you want
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {pick.want}
                  </p>
                  <p className="mt-5 text-xs font-semibold tracking-[0.16em] text-muted uppercase">
                    Start here
                  </p>
                  <p className="mt-1 font-display text-2xl font-semibold text-ink">
                    {pick.app}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
              You can use more than one. Many people keep MFP for history and
              use a snap app for dinner. The question is which app owns the
              habit you’ll actually open every day.
            </p>
          </section>

          <section className="mt-16" aria-labelledby="at-a-glance">
            <h2
              id="at-a-glance"
              className="font-display text-3xl font-semibold tracking-tight text-ink"
            >
              At a glance
            </h2>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-ink/8 bg-white/70">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                <caption className="sr-only">
                  At a glance comparison of Protein Pic, MyFitnessPal, and Cal
                  AI
                </caption>
                <thead>
                  <tr className="border-b border-ink/10">
                    <th
                      scope="col"
                      className="sticky left-0 bg-paper px-4 py-3 font-medium text-muted"
                    >
                      <span className="sr-only">Topic</span>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 font-semibold text-ink"
                    >
                      Protein Pic
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 font-semibold text-ink"
                    >
                      MyFitnessPal
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 font-semibold text-ink"
                    >
                      Cal AI
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {glance.map((row) => (
                    <tr key={row.label} className="border-b border-ink/8 last:border-0">
                      <th
                        scope="row"
                        className="sticky left-0 bg-paper px-4 py-3 align-top font-semibold text-ink"
                      >
                        {row.label}
                      </th>
                      {row.cells.map((cell, index) => (
                        <td
                          key={`${row.label}-${index}`}
                          className="px-4 py-3 align-top leading-relaxed text-muted"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <aside className="mt-4 rounded-2xl border border-ink/10 bg-paper px-5 py-4">
              <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
                Unknown — verify before treating a price as live
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Exact Cal AI SKU shown to a given user (weekly, monthly, and
                annual variants are reported). Whether your MyFitnessPal region
                shows the same Premium and Premium+ numbers. Any Protein Pic
                App Store rating-count change after this page.
              </p>
            </aside>
          </section>

          <section className="mt-16 max-w-3xl" aria-labelledby="mfp-wins">
            <h2
              id="mfp-wins"
              className="font-display text-3xl font-semibold tracking-tight text-ink"
            >
              Where MyFitnessPal wins
            </h2>
            <h3 className="mt-6 text-lg font-semibold text-ink">
              Depth and durability
            </h3>
            <p className="mt-2 leading-relaxed text-muted">
              MFP is still the default food diary for millions of people. If
              you need years of history, a massive branded-food database,
              barcode-first packaged logging, exercise sync across many
              devices, and a free tier you can actually live in, MFP wins.
            </p>
            <h3 className="mt-6 text-lg font-semibold text-ink">
              Full nutrition, not one macro
            </h3>
            <p className="mt-2 leading-relaxed text-muted">
              Custom macro goals (Premium), net-carbs mode, intermittent fasting
              tools, meal planning (Premium+), voice log, and a broader
              dietitian-and-trainer framing. If protein is one line in a bigger
              plan, MFP is built for that.
            </p>
            <h3 className="mt-6 text-lg font-semibold text-ink">
              Platform coverage
            </h3>
            <p className="mt-2 leading-relaxed text-muted">
              Android and web matter if your household or coach isn’t
              all-iPhone.
            </p>
            <p className="mt-6 leading-relaxed text-muted">
              <strong className="font-semibold text-ink">Tradeoff:</strong>{" "}
              Speed. Manual search and serving sizes are the classic friction.
              Premium meal scan, barcode, and voice help, but the product
              identity is still a complete journal—more fields, more decisions.
            </p>
          </section>

          <section className="mt-16 max-w-3xl" aria-labelledby="cal-wins">
            <h2
              id="cal-wins"
              className="font-display text-3xl font-semibold tracking-tight text-ink"
            >
              Where Cal AI wins
            </h2>
            <h3 className="mt-6 text-lg font-semibold text-ink">
              Snap → full macros
            </h3>
            <p className="mt-2 leading-relaxed text-muted">
              Cal AI’s headline is photo logging for calories and protein,
              carbs, and fat. If your goal is a calorie budget with macro
              balance, that single-photo workflow matches the job better than
              a protein-only app.
            </p>
            <h3 className="mt-6 text-lg font-semibold text-ink">
              Same price band as Protein Pic (often)
            </h3>
            <p className="mt-2 leading-relaxed text-muted">
              The most commonly reported Cal AI Premium offer is{" "}
              <strong className="font-semibold text-ink">
                $9.99/mo or $29.99/yr
              </strong>
              —similar to Protein Pic’s Apple in-app purchase. Treat that as
              commonly shown, not guaranteed. Cal AI is widely reported to
              A/B-test paywalls.
            </p>
            <h3 className="mt-6 text-lg font-semibold text-ink">Android</h3>
            <p className="mt-2 leading-relaxed text-muted">
              If you need photo macros on Android, Cal AI covers a platform
              Protein Pic does not yet.
            </p>
            <p className="mt-6 leading-relaxed text-muted">
              <strong className="font-semibold text-ink">Tradeoff:</strong> Cal
              AI is a calorie-first tracker with AI photo as the hook. Free
              without Premium is limited for the photo feature people came for
              (commonly reported). Accuracy on mixed and restaurant plates is
              debated in public reviews across the category. We do not claim a
              winner on accuracy here. No independent head-to-head with Protein
              Pic is cited on this page.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              <strong className="font-semibold text-ink">
                Context (public, 2026):
              </strong>{" "}
              Cal AI was acquired by MyFitnessPal (announced March 2026) and
              continues as a standalone app. Subscriptions are separate—MFP
              Premium does not unlock Cal AI (confirm current terms in each
              store listing).
            </p>
          </section>

          <section className="mt-16 max-w-3xl" aria-labelledby="pp-wins">
            <h2
              id="pp-wins"
              className="font-display text-3xl font-semibold tracking-tight text-ink"
            >
              Where Protein Pic wins
            </h2>
            <h3 className="mt-6 text-lg font-semibold text-ink">
              Protein is the product
            </h3>
            <p className="mt-2 leading-relaxed text-muted">
              Protein Pic is for people whose daily job is “hit X grams of
              protein,” not “balance four macros and a calorie budget.” The UI
              and the path to download are built around one number.
            </p>
            <h3 className="mt-6 text-lg font-semibold text-ink">
              Snap → protein count → edit → save
            </h3>
            <p className="mt-2 leading-relaxed text-muted">
              Camera-first for real plates (home, takeout, restaurants). AI
              names food and estimates portions; you can edit before you save.
              Barcode and menu scan help packaged and restaurant choices. Built
              for the protein job, not a lab spreadsheet.
            </p>
            <h3 className="mt-6 text-lg font-semibold text-ink">
              Accountability that matches the job
            </h3>
            <p className="mt-2 leading-relaxed text-muted">
              Streaks and groups oriented around daily protein—useful for gym
              friends or household accountability without turning dinner into a
              group calorie audit.
            </p>
            <h3 className="mt-6 text-lg font-semibold text-ink">
              GLP-1 protein protection framing
            </h3>
            <p className="mt-2 leading-relaxed text-muted">
              When appetite is low, protein is how many people protect muscle.
              Protein Pic is a wellness and protein tracker, not a dose or shot
              tracker. If that is the job, a calorie-first app adds noise.
            </p>
            <h3 className="mt-6 text-lg font-semibold text-ink">
              Price for the narrow job
            </h3>
            <p className="mt-2 leading-relaxed text-muted">
              At{" "}
              <strong className="font-semibold text-ink">
                {site.pricing.monthlyShort} or {site.pricing.yearlyShort}
              </strong>{" "}
              ({site.pricing.trial}), you are not paying MyFitnessPal Premium
              rates for a full diary you may not open.
            </p>
            <h3 className="mt-6 text-lg font-semibold text-ink">
              Tradeoffs (honest)
            </h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 leading-relaxed text-muted">
              <li>
                <strong className="font-semibold text-ink">iOS only</strong>{" "}
                today—no Android.
              </li>
              <li>
                <strong className="font-semibold text-ink">
                  Not a full calorie or all-macros diary.
                </strong>{" "}
                If you need carbs, fat, and calories as first-class every day,
                Cal AI or MyFitnessPal fit better.
              </li>
              <li>
                <strong className="font-semibold text-ink">
                  Early social proof.
                </strong>{" "}
                The App Store rating on this marketing site is{" "}
                {site.rating.average} from {site.rating.count} ratings. Treat
                that as an early signal, not a crowd. Read the live listing.
              </li>
              <li>
                We do not publish a “percent more accurate than Cal AI” claim.
                Photo estimates are estimates. Edit-before-save is how Protein
                Pic handles uncertainty.
              </li>
            </ul>
          </section>

          <section className="mt-16" aria-labelledby="pricing">
            <h2
              id="pricing"
              className="font-display text-3xl font-semibold tracking-tight text-ink"
            >
              Pricing detail
            </h2>
            <p className="mt-3 text-sm text-muted">
              As of early October 2026. Confirm the offer shown in your App
              Store or Google Play account.
            </p>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              <article className="rounded-2xl border border-ink/8 bg-white/70 p-6">
                <h3 className="font-display text-2xl font-semibold text-ink">
                  Protein Pic
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                  <li>Free to start</li>
                  <li>
                    <strong className="font-semibold text-ink">
                      {site.pricing.trial}
                    </strong>
                    , then{" "}
                    <strong className="font-semibold text-ink">
                      {site.pricing.monthly}
                    </strong>{" "}
                    or{" "}
                    <strong className="font-semibold text-ink">
                      {site.pricing.yearly}
                    </strong>{" "}
                    through Apple In-App Purchase
                  </li>
                  <li>
                    Site:{" "}
                    <Link href="/" className="text-teal underline underline-offset-4">
                      proteinpic.app
                    </Link>
                  </li>
                  <li>App Store id: {site.appStoreId}</li>
                </ul>
              </article>
              <article className="rounded-2xl border border-ink/8 bg-white/70 p-6">
                <h3 className="font-display text-2xl font-semibold text-ink">
                  MyFitnessPal
                </h3>
                <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-teal uppercase">
                  US public marketing / commonly cited
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                  <li>Free plan: food + exercise logging with ads</li>
                  <li>
                    <strong className="font-semibold text-ink">Premium:</strong>{" "}
                    about $19.99/mo or $79.99/yr (~$6.67/mo billed annually)
                  </li>
                  <li>
                    <strong className="font-semibold text-ink">Premium+:</strong>{" "}
                    about $24.99/mo or $99.99/yr (adds meal planner and related
                    tools)
                  </li>
                  <li>
                    <strong className="font-semibold text-ink">
                      7-day free trial
                    </strong>{" "}
                    for eligible first-time Premium users
                  </li>
                  <li>
                    Confirm live prices in the App Store or Google Play for
                    your account—promos and regions vary
                  </li>
                  <li>
                    Source check:{" "}
                    <a
                      href="https://www.myfitnesspal.com/premium"
                      className="text-teal underline underline-offset-4"
                    >
                      myfitnesspal.com/premium
                    </a>
                  </li>
                </ul>
              </article>
              <article className="rounded-2xl border border-ink/8 bg-white/70 p-6">
                <h3 className="font-display text-2xl font-semibold text-ink">
                  Cal AI
                </h3>
                <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-teal uppercase">
                  Commonly reported · verify in-app
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                  <li>Free to download; AI photo scan typically behind Premium</li>
                  <li>
                    Most common reported offers:{" "}
                    <strong className="font-semibold text-ink">
                      $9.99/mo or $29.99/yr
                    </strong>
                    ; other weekly, monthly, and annual SKUs reported via A/B
                    tests
                  </li>
                  <li>
                    <strong className="font-semibold text-ink">
                      3-day trial
                    </strong>{" "}
                    commonly reported (payment method usually required)
                  </li>
                  <li>
                    Family plan about $59.99/yr has been reported in
                    third-party roundups
                  </li>
                  <li>
                    <strong className="font-semibold text-ink">Unknown</strong>{" "}
                    until you see the live paywall: the exact SKU shown to US
                    users on a given day
                  </li>
                </ul>
              </article>
            </div>
          </section>

          <section className="mt-16 max-w-3xl" aria-labelledby="who">
            <h2
              id="who"
              className="font-display text-3xl font-semibold tracking-tight text-ink"
            >
              Who should pick which
            </h2>
            <div className="mt-6 space-y-5">
              <p className="leading-relaxed text-muted">
                <strong className="font-semibold text-ink">
                  Choose MyFitnessPal if
                </strong>{" "}
                you want the industry-standard food diary, Android and web,
                custom macros across the board, or you already live in MFP and
                only need Premium for speed tools.
              </p>
              <p className="leading-relaxed text-muted">
                <strong className="font-semibold text-ink">
                  Choose Cal AI if
                </strong>{" "}
                you want photo logging for a calorie and full-macro budget and
                you are fine with a calorie-first product (and you verify the
                paywall offer you are shown).
              </p>
              <p className="leading-relaxed text-muted">
                <strong className="font-semibold text-ink">
                  Choose Protein Pic if
                </strong>{" "}
                your north star is a protein gram target—gym, muscle, or GLP-1
                protein protection—and you want the shortest path from plate
                photo to that number on iPhone.
              </p>
            </div>
          </section>

          <section className="mt-16 max-w-3xl" aria-labelledby="faq">
            <h2
              id="faq"
              className="font-display text-3xl font-semibold tracking-tight text-ink"
            >
              FAQ
            </h2>
            <div className="mt-6 space-y-8">
              {faqs.map((item) => (
                <div key={item.q}>
                  <h3 className="text-lg font-semibold text-ink">{item.q}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        <section className="bg-teal">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 py-14 sm:px-6 md:flex-row md:items-center">
            <div className="max-w-xl text-white">
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Hit your protein number without the spreadsheet.
              </h2>
              <p className="mt-3 text-white/85">
                Snap a meal. Get a protein count. Keep the streak.
              </p>
              <p className="mt-2 text-sm text-white/80">
                Free to start · {site.pricing.trial} · then{" "}
                {site.pricing.monthlyShort} or {site.pricing.yearlyShort}
              </p>
            </div>
            <Button asChild size="lg" variant="navy">
              <a href={site.appStoreUrl}>Get Protein Pic on the App Store</a>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
