type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description
}: SectionHeadingProps) {
  return (
    <div className="section-copy">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-muted sm:text-lg">{description}</p>
    </div>
  );
}
