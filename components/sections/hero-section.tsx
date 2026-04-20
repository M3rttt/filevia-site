import Link from "next/link";
import { ChevronRight, ShieldCheck, Smartphone, WifiOff } from "lucide-react";

import { PhoneMockup } from "@/components/ui/phone-mockup";
import { appDownloadHref } from "@/lib/site-data";

const proofPoints = [
  {
    icon: Smartphone,
    label: "Built for Android, not desktop workflows"
  },
  {
    icon: WifiOff,
    label: "Offline processing keeps files on your device"
  },
  {
    icon: ShieldCheck,
    label: "No upload, no account, no subscription trap"
  }
];

export function HeroSection() {
  return (
    <section id="top" className="site-shell grid gap-14 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-28 lg:pt-20">
      <div className="space-y-8">
        <span className="eyebrow">Mobile-first PDF workflow</span>
        <div className="space-y-6">
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Your PDFs. Finally under your control.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            Edit, convert, scan and manage PDFs with a privacy-first workflow built for Android. No uploads. No subscriptions.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/tools" className="primary-button">
            Start Free
          </Link>
          <Link href="/tools" className="secondary-button">
            Explore Tools
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
          <Link href={appDownloadHref} className="secondary-button">
            Get the App
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {proofPoints.map(({ icon: Icon, label }) => (
            <div key={label} className="glass-panel px-4 py-4">
              <Icon className="h-5 w-5 text-accent" />
              <p className="mt-3 text-sm leading-6 text-muted">{label}</p>
            </div>
          ))}
        </div>
      </div>
      <PhoneMockup />
    </section>
  );
}
