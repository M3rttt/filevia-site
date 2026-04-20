import { ArrowUpRight, Download, SmartphoneCharging } from "lucide-react";
import Link from "next/link";

import { appDownloadHref } from "@/lib/site-data";

export function AndroidAppSection() {
  return (
    <section id="android-app" className="site-shell py-16 sm:py-20">
      <div className="grid gap-6 rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,rgba(110,231,200,0.15),rgba(9,19,29,0.96)_42%,rgba(143,188,255,0.18))] p-8 shadow-glow sm:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:p-12">
        <div className="space-y-5">
          <span className="eyebrow">Available on Android</span>
          <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Filevia gets even better when the workflow lives in your pocket.
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            Start with the web experience, then jump into the Android app for private, offline processing that never asks you to upload a file.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href={appDownloadHref} className="primary-button">
              Download App
              <Download className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/tools" className="secondary-button">
              Explore Tools
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="rounded-[32px] border border-white/10 bg-[#09131D] p-5 sm:p-6">
          <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-accent/10 p-3 text-accent">
                <SmartphoneCharging className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Android build</p>
                <p className="mt-1 text-sm text-muted">Made for fast, private PDF work on-device</p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <p className="text-xs uppercase tracking-[0.18em] text-accent">Offline</p>
                <p className="mt-2 text-sm leading-6 text-muted">Keep working without depending on a connection or cloud service.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <p className="text-xs uppercase tracking-[0.18em] text-accentWarm">Private</p>
                <p className="mt-2 text-sm leading-6 text-muted">Sensitive files stay local from import to export.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
