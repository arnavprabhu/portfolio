import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";
import SiteEffects from "@/components/SiteEffects";
import { HAIRLINE_BORDER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Arnav Prabhu",
  description:
    "How this portfolio site collects and uses limited visitor analytics.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteEffects />
      <Header />
      <main
        className="relative z-10 mx-auto max-w-[1920px] border-l border-r border-hairline px-margin-mobile pt-28 pb-section-gap md:px-margin-desktop"
        style={{
          borderLeftColor: HAIRLINE_BORDER,
          borderRightColor: HAIRLINE_BORDER,
        }}
      >
        <PrivacyPolicyContent />
      </main>
      <Footer />
    </>
  );
}
