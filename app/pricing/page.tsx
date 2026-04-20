import type { Metadata } from "next";
import Link from "next/link";

import { AndroidAppSection } from "@/components/sections/android-app-section";
import { DifferenceSection } from "@/components/sections/difference-section";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { PricingPreviewSection } from "@/components/sections/pricing-preview-section";
import { SiteBackground } from "@/components/site/background";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Pricing | Filevia",
  description: "Choose Free or Pro and keep your PDF workflow fast, private, and mobile-first with Filevia."
};

export default function PricingPage() {
  return (
    <main className="relative overflow-hidden">
      <SiteBackground />
      <Header />
      <PageHero
        eyebrow="Pricing"
        title="Straightforward pricing for people who want PDF tools without a subscription treadmill."
        description="Start free with everyday limits or unlock the faster, unlimited Filevia experience with Pro."
        actions={
          <>
            <Link href="/tools" className="primary-button">
              Start Free
            </Link>
            <Link href="/#android-app" className="secondary-button">
              Get the App
            </Link>
          </>
        }
      />
      <PricingPreviewSection />
      <DifferenceSection />
      <AndroidAppSection />
      <Footer />
    </main>
  );
}
