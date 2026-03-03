'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

import ExternalLink from '@/components/ExternalLink';
import { cn } from '@/lib/utils';

type Category = 'Food Aid' | 'Mental Health' | 'French Lessons' | 'Social Integration';

type Assoc = {
  id: string;
  name: string;
  href: string;
  description: string;
  category: Category;
  emoji: string;
  color: string; // top strip
  costChip?: string;
  location?: string;
  phone?: string;
  extraBadge?: string;
  featured?: boolean;
};

const DATA: Assoc[] = [
  {
    id: 'linkee',
    name: 'Linkee',
    href: 'https://linkee.co/',
    description: 'Distribution of food baskets and hygiene products.',
    category: 'Food Aid',
    emoji: '🍎',
    color: '#10B981',
  },
  {
    id: 'cop1',
    name: 'Cop1 - Student Solidarity',
    href: 'https://cop1.fr/',
    description: 'Fighting student poverty.',
    category: 'Food Aid',
    emoji: '🤲',
    color: '#10B981',
  },
  {
    id: 'agorae',
    name: 'AGORAé (La Maison Étudiante)',
    href: 'https://maison-etudiante.paris/en/distributions-alimentaires/',
    description: 'Student solidarity grocery store.',
    category: 'Food Aid',
    emoji: '🛒',
    color: '#10B981',
  },
  {
    id: 'apaso',
    name: 'APASO via La Maison Étudiante de Paris',
    href: 'https://maison-etudiante.paris/aides/sante-bien-etre/',
    description: 'Free psychological support.',
    category: 'Mental Health',
    emoji: '🧠',
    color: '#7C3AED',
  },
  {
    id: 'nightline',
    name: 'Nightline Paris',
    href: 'https://nightline-paris.fr/',
    description: 'Nighttime listening service. Also available by chat.',
    category: 'Mental Health',
    emoji: '📞',
    color: '#7C3AED',
    phone: '01 88 32 12 32',
    extraBadge: 'Also by chat',
  },
  {
    id: 'secours',
    name: 'Secours Catholique - Villejuif branch',
    href: 'https://www.reseau-alpha.org/structure/apprentissage-du-francais/secours-catholique-antenne-de-villejuif',
    description: 'All levels, FLE + literacy classes.',
    category: 'French Lessons',
    emoji: '🇫🇷',
    color: '#3B82F6',
    location: '3 rue Sacco et Vanzetti, Villejuif',
    costChip: 'Free',
    featured: true,
  },
  {
    id: 'redcross',
    name: 'French Red Cross (Gentilly/Villejuif/Le Kremlin-Bicêtre)',
    href: 'https://www.reseau-alpha.org/structure/apprentissage-du-francais/croix-rouge-francaise-unite-locale-de-gentilly-villejuif-le-kremlin-bicetre/formation/francais-a-visee-sociale-et-communicative/b98a2-cours-de-fle-b1',
    description: 'Level B1, ~€10/year.',
    category: 'French Lessons',
    emoji: '🟥',
    color: '#3B82F6',
    costChip: '~€10/year',
  },
  {
    id: 'novis',
    name: 'Novis Education & Co',
    href: 'https://www.villejuif.fr/toutes-les-associations/novis-education-co',
    description: 'FLE + help with administrative procedures.',
    category: 'French Lessons',
    emoji: '🧾',
    color: '#3B82F6',
    costChip: 'Free',
  },
  {
    id: 'atelier',
    name: "L'Atelier d'à côté (Villejuif V+)",
    href: 'https://www.facebook.com/groups/villejuifvplus/posts/3556772491140076/',
    description: 'Free classes.',
    category: 'French Lessons',
    emoji: '🧑‍🏫',
    color: '#3B82F6',
    costChip: 'Free',
  },
  {
    id: 'cafe',
    name: 'Café des Langues (Meetup Villejuif)',
    href: 'https://www.meetup.com/en-AU/villejuif-language-exchange/',
    description: 'Informal exchanges and conversation workshops.',
    category: 'French Lessons',
    emoji: '☕',
    color: '#3B82F6',
    location: '32 rue Georges Lebigot, Villejuif',
    costChip: 'Free',
  },
  {
    id: 'buddy',
    name: 'ESN Buddy System',
    href: 'https://buddysystem.eu/en/institutions',
    description: 'Student mentoring.',
    category: 'Social Integration',
    emoji: '🌍',
    color: '#F97316',
  },
  {
    id: 'cijp',
    name: 'Club International des Jeunes à Paris (CIJP)',
    href: 'https://club-international.org/',
    description: 'Cultural outings, language exchanges.',
    category: 'Social Integration',
    emoji: '🎉',
    color: '#F97316',
  },
  {
    id: 'rtd',
    name: 'RTD International (Villejuif)',
    href: 'https://www.villejuif.fr/toutes-les-associations/rtd-international',
    description: 'Socio-cultural activities, diversity.',
    category: 'Social Integration',
    emoji: '🤝',
    color: '#F97316',
  },
  {
    id: 'efrei',
    name: 'Efrei Student Associations (Villejuif)',
    href: 'https://www.efrei.fr/wp-content/uploads/2025/08/plaquette_alpha_associations_etudiantes.pdf',
    description: 'Campus integration.',
    category: 'Social Integration',
    emoji: '🎓',
    color: '#F97316',
  },
];

const FILTERS: Array<{ id: 'All' | Category; label: string }> = [
  { id: 'All', label: 'All' },
  { id: 'Food Aid', label: 'Food Aid' },
  { id: 'Mental Health', label: 'Mental Health' },
  { id: 'French Lessons', label: 'French Lessons' },
  { id: 'Social Integration', label: 'Social Integration' },
];

function AssociationCard({ a }: { a: Assoc }) {
  return (
    <div className={cn('htf-card htf-card-hover overflow-hidden', a.featured ? 'md:col-span-2' : '')}>
      <div style={{ height: 6, background: a.color }} />
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="w-full">
            <div className="flex items-center justify-center text-4xl" aria-hidden="true">
              {a.emoji}
            </div>
            <div className="mt-3 text-center font-extrabold text-[var(--color-primary)]">
              <ExternalLink href={a.href}>{a.name}</ExternalLink>
            </div>
            <div className="mt-2 text-center text-sm text-[var(--color-muted)]">{a.description}</div>
          </div>
        </div>

        {a.phone && (
          <div className="mt-4 rounded-xl border bg-[#F1F5F9] p-4 text-center">
            <div className="text-xs font-extrabold text-[var(--color-muted)]">Phone</div>
            <div className="mt-1 text-2xl font-extrabold text-[var(--color-primary)]">{a.phone}</div>
            {a.extraBadge && (
              <div className="mt-2 inline-flex rounded-full px-3 py-1 text-[11px] font-extrabold"
                style={{ background: 'rgba(124,58,237,0.12)', color: '#4C1D95' }}
              >
                {a.extraBadge}
              </div>
            )}
          </div>
        )}

        {(a.location || a.costChip) && (
          <div className="mt-4 grid gap-2 text-sm text-[var(--color-muted)]">
            {a.location && (
              <div className="flex items-start gap-2">
                <span aria-hidden="true">📍</span>
                <span>{a.location}</span>
              </div>
            )}
            {a.costChip && (
              <div className="flex items-center justify-center">
                <span
                  className="rounded-full px-3 py-1 text-[11px] font-extrabold"
                  style={{
                    background: a.costChip === 'Free' ? 'rgba(16,185,129,0.12)' : '#F1F5F9',
                    color: a.costChip === 'Free' ? '#065F46' : 'var(--color-muted)',
                    border: '1px solid rgba(148,163,184,0.35)',
                  }}
                >
                  {a.costChip}
                </span>
              </div>
            )}
          </div>
        )}

        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="rounded-full bg-[#F1F5F9] px-3 py-1 text-[11px] font-extrabold text-[var(--color-muted)]">
            {a.category}
          </span>
          <a
            href={a.href}
            target="_blank"
            rel="noopener noreferrer"
            className="htf-btn htf-btn-primary px-3 py-2 text-sm"
          >
            Visit →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function AssociationsDirectory() {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<'All' | Category>('All');

  const byCategory = useMemo(() => {
    const grouped: Record<Category, Assoc[]> = {
      'Food Aid': [],
      'Mental Health': [],
      'French Lessons': [],
      'Social Integration': [],
    };
    for (const a of DATA) grouped[a.category].push(a);
    return grouped;
  }, []);

  const visibleCategories: Category[] = useMemo(() => {
    if (filter === 'All') return ['Food Aid', 'Mental Health', 'French Lessons', 'Social Integration'];
    return [filter];
  }, [filter]);

  const fade = reduce
    ? undefined
    : {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 10 },
        transition: { duration: 0.22 },
      };

  return (
    <div className="py-10">
      <div className="flex flex-wrap items-center gap-2">
        {FILTERS.map((f) => {
          const active = f.id === filter;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-extrabold transition',
                active
                  ? 'bg-[var(--color-accent)] text-white'
                  : 'border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[rgba(59,130,246,0.08)]',
              )}
              aria-pressed={active}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 space-y-12">
        <AnimatePresence mode="wait">
          <motion.div key={filter} {...(fade ?? {})} className="space-y-12">
            {visibleCategories.includes('Food Aid') && (
              <section id="food-aid">
                <h2 className="htf-h2">🍎 Food Aid</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {byCategory['Food Aid'].map((a) => (
                    <AssociationCard key={a.id} a={a} />
                  ))}
                </div>
              </section>
            )}

            {visibleCategories.includes('Mental Health') && (
              <section id="mental-health">
                <h2 className="htf-h2">🧠 Psychological Support</h2>
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {byCategory['Mental Health'].map((a) => (
                    <AssociationCard key={a.id} a={a} />
                  ))}
                </div>
              </section>
            )}

            {visibleCategories.includes('French Lessons') && (
              <section id="french-lessons">
                <h2 className="htf-h2">🇫🇷 French Lessons (FLE)</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Featured wide card first */}
                  {byCategory['French Lessons']
                    .filter((a) => a.featured)
                    .map((a) => (
                      <AssociationCard key={a.id} a={a} />
                    ))}
                  {/* Remaining in a 2x2 grid */}
                  {byCategory['French Lessons']
                    .filter((a) => !a.featured)
                    .map((a) => (
                      <AssociationCard key={a.id} a={a} />
                    ))}
                </div>
              </section>
            )}

            {visibleCategories.includes('Social Integration') && (
              <section id="networking">
                <h2 className="htf-h2">🌍 Social Integration &amp; Networking</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                  {byCategory['Social Integration'].map((a) => (
                    <AssociationCard key={a.id} a={a} />
                  ))}
                </div>
              </section>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

