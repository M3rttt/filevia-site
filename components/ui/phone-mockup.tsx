import { Camera, CheckCircle2, FileText, ScanLine, Sparkles, Zap } from "lucide-react";

import { heroToolLabels } from "@/lib/site-data";

const activity = [
  { label: "Scan receipt", time: "Now", icon: Camera },
  { label: "Merge contracts", time: "2m", icon: FileText },
  { label: "OCR notes", time: "5m", icon: ScanLine }
];

const accents = [
  "bg-[#173247] text-[#8FE6FF]",
  "bg-[#2A2217] text-[#FFD190]",
  "bg-[#162E27] text-[#9DF1D8]",
  "bg-[#2A1834] text-[#F2A3FF]",
  "bg-[#142538] text-[#9FCBFF]",
  "bg-[#2D2117] text-[#FFC88F]"
];

const tools = heroToolLabels.map((label, index) => ({
  label,
  accent: accents[index]
}));

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[360px]">
      <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -right-8 bottom-12 h-32 w-32 rounded-full bg-accentWarm/20 blur-3xl" />
      <div className="relative rounded-[40px] border border-white/10 bg-[#030B13] p-3 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
        <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,_rgba(17,36,55,0.96),_rgba(8,16,27,0.96))] p-5">
          <div className="mx-auto mb-5 h-1.5 w-16 rounded-full bg-white/10" />
          <div className="glass-panel p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-accent">Filevia</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">PDFs, handled.</h3>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-2 text-accent">
                <Sparkles className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {tools.map((tool) => (
                <div
                  key={tool.label}
                  className={`rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold ${tool.accent}`}
                >
                  {tool.label}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-[28px] border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">On-device processing</p>
                <p className="mt-1 text-sm text-muted">No upload queue. No waiting for a cloud server.</p>
              </div>
              <div className="rounded-full bg-accent/15 p-2 text-accent">
                <Zap className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 space-y-3">
              {activity.map(({ label, time, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#091420] px-3 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-white/5 p-2 text-accentWarm">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{label}</p>
                      <p className="text-xs text-muted">Processed locally</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-accent">
                    <CheckCircle2 className="h-4 w-4" />
                    {time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
