import Link from "next/link";

import { pricingPlans } from "@/lib/site-data";

export function PricingPreviewSection() {
  return (
    <section className="site-shell py-16 sm:py-20">
      <div className="grid gap-4 lg:grid-cols-2">
        {pricingPlans.map((plan) => (
          <article
            key={plan.name}
            className={`rounded-[32px] border p-8 ${
              plan.featured
                ? "border-accent/30 bg-[linear-gradient(180deg,rgba(110,231,200,0.10),rgba(255,255,255,0.04))]"
                : "border-white/10 bg-white/[0.04]"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{plan.name}</p>
                <h3 className="mt-4 text-4xl font-semibold text-white">{plan.price}</h3>
                <p className="mt-2 text-sm text-muted">{plan.cadence}</p>
              </div>
              {plan.featured ? (
                <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  Recommended
                </span>
              ) : null}
            </div>
            <p className="mt-6 text-sm leading-7 text-muted">{plan.description}</p>
            <ul className="mt-6 space-y-3 text-sm text-white">
              {plan.features.map((feature) => (
                <li key={feature} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  {feature}
                </li>
              ))}
            </ul>
            <Link href={plan.href} className={plan.featured ? "primary-button mt-6" : "secondary-button mt-6"}>
              {plan.cta}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
