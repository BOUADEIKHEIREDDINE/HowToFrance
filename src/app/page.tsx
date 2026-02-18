'use client';

import Link from 'next/link';

import Hero from '@/components/Hero';
import SectionCards from '@/components/SectionCards';

export default function Home() {
  const mainSections = [
    {
      title: 'Legal Stuff',
      description: 'Visas, residency permits, and legal requirements.',
      href: '/legal',
    },
    {
      title: 'Housing',
      description: 'Find accommodation, understand contracts, and get CAF aid.',
      href: '/housing',
    },
    {
      title: 'Wellbeing',
      description: 'Healthcare, mental health resources, and adapting to French culture.',
      href: '/wellbeing',
    },
    {
      title: 'Associations',
      description: 'Join student groups, international clubs, and volunteer organizations.',
      href: '/associations',
    },
    {
      title: 'Forum',
      description: 'Connect with other students, ask questions, and share experiences.',
      href: '/forum',
    },
  ];

  return (
    <>
      <Hero
        title="Your premium guide to settle in France."
        subtitle="Legal steps, housing, wellbeing, communities — with a modern UX and a helpful forum."
      />

      <SectionCards
        title="Main Sections"
        subtitle="Start with the essentials. Each section is curated, structured and easy to scan."
        cards={mainSections}
      />

      <section className="py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Who it&apos;s for
            </h2>
            <p className="mt-3 text-mutedForeground">
              Designed for students and newcomers who want clear steps, fast answers, and a
              calm experience.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                'International students',
                'Erasmus students',
                'Exchange program participants',
                'Anyone relocating to France for studies',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[var(--radius)] border border-border bg-card/70 backdrop-blur-xl px-4 py-3 shadow-sm"
                >
                  <div className="text-sm font-semibold">{item}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[calc(var(--radius)+8px)] border border-border bg-card/70 backdrop-blur-xl shadow-sm overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-semibold">How it works</h3>
              <p className="mt-2 text-sm text-mutedForeground">
                A simple flow designed to reduce friction and help you move forward.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-[var(--radius)] border border-border bg-muted/40 p-4">
                  <div className="text-sm font-semibold">1. Read</div>
                  <p className="mt-1 text-xs text-mutedForeground">
                    Explore guides and resources to understand the essentials.
                  </p>
                </div>
                <div className="rounded-[var(--radius)] border border-border bg-muted/40 p-4">
                  <div className="text-sm font-semibold">2. Ask</div>
                  <p className="mt-1 text-xs text-mutedForeground">
                    Use the forum to get answers from the community.
                  </p>
                </div>
                <div className="rounded-[var(--radius)] border border-border bg-muted/40 p-4">
                  <div className="text-sm font-semibold">3. Join</div>
                  <p className="mt-1 text-xs text-mutedForeground">
                    Connect with associations, clubs, and events.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/forum"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primaryForeground hover:bg-primary/90 transition"
                >
                  Ask on the Forum
                </Link>
                <Link
                  href="/legal"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-5 py-2.5 text-sm font-semibold hover:bg-muted/60 transition"
                >
                  Explore guides
                </Link>
              </div>
            </div>

            <div className="h-24 bg-gradient-to-r from-accent/20 via-transparent to-primary/20" />
          </div>
        </div>

        <div className="mt-10 text-xs text-mutedForeground">
          Disclaimer: We are not a law firm; information is for educational purposes only.
        </div>
      </section>
    </>
  );
}
