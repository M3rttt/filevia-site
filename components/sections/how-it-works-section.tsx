import { FolderOpen, Sparkles, Zap } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    icon: FolderOpen,
    title: "1. Open file",
    copy: "Pick a document from your device, camera or recent files."
  },
  {
    icon: Sparkles,
    title: "2. Choose tool",
    copy: "Select compress, merge, sign, convert, OCR or another PDF action."
  },
  {
    icon: Zap,
    title: "3. Done instantly",
    copy: "Filevia processes the task locally so you can move on without upload delays."
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="site-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="How it works"
        title="Three taps from messy document to done."
        description="The experience is intentionally simple because the heavy lifting happens right on the device."
      />
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {steps.map(({ icon: Icon, title, copy }) => (
          <article key={title} className="glass-panel p-6">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-3 text-accent">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
