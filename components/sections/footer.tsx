import Link from "next/link";

import { appDownloadHref } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="site-shell pb-10 pt-6">
      <div className="flex flex-col gap-6 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-white">Filevia</p>
          <p className="mt-2 text-sm text-muted">
            Private PDF tools for Android. Fast, offline, and built for the device in your hand.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-muted">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <Link href="/tools" className="transition hover:text-white">
            Tools
          </Link>
          <Link href="/pricing" className="transition hover:text-white">
            Pricing
          </Link>
          <Link href={appDownloadHref} className="transition hover:text-white">
            Download App
          </Link>
        </div>
      </div>
    </footer>
  );
}
