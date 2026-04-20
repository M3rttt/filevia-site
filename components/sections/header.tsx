import Link from "next/link";

import { appDownloadHref, primaryNav } from "@/lib/site-data";

export function Header() {
  return (
    <header className="site-shell sticky top-0 z-40 pt-6">
      <div className="glass-panel flex items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent text-sm font-black text-slate-950">
            F
          </span>
          <div>
            <p className="font-semibold text-white">Filevia</p>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">Private PDF power</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {primaryNav.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 sm:flex">
          <Link href="/tools" className="primary-button">
            Start Free
          </Link>
          <Link href={appDownloadHref} className="secondary-button hidden lg:inline-flex">
            Get the App
          </Link>
        </div>
      </div>
    </header>
  );
}
