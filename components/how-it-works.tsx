import { PhoneFrame } from "@/components/phone-frame";

const steps = [
  {
    n: "01",
    title: "Snap",
    body: "Point the camera at your plate. Home-cooked, takeout, or a restaurant dish. No food database to scroll.",
    src: "/images/scan.jpg",
    alt: "Protein Pic scan screen with a salmon salad in the camera frame and the prompt to position your meal",
  },
  {
    n: "02",
    title: "Get protein",
    body: "AI names the food, estimates portions, and returns a protein count you can edit before you save.",
    src: "/images/result.jpg",
    alt: "Protein Pic analysis of a salmon salad showing 25 grams of protein with a high-confidence badge",
  },
  {
    n: "03",
    title: "Hit your goal",
    body: "One number for the day. Streaks reward showing up. Groups let friends, family, or the gym keep you accountable.",
    src: "/images/home.jpg",
    alt: "Protein Pic today view after hitting the daily protein target, with quick-log foods and logging methods",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-navy text-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-semibold tracking-[0.18em] text-teal-bright uppercase">
          How it works
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Photo in. Protein out. Then keep the streak going.
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-6">
          {steps.map((step) => (
            <article key={step.n} className="flex flex-col">
              <PhoneFrame src={step.src} alt={step.alt} className="max-w-[240px]" />
              <div className="mt-6">
                <p className="text-xs font-semibold tracking-[0.16em] text-teal-bright">
                  {step.n}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/75">
                  {step.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
