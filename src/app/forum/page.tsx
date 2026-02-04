import Link from 'next/link';
import SectionHero from '@/components/SectionHero';

const forumCategories = [
  { name: 'Legal', slug: 'legal' },
  { name: 'Housing', slug: 'housing' },
  { name: 'Daily Life', slug: 'daily-life' },
  { name: 'Social', slug: 'social' },
];

export default function ForumPage() {
  return (
    <>
      <SectionHero title="Forum" subtitle="Connect with other students and ask questions." />

      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <ul className="space-y-2">
          {forumCategories.map((category) => (
            <li key={category.slug}>
              <Link
                href={`/forum/${category.slug}`}
                className="text-primary hover:underline"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="bg-gray-200 px-4 py-2 rounded-md mt-4 cursor-not-allowed"
          aria-disabled
        >
          Sign in to post (coming soon)
        </button>
      </section>
    </>
  );
}
