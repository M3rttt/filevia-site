import { ToolCard } from "@/components/site/tool-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { toolDefinitions } from "@/lib/site-data";

export function ToolGridSection() {
  return (
    <section id="tools" className="site-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="Tool library"
        title="Core PDF tools, presented like a real workspace instead of a placeholder feature list."
        description="Explore the most-used Filevia workflows on the web, then carry the same privacy-first workflow into the Android app."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {toolDefinitions.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </section>
  );
}
