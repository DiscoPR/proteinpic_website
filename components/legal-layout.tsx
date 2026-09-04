import Link from "next/link";
import type { ReactNode } from "react";

type LegalLayoutProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

export function LegalLayout({ title, updated, children }: LegalLayoutProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm text-muted">
        <Link href="/" className="hover:text-ink">
          Protein Pic
        </Link>
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink">
        {title}
      </h1>
      <p className="mt-2 text-sm text-muted">Last updated {updated}</p>
      <div className="legal-prose mt-10">{children}</div>
    </article>
  );
}
