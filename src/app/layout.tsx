import type { Metadata } from "next";
import {
  Instrument_Serif,
  Pixelify_Sans,
  Roboto_Serif,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import ThemeScript from "@/components/ThemeScript";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const robotoSerif = Roboto_Serif({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
  display: "swap",
});

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arnavprabhu.com"),
  title: "Arnav Prabhu - Finance & AI",
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
      className={`scroll-smooth ${instrumentSerif.variable} ${robotoSerif.variable} ${pixelifySans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative bg-surface-dark antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
