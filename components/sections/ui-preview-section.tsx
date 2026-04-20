import { BellDot, Folder, Search, SlidersHorizontal, Sparkles } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";

const quickTools = ["Scan", "Merge", "Compress", "Convert", "Sign", "OCR"];

const recentFiles = [
  { name: "lease-agreement.pdf", tag: "Signed" },
  { name: "expense-report.pdf", tag: "Compressed" },
  { name: "whiteboard-notes.pdf", tag: "OCR ready" }
];

export function UiPreviewSection() {
  return (
    <section className="site-shell py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <SectionHeading
          eyebrow="App preview"
          title="A dashboard that feels native to mobile instead of a shrunk-down desktop app."
          description="The UI keeps your most-used tools one tap away, with recent files and quick actions surfaced where they matter."
        />
        <div className="glass-panel p-4 sm:p-6">
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#09131D]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent">Dashboard</p>
                <h3 className="mt-1 text-xl font-semibold text-white">Your files, ready now</h3>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-2xl bg-white/5 p-2 text-muted">
                  <Search className="h-4 w-4" />
                </div>
                <div className="rounded-2xl bg-white/5 p-2 text-muted">
                  <BellDot className="h-4 w-4" />
                </div>
              </div>
            </div>
            <div className="grid gap-5 p-5 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-4">
                <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(110,231,200,0.12),rgba(110,231,200,0.03))] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">Quick tools</p>
                      <p className="mt-1 text-sm text-muted">Built for one-hand use</p>
                    </div>
                    <Sparkles className="h-5 w-5 text-accent" />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {quickTools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-white">Smart filters</p>
                    <SlidersHorizontal className="h-4 w-4 text-accentWarm" />
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Recent, signed, scanned and shared files stay organized without clutter.
                  </p>
                </div>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-[#0C1724] p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-white">Recent files</p>
                  <Folder className="h-4 w-4 text-accent" />
                </div>
                <div className="mt-4 space-y-3">
                  {recentFiles.map((file) => (
                    <div
                      key={file.name}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <div>
                        <p className="text-sm font-medium text-white">{file.name}</p>
                        <p className="mt-1 text-xs text-muted">Available offline</p>
                      </div>
                      <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                        {file.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
