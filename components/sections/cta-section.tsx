import Link from "next/link";

import { appDownloadHref } from "@/lib/site-data";

export function CtaSection() {
  return (
    <section id="download" className="site-shell py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,rgba(110,231,200,0.16),rgba(17,36,55,0.96)_48%,rgba(255,184,107,0.14))] px-8 py-12 shadow-glow sm:px-12 sm:py-14">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.12),_transparent_58%)] lg:block" />
        <div className="relative max-w-3xl space-y-6">
          <span className="eyebrow">Download Filevia</span>
          <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Stop paying for PDF tools.
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            Get a faster, more private PDF workflow on Android with no upload step and no subscription tax attached to every action.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/tools" className="primary-button">
              Start Free
            </Link>
            <Link href={appDownloadHref} className="secondary-button">
              Get the App
            </Link>
            <Link href="/tools" className="secondary-button">
              Explore Tools
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
