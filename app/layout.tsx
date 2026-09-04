import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Protein Pic: snap a meal, hit your protein",
    template: "%s · Protein Pic",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.seller }],
  keywords: [
    "protein tracker",
    "AI food scanner",
    "protein app",
    "GLP-1 protein",
    "meal photo protein",
    "Apple Health protein",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "Protein Pic: snap a meal, hit your protein",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Protein Pic: snap a meal, hit your protein",
    description: site.description,
  },
  appleWebApp: {
    title: site.name,
    capable: true,
    statusBarStyle: "default",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "HealthApplication",
    operatingSystem: "iOS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      ratingCount: 2,
    },
    downloadUrl: site.appStoreUrl,
    author: {
      "@type": "Person",
      name: site.seller,
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream font-sans text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
