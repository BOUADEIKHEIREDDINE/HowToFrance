import GradientHero from '@/components/GradientHero';
import ExternalLink from '@/components/ExternalLink';
import Callout from '@/components/Callout';
import ResponsiveTabs from '@/components/ResponsiveTabs';
import ReferencesSection from '@/components/ReferencesSection';

export default function WellbeingPage() {
  return (
    <>
      <GradientHero
        title="Student Life & Well-being in France"
        subtitle="Food, mental health support, learning French, meeting people, and enjoying culture — all with student-friendly options."
        gradientFrom="#4C1D95"
        gradientTo="#7C3AED"
        pills={[
          { label: 'Food & Restaurants', href: '#food' },
          { label: 'Mental Health', href: '#mental-health' },
          { label: 'Learn French', href: '#learn-french' },
          { label: 'Culture & Leisure', href: '#perks' },
        ]}
        rightTitle="Quick icons"
        rightEmojis={['🍽️', '🧠', '🇫🇷', '🎭', '🤝', '✨']}
      />

      <section id="food" className="py-10">
        <h2 className="htf-h2">Food and Restaurants</h2>
        <p className="mt-3 htf-body max-w-3xl">Students can benefit from discounted meal prices.</p>

        <div className="mt-6 htf-card p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className="rounded-xl p-5"
              style={{ background: 'rgba(59,130,246,0.10)', border: '1px solid rgba(59,130,246,0.25)' }}
            >
              <div className="text-xs font-extrabold text-[var(--color-muted)]">Standard student price</div>
              <div className="mt-1 text-3xl font-extrabold text-[var(--color-primary)]">€3.30</div>
            </div>
            <div
              className="rounded-xl p-5"
              style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.28)' }}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="text-xs font-extrabold text-[var(--color-muted)]">Scholarship / financial need</div>
                <span
                  className="rounded-full px-3 py-1 text-[11px] font-extrabold"
                  style={{ background: 'rgba(245,158,11,0.14)', color: '#92400E' }}
                >
                  Apply required
                </span>
              </div>
              <div className="mt-1 text-3xl font-extrabold text-[var(--color-primary)]">€1.00</div>
            </div>
          </div>

          <div className="mt-5 text-sm text-[var(--color-muted)]">
            Learn more via{' '}
            <ExternalLink href="https://www.crous-paris.fr/se-restaurer/payer-son-repas/des-repas-a-tarif-social-pour-tous-les-etudiants/">
              University restaurants (CROUS)
            </ExternalLink>
            . Request the €1 rate at{' '}
            <ExternalLink href="https://www.crous-paris.fr/se-restaurer/payer-son-repas/des-repas-a-tarif-social-pour-tous-les-etudiants/">
              epa.lescrous.fr
            </ExternalLink>
            .
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '🥕', name: 'Linkee', href: 'https://linkee.co/', desc: 'A solidarity-based solution to food waste.' },
            { icon: '🤲', name: 'Cop1 - Solidarités Étudiantes', href: 'https://cop1.fr/', desc: 'Fighting student poverty.' },
            { icon: '🛒', name: 'AGORAé (La Maison Étudiante)', href: 'https://maison-etudiante.paris/en/distributions-alimentaires/', desc: 'Food distribution + solidarity grocery store.' },
          ].map((a) => (
            <div key={a.name} className="htf-card htf-card-hover p-6">
              <div className="text-3xl" aria-hidden="true">{a.icon}</div>
              <div className="mt-3 font-extrabold text-[var(--color-primary)]">
                <ExternalLink href={a.href}>{a.name}</ExternalLink>
              </div>
              <div className="mt-2 text-sm text-[var(--color-muted)]">{a.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="mental-health" className="py-10">
        <h2 className="htf-h2">Health and Psychological Support</h2>

        <div className="mt-6">
          <Callout variant="success" title="These services are free, confidential, and available to all students">
            If you&apos;re overwhelmed, you&apos;re not alone — support exists, and asking for help is normal.
          </Callout>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="htf-card htf-card-hover p-6" style={{ background: 'rgba(124,58,237,0.08)' }}>
            <div className="text-3xl" aria-hidden="true">🧠</div>
            <div className="mt-3 font-extrabold text-[var(--color-primary)]">La Maison Étudiante de Paris</div>
            <div className="mt-1 text-sm text-[var(--color-muted)]">Free psychological sessions via APASO.</div>
            <div className="mt-4">
              <ExternalLink href="https://maison-etudiante.paris/aides/sante-bien-etre/">Visit resource</ExternalLink>
            </div>
          </div>

          <div className="htf-card htf-card-hover p-6" style={{ background: 'rgba(30,58,95,0.10)' }}>
            <div className="text-3xl" aria-hidden="true">📞</div>
            <div className="mt-3 font-extrabold text-[var(--color-primary)]">Nightline Paris</div>
            <div className="mt-2 text-sm text-[var(--color-muted)]">Night listening line — also available by chat.</div>
            <div className="mt-4 rounded-xl bg-white/70 border p-4">
              <div className="text-xs font-extrabold text-[var(--color-muted)]">Phone</div>
              <div className="mt-1 text-2xl font-extrabold text-[var(--color-primary)]">01 88 32 12 32</div>
            </div>
            <div className="mt-4">
              <ExternalLink href="https://nightline-paris.fr/">Open Nightline</ExternalLink>
            </div>
          </div>

          <div className="htf-card htf-card-hover p-6" style={{ background: 'rgba(16,185,129,0.10)' }}>
            <div className="text-3xl" aria-hidden="true">✅</div>
            <div className="mt-3 font-extrabold text-[var(--color-primary)]">BAPU</div>
            <div className="mt-1 text-sm text-[var(--color-muted)]">Free consultations, 100% covered by social security.</div>
            <div className="mt-4">
              <ExternalLink href="https://maison-etudiante.paris/aides/sante-bien-etre/">Find a BAPU</ExternalLink>
            </div>
          </div>
        </div>
      </section>

      <section id="learn-french" className="py-10">
        <h2 className="htf-h2">Learning French</h2>

        <div className="mt-6">
          <ResponsiveTabs
            items={[
              {
                id: 'villejuif',
                label: '📍 In Villejuif',
                content: (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: '📚',
                        name: 'Secours Catholique - Villejuif branch',
                        href: 'https://www.reseau-alpha.org/structure/apprentissage-du-francais/secours-catholique-antenne-de-villejuif',
                        desc: 'FLE + literacy classes, all levels, no CEFR requirements.',
                        location: '3 rue Sacco et Vanzetti, 94800 Villejuif',
                        cost: 'Free',
                      },
                      {
                        icon: '🟥',
                        name: 'French Red Cross (Gentilly/Villejuif/Le Kremlin-Bicêtre)',
                        href: 'https://www.reseau-alpha.org/structure/apprentissage-du-francais/croix-rouge-francaise-unite-locale-de-gentilly-villejuif-le-kremlin-bicetre/formation/francais-a-visee-sociale-et-communicative/b98a2-cours-de-fle-b1',
                        desc: 'FLE with a social/communicative focus, level B1.',
                        location: 'Gentilly / Villejuif / Le Kremlin-Bicêtre',
                        cost: '~€10/year',
                      },
                      {
                        icon: '🧾',
                        name: 'Novis Education & Co',
                        href: 'https://www.villejuif.fr/toutes-les-associations/novis-education-co',
                        desc: 'FLE courses + help with administrative procedures.',
                        location: 'Villejuif',
                        cost: 'Free',
                      },
                      {
                        icon: '🧑‍🏫',
                        name: "L'Atelier d'à côté (Villejuif V+)",
                        href: 'https://www.facebook.com/groups/villejuifvplus/posts/3556772491140076/',
                        desc: 'Free French and literacy classes, open to all.',
                        location: 'Villejuif',
                        cost: 'Free',
                      },
                      {
                        icon: '☕',
                        name: 'Café des Langues (Meetup Villejuif)',
                        href: 'https://www.meetup.com/en-AU/villejuif-language-exchange/',
                        desc: 'Informal language exchanges and conversation workshops.',
                        location: '32 Rue Georges Lebigot, Villejuif',
                        cost: 'Free',
                      },
                    ].map((c) => (
                      <div key={c.name} className="htf-card htf-card-hover p-6">
                        <div className="flex items-start justify-between gap-3">
                          <div className="text-3xl" aria-hidden="true">{c.icon}</div>
                          <span
                            className="rounded-full px-3 py-1 text-xs font-extrabold"
                            style={{
                              background: c.cost === 'Free' ? 'rgba(16,185,129,0.12)' : '#F1F5F9',
                              color: c.cost === 'Free' ? '#065F46' : 'var(--color-muted)',
                              border: '1px solid rgba(148,163,184,0.4)',
                            }}
                          >
                            {c.cost}
                          </span>
                        </div>
                        <div className="mt-3 font-extrabold text-[var(--color-primary)]">
                          <ExternalLink href={c.href}>{c.name}</ExternalLink>
                        </div>
                        <div className="mt-2 text-sm text-[var(--color-muted)]">{c.desc}</div>
                        <div className="mt-3 flex items-start gap-2 text-sm text-[var(--color-muted)]">
                          <span aria-hidden="true">📍</span>
                          <span>{c.location}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                id: 'paris',
                label: '🚇 Via Line 7 to Paris',
                content: (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: '🏛️',
                        name: 'Bibliothèques de la Ville de Paris',
                        href: 'https://www.paris.fr/activites/ateliers-de-conversation-en-francais-53400',
                        desc: 'Free conversation workshops, starting from level A2.',
                        cost: 'Free',
                      },
                      {
                        icon: '🗺️',
                        name: 'Réseau Alpha',
                        href: 'https://www.reseau-alpha.org',
                        desc: 'Search French learning centers across Île-de-France by zip code.',
                        cost: 'Directory',
                      },
                      {
                        icon: '🤝',
                        name: 'Cop1 (community + practice opportunities)',
                        href: 'https://cop1.fr/',
                        desc: 'Socializing + language practice opportunities beyond food aid.',
                        cost: 'Community',
                      },
                      {
                        icon: '🥕',
                        name: 'Linkee (community + practice opportunities)',
                        href: 'https://linkee.co/',
                        desc: 'Socializing + language practice opportunities beyond food aid.',
                        cost: 'Community',
                      },
                    ].map((c) => (
                      <div key={c.name} className="htf-card htf-card-hover p-6">
                        <div className="flex items-start justify-between gap-3">
                          <div className="text-3xl" aria-hidden="true">{c.icon}</div>
                          <span
                            className="rounded-full px-3 py-1 text-xs font-extrabold"
                            style={{ background: '#F1F5F9', color: 'var(--color-muted)', border: '1px solid rgba(148,163,184,0.4)' }}
                          >
                            {c.cost}
                          </span>
                        </div>
                        <div className="mt-3 font-extrabold text-[var(--color-primary)]">
                          <ExternalLink href={c.href}>{c.name}</ExternalLink>
                        </div>
                        <div className="mt-2 text-sm text-[var(--color-muted)]">{c.desc}</div>
                      </div>
                    ))}
                  </div>
                ),
              },
            ]}
          />
        </div>
      </section>

      <section id="networks" className="py-10">
        <h2 className="htf-h2">Mutual Aid and Mentoring Networks</h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[
            { icon: '🧑‍🤝‍🧑', name: 'Buddy System (ESN - Erasmus Student Network)', href: 'https://buddysystem.eu/en/institutions', desc: 'Welcoming, admin help, city discovery, social integration.', tag: 'Mentoring' },
            { icon: '🌍', name: 'Club International des Jeunes à Paris (CIJP)', href: 'https://club-international.org/', desc: 'Cultural outings, excursions, language exchanges, international events.', tag: 'Cultural' },
            { icon: '🎨', name: 'RTD International (Villejuif)', href: 'https://www.villejuif.fr/toutes-les-associations/rtd-international', desc: 'Socio-cultural activities promoting diversity.', tag: 'Cultural' },
            { icon: '🎓', name: 'Efrei Student Associations (Villejuif)', href: 'https://www.efrei.fr/wp-content/uploads/2025/08/plaquette_alpha_associations_etudiantes.pdf', desc: 'A point of contact for campus integration.', tag: 'Campus' },
            { icon: '🤲', name: 'Cop1', href: 'https://cop1.fr/', desc: 'Community + student support (also great for social integration).', tag: 'Community' },
            { icon: '🥕', name: 'Linkee', href: 'https://linkee.co/', desc: 'Community + support (also great for meeting people).', tag: 'Community' },
          ].map((c) => (
            <div key={c.name} className="htf-card htf-card-hover p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="text-3xl" aria-hidden="true">{c.icon}</div>
                <span className="rounded-full bg-[#F1F5F9] px-3 py-1 text-[11px] font-extrabold text-[var(--color-muted)]">
                  {c.tag}
                </span>
              </div>
              <div className="mt-3 font-extrabold text-[var(--color-primary)]">
                <ExternalLink href={c.href}>{c.name}</ExternalLink>
              </div>
              <div className="mt-2 text-sm text-[var(--color-muted)]">{c.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 htf-card p-6 border-l-4" style={{ borderLeftColor: 'var(--color-accent)' }}>
          <div className="flex items-start gap-4">
            <div className="text-3xl" aria-hidden="true">🎉</div>
            <div className="min-w-0">
              <div className="font-extrabold text-[var(--color-primary)]">“Welcome to France” events</div>
              <div className="mt-1 text-sm text-[var(--color-muted)]">
                La Nuit des Étudiants du Monde is an annual event celebrating international students. The Villejuif Town Hall also publishes a cultural guide.
              </div>
              <div className="mt-3">
                <ExternalLink href="https://www.villejuif.fr/toutes-les-publications/guide-culturel-2025-2026">
                  Villejuif Town Hall cultural guide
                </ExternalLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="perks" className="py-10">
        <h2 className="htf-h2">Cultural and Leisure Benefits (under 25/26)</h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            {
              emoji: '🏛️',
              title: 'Free Museums',
              desc: 'Under 26, EU resident — permanent collections free.',
              href: 'https://www.culture.gouv.fr/thematiques/musees/Les-musees-en-France/les-politiques-des-musees-de-france/la-gratuite-des-collections-permanentes-pour-les-18-25-ans-dans-les-musees-nationaux',
              linkText: 'National museums',
            },
            {
              emoji: '🎭',
              title: '€300 Pass Culture',
              desc: 'For 18-year-olds — books, concerts, cinema.',
              href: 'https://pass.culture.fr/',
              linkText: 'Pass Culture',
            },
            {
              emoji: '🚇',
              title: 'Imagine R ~€380/yr',
              desc: 'Unlimited Île-de-France transport.',
              href: 'https://www.monavenirengrand.com/contenus/sorties-culturelles-les-avantages-pour-les-moins-de-26-ans-en-france.html',
              linkText: 'Imagine R pass',
            },
            {
              emoji: '🎬',
              title: 'Cinema €5–€9',
              desc: 'Student/under-26 rates at most cinemas.',
              href: 'https://www.monavenirengrand.com/contenus/sorties-culturelles-les-avantages-pour-les-moins-de-26-ans-en-france.html',
              linkText: 'reduced rates',
            },
          ].map((p) => (
            <div key={p.title} className="htf-card htf-card-hover p-6 relative overflow-hidden">
              <div
                className="absolute -right-3 -top-6 text-6xl opacity-10"
                aria-hidden="true"
              >
                {p.emoji}
              </div>
              <div className="text-3xl" aria-hidden="true">{p.emoji}</div>
              <div className="mt-3 font-extrabold text-[var(--color-primary)]">{p.title}</div>
              <div className="mt-1 text-sm text-[var(--color-muted)]">{p.desc}</div>
              <div className="mt-4">
                <ExternalLink href={p.href}>{p.linkText}</ExternalLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ReferencesSection />
    </>
  );
}
