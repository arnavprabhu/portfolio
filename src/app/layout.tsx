import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arnav Prabhu | Finance, Business Analytics & AI",
  description:
    "Bridging finance and artificial intelligence to drive data-informed strategy and risk management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-[#000000] text-[#F5F5F7]`}>
        {children}
      </body>
    </html>
  );
}
