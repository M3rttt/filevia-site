import { Camera, FileArchive, FileInput, FileScan, FileSignature, Languages } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";

const features = [
  {
    icon: Camera,
    title: "Scan with camera",
    copy: "Capture receipts, paperwork and notes with a mobile-first scanner built into the app."
  },
  {
    icon: FileInput,
    title: "Merge PDFs",
    copy: "Combine multiple documents without exporting them to another service."
  },
  {
    icon: FileArchive,
    title: "Compress",
    copy: "Reduce file size on the device for faster sharing and easier storage."
  },
  {
    icon: FileScan,
    title: "Convert",
    copy: "Switch between formats and PDF workflows without waiting on a server round trip."
  },
  {
    icon: FileSignature,
    title: "Sign",
    copy: "Apply signatures and send finished documents straight from your phone."
  },
  {
    icon: Languages,
    title: "OCR",
    copy: "Turn scans into searchable text while keeping sensitive documents local."
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="site-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="Feature set"
        title="Everything you need to handle PDFs on mobile, without the usual trade-offs."
        description="Every feature supports the same promise: move fast, stay private, and avoid subscription friction whether you begin on the web or inside the Android app."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {features.map(({ icon: Icon, title, copy }) => (
          <article
            key={title}
            className="group rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] p-6 transition hover:-translate-y-1 hover:border-accent/30"
          >
            <div className="inline-flex rounded-2xl bg-white/5 p-3 text-accent transition group-hover:bg-accent/10">
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
