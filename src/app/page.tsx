import Link from 'next/link';
import {
  AcademicCapIcon,
  BuildingOfficeIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

import SectionHero from '@/components/SectionHero';
import CardGrid from '@/components/CardGrid';

export default function Home() {
  const mainSections = [
    {
      title: 'Legal Stuff',
      description: 'Visas, residency permits, and legal requirements.',
      href: '/legal',
      icon: AcademicCapIcon,
    },
    {
      title: 'Housing',
      description: 'Find accommodation, understand contracts, and get CAF aid.',
      href: '/housing',
      icon: BuildingOfficeIcon,
    },
    {
      title: 'Wellbeing',
      description: 'Healthcare, mental health resources, and adapting to French culture.',
      href: '/wellbeing',
      icon: HeartIcon,
    },
    {
      title: 'Associations',
      description: 'Join student groups, international clubs, and volunteer organizations.',
      href: '/associations',
      icon: ChatBubbleLeftRightIcon,
    },
    {
      title: 'Forum',
      description: 'Connect with other students, ask questions, and share experiences.',
      href: '/forum',
      icon: ChatBubbleLeftRightIcon,
    },
  ];

  return (
    <>
      <SectionHero
        title="Everything you need to live and study in France."
        subtitle="Legal help, housing, wellbeing, communities — made simple."
      >
        <div className="flex flex-wrap gap-4">
          <Link
            href="#sections"
            className="bg-accent text-white px-6 py-3 rounded-md hover:bg-opacity-80 transition"
          >
            Get Started
          </Link>
          <Link
            href="/legal"
            className="border border-accent text-accent px-6 py-3 rounded-md hover:bg-accent hover:text-white transition"
          >
            Explore Guides
          </Link>
        </div>
      </SectionHero>

      <section id="sections" className="py-12">
        <h2 className="text-2xl font-semibold mb-6">Main Sections</h2>
        <CardGrid cards={mainSections} />
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-6">Who it&apos;s for</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>International students</li>
          <li>Erasmus students</li>
          <li>Exchange program participants</li>
          <li>Anyone relocating to France for studies</li>
        </ul>
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-6">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Read</h3>
            <p>Explore our guides and resources to understand the essentials.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">2. Ask</h3>
            <p>Join the forum and ask questions to the community.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">3. Join community</h3>
            <p>Connect with associations, clubs, and events.</p>
          </div>
        </div>
      </section>

      <section className="py-6 text-sm text-gray-500">
        Disclaimer: We are not a law firm; information is for educational purposes only.
      </section>
    </>
  );
}
