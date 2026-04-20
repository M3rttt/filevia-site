import { Check, Minus } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { comparisonRows, differentiationPoints } from "@/lib/site-data";

export function DifferenceSection() {
  return (
    <section id="difference" className="site-shell py-16 sm:py-20">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {differentiationPoints.map(({ icon: Icon, title, description }) => (
          <article key={title} className="glass-panel p-6">
            <div className="inline-flex rounded-2xl bg-white/5 p-3 text-accent">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
          </article>
        ))}
      </div>
      <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading
          eyebrow="Why Filevia wins"
          title="Filevia solves the exact reasons people abandon Adobe and iLovePDF-style workflows."
          description="This is not another generic online PDF site. It is a fast, private Android app ecosystem built for people who want control, not another upload step."
        />
        <div className="glass-panel overflow-hidden">
          <div className="grid grid-cols-[1fr_0.9fr_0.9fr_0.9fr] border-b border-white/10 bg-white/[0.03] px-6 py-5 text-sm font-semibold text-white">
            <span>Compare</span>
            <span>Filevia</span>
            <span>Adobe Acrobat</span>
            <span>iLovePDF</span>
          </div>
          {comparisonRows.map((row, index) => (
            <div
              key={row.label}
              className={`grid grid-cols-[1fr_0.9fr_0.9fr_0.9fr] px-6 py-5 ${
                index !== comparisonRows.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              <div className="pr-4 text-sm font-medium text-white">{row.label}</div>
              <div className="flex items-start gap-3 pr-4 text-sm text-muted">
                <Check className="mt-0.5 h-4 w-4 flex-none text-accent" />
                <span>{row.filevia}</span>
              </div>
              <div className="flex items-start gap-3 pr-4 text-sm text-muted">
                <Minus className="mt-0.5 h-4 w-4 flex-none text-accentWarm" />
                <span>{row.adobe}</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-muted">
                <Minus className="mt-0.5 h-4 w-4 flex-none text-accentWarm" />
                <span>{row.ilovepdf}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
