import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeScript from "@/components/ThemeScript";
import { SITE_URL, person, projects } from "@/lib/content";
import { siteJsonLd } from "@/lib/jsonld";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const description =
  "Arnav Prabhu builds applied AI for finance: RAG, multi-agent systems, LLM benchmarking and local inference. Finance and AI student at UT Dallas, open to roles.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${person.name} — Finance & AI`,
    template: `%s | ${person.name}`,
  },
  description,
  authors: [{ name: person.name, url: SITE_URL }],
  creator: person.name,
  keywords: [
    person.name,
    "applied AI",
    "AI in finance",
    "RAG",
    "multi-agent systems",
    "LLM benchmark",
    "local LLM inference",
    "UT Dallas",
    ...projects.map((p) => p.name),
  ],
  alternates: {
    canonical: "/",
    types: { "text/markdown": "/llms.txt" },
  },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: person.name,
    title: `${person.name} — Finance & AI`,
    description,
    locale: "en_US",
    firstName: "Arnav",
    lastName: "Prabhu",
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.name} — Finance & AI`,
    description,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={archivo.variable}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
