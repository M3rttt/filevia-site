import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftRight, ScanSearch } from "lucide-react";

import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { ToolGridSection } from "@/components/sections/tool-grid-section";
import { SiteBackground } from "@/components/site/background";
import { PageHero } from "@/components/site/page-hero";
import { toolHighlights } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Filevia Tools | Private PDF workflows",
  description: "Explore Merge PDF, Compress PDF, PDF to Word, Word to PDF, Split PDF, and Image to PDF with Filevia's mobile-first product experience."
};

export default function ToolsPage() {
  const iconMap = {
    workflow: ArrowLeftRight,
    preview: ScanSearch
  };

  return (
    <main className="relative overflow-hidden">
      <SiteBackground />
      <Header />
      <PageHero
        eyebrow="Product tools"
        title="Choose the exact PDF workflow you need, with Filevia's privacy-first feel from the first click."
        description="These tool pages are designed to feel active and usable now while staying true to Filevia's real advantage: on-device, offline-first PDF work."
        actions={
          <>
            <Link href="/pricing" className="secondary-button">
              View Pricing
            </Link>
            <Link href="/#android-app" className="primary-button">
              Get the App
            </Link>
          </>
        }
      />

      <section className="site-shell pb-6">
        <div className="grid gap-4 md:grid-cols-2">
          {toolHighlights.map(({ iconName, title, description }) => {
            const Icon = iconMap[iconName];

            return (
              <article key={title} className="glass-panel p-6">
                <div className="inline-flex rounded-2xl bg-white/5 p-3 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-white">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <ToolGridSection />
      <Footer />
    </main>
  );
}
