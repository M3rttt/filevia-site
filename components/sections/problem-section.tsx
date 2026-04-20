import { CloudUpload, CreditCard, TimerReset } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";

const painPoints = [
  {
    icon: TimerReset,
    title: "Server queues slow everything down",
    copy: "Traditional PDF sites turn a quick edit into a waiting game with upload, process and download loops."
  },
  {
    icon: CloudUpload,
    title: "Your documents leave your phone",
    copy: "Invoices, contracts and IDs get pushed through remote servers before you can finish a simple task."
  },
  {
    icon: CreditCard,
    title: "Useful features hide behind subscriptions",
    copy: "You pay monthly just to merge, compress or sign files you already own."
  }
];

export function ProblemSection() {
  return (
    <section className="site-shell py-16 sm:py-20">
      <div className="glass-panel p-8 sm:p-10 lg:p-12">
        <SectionHeading
          eyebrow="The problem"
          title="Most PDF tools still feel built for someone else's workflow."
          description="Desktop-first products ask mobile users to upload private files, wait for remote processing, and subscribe for basic tasks."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {painPoints.map(({ icon: Icon, title, copy }) => (
            <article key={title} className="rounded-[24px] border border-white/10 bg-[#09131E] p-6">
              <div className="inline-flex rounded-2xl bg-white/5 p-3 text-accentWarm">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
