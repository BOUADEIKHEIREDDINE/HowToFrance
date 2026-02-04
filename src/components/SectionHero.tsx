type SectionHeroProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export default function SectionHero({ title, subtitle, children }: SectionHeroProps) {
  return (
    <section className="py-10 md:py-16">
      <div className="bg-white rounded-2xl shadow-sm border px-6 py-8 md:px-10 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">{title}</h1>
        {subtitle && <p className="text-gray-700 mb-6 max-w-2xl">{subtitle}</p>}
        {children && <div>{children}</div>}
      </div>
    </section>
  );
}
