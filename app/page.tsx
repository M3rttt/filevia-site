import { AndroidAppSection } from "@/components/sections/android-app-section";
import { CtaSection } from "@/components/sections/cta-section";
import { DifferenceSection } from "@/components/sections/difference-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { PricingPreviewSection } from "@/components/sections/pricing-preview-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { SolutionSection } from "@/components/sections/solution-section";
import { ToolGridSection } from "@/components/sections/tool-grid-section";
import { UiPreviewSection } from "@/components/sections/ui-preview-section";
import { SiteBackground } from "@/components/site/background";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <SiteBackground />
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <ToolGridSection />
      <DifferenceSection />
      <HowItWorksSection />
      <UiPreviewSection />
      <PricingPreviewSection />
      <AndroidAppSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
