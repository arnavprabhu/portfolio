import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeScript from "@/components/ThemeScript";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arnavprabhu.com"),
  title: "Arnav Prabhu — Finance & AI",
  description:
    "Finance and AI. Strategy, risk, and building with models.",
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arnav Prabhu",
  jobTitle: "Applied AI Engineer",
  description:
    "Applied AI builder and finance student at UT Dallas. Builds RAG pipelines, multi-agent systems, and LLM applications grounded in finance and risk.",
  url: "https://arnavprabhu.com",
  image: "https://arnavprabhu.com/icon.png",
  sameAs: [
    "https://github.com/arnavprabhu",
    "https://www.linkedin.com/in/arnavprabhu/",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "The University of Texas at Dallas",
  },
  knowsAbout: [
    "Retrieval-Augmented Generation (RAG)",
    "Multi-Agent Systems",
    "LLM Applications",
    "Machine Learning",
    "Financial Modeling",
    "Quantitative Analysis",
    "Risk Management",
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
