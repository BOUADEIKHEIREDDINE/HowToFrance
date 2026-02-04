import CategoryCard from '@/components/CategoryCard';
import SectionHero from '@/components/SectionHero';

export default function LegalPage() {
  const categories = [
    {
      title: 'Visa & Residency',
      description: 'All about student visas and residency permits.',
      href: '/legal/visa',
    },
    {
      title: 'CAF/APL',
      description: 'Understanding housing aid and how to apply.',
      href: '/legal/caf',
    },
    {
      title: 'Student Rights',
      description: 'Your rights as a student in France.',
      href: '/legal/rights',
    },
    {
      title: 'Work Rules',
      description: 'Regulations for working while studying.',
      href: '/legal/work',
    },
    {
      title: 'Health Coverage',
      description: 'Understanding the French healthcare system.',
      href: '/legal/health',
    },
  ];

  return (
    <>
      <SectionHero title="Legal Stuff" subtitle="Your guide to French regulations and requirements." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {categories.map((category) => (
          <CategoryCard key={category.title} {...category} />
        ))}
      </div>
    </>
  );
}
