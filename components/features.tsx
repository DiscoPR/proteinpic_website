import {
  Camera,
  HeartPulse,
  ScanBarcode,
  GraduationCap,
  Users,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Photo scan",
    body: "Take a photo of any meal. The AI identifies what is on the plate, estimates portions, and calculates protein. Built for real food, not lab conditions.",
  },
  {
    icon: ScanBarcode,
    title: "Barcode and menu scan",
    body: "Scan a packaged barcode or a restaurant menu. Know which items hit your target before you order, not after.",
  },
  {
    icon: GraduationCap,
    title: "AI coach",
    body: "Meal suggestions, a personalized 7-day plan, and food picks based on how you actually eat. Not generic blog advice.",
  },
  {
    icon: Users,
    title: "Groups",
    body: "Join friends, family, or the gym. Share daily protein, celebrate streaks, and make the habit something you do together.",
  },
  {
    icon: Shield,
    title: "GLP-1 and muscle",
    body: "When appetite drops, protein is how you protect muscle. Protein Pic keeps you on one number instead of a full calorie spreadsheet.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-teal uppercase">
            What you get
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Everything you need to hit protein. Nothing you will abandon in a week.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-ink/8 bg-white/70 p-6 shadow-[0_12px_30px_-24px_rgba(16,24,32,0.45)]"
            >
              <feature.icon
                className="h-6 w-6 text-teal"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <h3 className="mt-4 text-lg font-semibold text-ink">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.body}
              </p>
            </article>
          ))}
          <article className="rounded-2xl border border-ink/8 bg-navy p-6 text-cream">
            <HeartPulse
              className="h-6 w-6 text-teal-bright"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <h3 className="mt-4 text-lg font-semibold">Apple Health sync</h3>
            <p className="mt-2 text-sm leading-relaxed text-cream/75">
              Version 1.10 can read workouts and active energy from Apple Health
              and raise your protein goal on training days.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
