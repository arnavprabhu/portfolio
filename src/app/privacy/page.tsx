import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";
import SiteEffects from "@/components/SiteEffects";

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
      <main>
        <PrivacyPolicyContent />
      </main>
      <Footer />
    </>
  );
}
