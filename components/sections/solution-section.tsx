import { LockKeyhole, ScanText, SmartphoneCharging, Zap } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";

const solutionPoints = [
  {
    icon: Zap,
    title: "Instant local processing",
    copy: "Filevia handles PDF actions on-device so edits feel immediate instead of network-dependent."
  },
  {
    icon: LockKeyhole,
    title: "Privacy by default",
    copy: "No uploads means your files never leave the device in the first place."
  },
  {
    icon: SmartphoneCharging,
    title: "Made for touch",
    copy: "A clean Android-first interface keeps complex tools fast and usable with one hand."
  },
  {
    icon: ScanText,
    title: "No login wall",
    copy: "Open the app, pick a tool and finish the job without creating an account."
  }
];

export function SolutionSection() {
  return (
    <section className="site-shell py-16 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="The Filevia way"
          title="A premium PDF workspace designed around your phone, not the cloud."
          description="Filevia removes the friction users have accepted for years: no login, no server wait, no surprise subscription just to finish a document."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {solutionPoints.map(({ icon: Icon, title, copy }) => (
            <article key={title} className="glass-panel p-6">
              <div className="inline-flex rounded-2xl bg-accent/10 p-3 text-accent">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
