import Link from "next/link";

import type { ToolDefinition } from "@/lib/site-data";

type ToolCardProps = {
  tool: ToolDefinition;
};

export function ToolCard({ tool }: ToolCardProps) {
  const Icon = tool.icon;

  return (
    <article className="group rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] p-6 transition hover:-translate-y-1 hover:border-accent/30">
      <div
        className={`inline-flex rounded-2xl bg-gradient-to-br ${tool.accent} p-3 text-white shadow-[0_18px_40px_rgba(4,10,18,0.32)]`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-2xl font-semibold text-white">{tool.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{tool.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tool.stats.map((stat) => (
          <span key={stat} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white">
            {stat}
          </span>
        ))}
      </div>
      <Link href={`/tools/${tool.slug}`} className="secondary-button mt-6">
        Explore Tool
      </Link>
    </article>
  );
}
