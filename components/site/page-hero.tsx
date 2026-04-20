type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: React.ReactNode;
};

export function PageHero({ eyebrow, title, description, actions }: PageHeroProps) {
  return (
    <section className="site-shell pb-14 pt-14 sm:pb-16 sm:pt-16">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="space-y-6">
          <span className="eyebrow">{eyebrow}</span>
          <div className="space-y-4">
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted">{description}</p>
          </div>
        </div>
        {actions ? <div className="flex flex-wrap gap-4 lg:justify-end">{actions}</div> : null}
      </div>
    </section>
  );
}
