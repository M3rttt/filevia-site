import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AndroidAppSection } from "@/components/sections/android-app-section";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { SiteBackground } from "@/components/site/background";
import { PageHero } from "@/components/site/page-hero";
import { ToolWorkspace } from "@/components/site/tool-workspace";
import { toolDefinitions, toolMap } from "@/lib/site-data";

type ToolPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return toolDefinitions.map((tool) => ({
    slug: tool.slug
  }));
}

export function generateMetadata({ params }: ToolPageProps): Metadata {
  const tool = toolMap[params.slug];

  if (!tool) {
    return {
      title: "Tool not found | Filevia"
    };
  }

  return {
    title: `${tool.title} | Filevia`,
    description: tool.description
  };
}

export default function ToolPage({ params }: ToolPageProps) {
  const tool = toolMap[params.slug];

  if (!tool) {
    notFound();
  }

  return (
    <main className="relative overflow-hidden">
      <SiteBackground />
      <Header />
      <PageHero
        eyebrow="Tool detail"
        title={`${tool.title}, without the upload ritual.`}
        description={tool.description}
        actions={
          <>
            <Link href="/tools" className="secondary-button">
              Explore Tools
            </Link>
            <Link href="/pricing" className="secondary-button">
              Pricing
            </Link>
          </>
        }
      />

      <section className="site-shell pb-16">
        <ToolWorkspace tool={tool} />
      </section>

      <AndroidAppSection />
      <Footer />
    </main>
  );
}
