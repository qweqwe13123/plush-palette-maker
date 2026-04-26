type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.16_0.04_155)] via-background to-background" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="eyebrow mb-6">{eyebrow}</div>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-6">{title}</h1>
        {description && (
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
        <div className="gold-divider mx-auto mt-10" />
      </div>
    </section>
  );
}
