import BudgetEstimator from '@/components/BudgetEstimator';
import GradientHero from '@/components/GradientHero';
import ExternalLink from '@/components/ExternalLink';
import ExternalButton from '@/components/ExternalButton';
import Callout from '@/components/Callout';
import HousingComparison from '@/components/HousingComparison';
import OnThisPage from '@/components/OnThisPage';
import ReferencesSection from '@/components/ReferencesSection';

export default function HousingPage() {
  return (
    <>
      <GradientHero
        title="Find Your Home in France"
        subtitle="Compare options, understand aid (CAF/APL, Visale), and choose the best area for your budget — especially around Villejuif."
        gradientFrom="#064E3B"
        gradientTo="#059669"
        pills={[
          { label: 'Compare Options', href: '#compare' },
          { label: 'CROUS', href: '#crous' },
          { label: 'Other Solutions', href: '#solutions' },
          { label: 'Tenant rights', href: '#tenant-rights' },
          { label: 'CAF Aid', href: '#caf' },
          { label: 'Why Villejuif', href: '#why-villejuif' },
        ]}
        rightTitle="Quick topics"
        rightEmojis={['🏠', '💶', '🔑', '📄', '✅', '🚇']}
      />

      <OnThisPage
        sections={[
          { id: 'compare', label: 'Compare options' },
          { id: 'crous', label: 'CROUS' },
          { id: 'solutions', label: 'Other solutions' },
          { id: 'tenant-rights', label: 'Tenant rights' },
          { id: 'caf', label: 'CAF + Visale' },
          { id: 'why-villejuif', label: 'Why Villejuif' },
          { id: 'budget', label: 'Budget estimator' },
        ]}
      />

      <div className="relative lg:pl-[260px]">
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            { label: '20–30% cheaper than Paris', color: 'rgba(16,185,129,0.12)', text: '#065F46' },
            { label: '€200/mo min (CROUS)', color: 'rgba(16,185,129,0.12)', text: '#065F46' },
            { label: 'APL aid available', color: 'rgba(59,130,246,0.10)', text: '#1E3A5F' },
          ].map((chip) => (
            <span
              key={chip.label}
              className="rounded-full px-3 py-1 text-xs font-extrabold"
              style={{ background: chip.color, color: chip.text, border: '1px solid rgba(148,163,184,0.4)' }}
            >
              {chip.label}
            </span>
          ))}
        </div>

        <section id="compare" className="py-10">
          <h2 className="htf-h2">Compare options (Villejuif vs. Paris)</h2>
          <p className="mt-3 htf-body max-w-3xl">
            Use the toggle to highlight Villejuif, Paris, or both — and quickly spot the best value.
          </p>
          <HousingComparison />
        </section>

        <section id="crous" className="py-10">
          <h2 className="htf-h2">CROUS University Residences</h2>

          <div className="mt-6 htf-card p-6 border-t-4" style={{ borderTopColor: 'var(--color-success)' }}>
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-extrabold"
                  style={{ background: 'rgba(16,185,129,0.12)', color: '#065F46' }}
                >
                  Most Affordable Option
                </div>
                <p className="mt-3 htf-body">
                  The CROUS offers discounted student housing, particularly for low-income students.{' '}
                  <ExternalLink href="https://www.messervices.etudiant.gouv.fr/">
                    Centre Régional des Œuvres Universitaires et Scolaires (CROUS)
                  </ExternalLink>
                </p>

                <div className="mt-4 grid gap-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span aria-hidden="true">💰</span>
                    <span className="text-[var(--color-text)]">Rates: €200–€400/month on average. Up to €450 in Paris.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span aria-hidden="true">📅</span>
                    <span className="text-[var(--color-text)]">
                      The Student Social File (DSE) must be completed each year between <span className="font-extrabold">January 15</span> and{' '}
                      <span className="font-extrabold">May 31</span> for a September start. Places allocated on social criteria.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span aria-hidden="true">🔗</span>
                    <span className="text-[var(--color-text)]">
                      Applications via{' '}
                      <ExternalLink href="https://www.messervices.etudiant.gouv.fr/">
                        messervices.etudiant.gouv.fr
                      </ExternalLink>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-none">
                <ExternalButton href="https://www.messervices.etudiant.gouv.fr/">Apply now</ExternalButton>
              </div>
            </div>

            <div className="mt-6">
              <Callout variant="warning" title="⚠️ Apply early — places are limited and socially allocated">
                Don&apos;t wait until summer. CROUS housing is competitive, especially in Île-de-France.
              </Callout>
            </div>
          </div>
        </section>

        <section id="solutions" className="py-10">
          <h2 className="htf-h2">Other Housing Solutions</h2>
          <p className="mt-3 htf-body max-w-3xl">
            These platforms are commonly used by students. Always verify listings and never pay before visiting or signing.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              { icon: '🏠', name: 'Lokaviz', href: 'https://www.lokaviz.fr/', desc: 'CROUS-managed, legally verified listings', price: '€250–€800' },
              { icon: '👥', name: 'Roomlala', href: 'https://www.roomlala.com/', desc: 'Shared accommodation platform', price: '€200–€600' },
              { icon: '👥', name: 'Appartager', href: 'https://www.appartager.com/', desc: 'Shared accommodation listings (intl-friendly)', price: '€200–€600' },
              { icon: '📋', name: 'Le Bon Coin', href: 'https://www.leboncoin.fr/cl/colocations/cp_villejuif_94800', desc: 'Private listings (watch for scams)', price: '⚠️ Verify' },
              { icon: '🔒', name: 'Studapart', href: 'https://www.studapart.com/', desc: 'Secure leases, transparent process', price: 'Varies' },
              { icon: '🗂️', name: 'La Carte des Colocs', href: 'https://www.lacartedescolocs.fr/', desc: 'Room matching & shared housing', price: 'Free' },
              { icon: '🏢', name: 'Campuséa', href: 'https://www.campusea.fr/', desc: 'Furnished residences, services included', price: '€300–€1,000' },
              { icon: '🛏️', name: 'HI France', href: 'https://www.hifrance.org/', desc: 'Temporary stays / youth hostels', price: '€15–€40/night' },
            ].map((item) => (
              <div key={item.name} className="htf-card htf-card-hover p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="text-3xl" aria-hidden="true">{item.icon}</div>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-extrabold"
                    style={{ background: 'rgba(59,130,246,0.10)', color: '#1E3A5F', border: '1px solid rgba(148,163,184,0.4)' }}
                  >
                    {item.price}
                  </span>
                </div>

                <div className="mt-4 font-extrabold text-[var(--color-primary)]">
                  <ExternalLink href={item.href}>{item.name}</ExternalLink>
                </div>
                <div className="mt-2 text-sm text-[var(--color-muted)]">{item.desc}</div>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[#F1F5F9] px-3 py-1 text-[11px] font-extrabold text-[var(--color-muted)]">
                    Platform
                  </span>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm font-extrabold text-[var(--color-accent)]">
                    Visit →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="tenant-rights" className="py-10">
          <h2 className="htf-h2">Logement & droits du locataire (guide facile)</h2>
          <p className="mt-3 htf-body max-w-3xl">
            Trouver un logement est une étape clé. Voici les options, les documents importants (bail, dépôt de garantie),
            l&apos;état des lieux, et les règles pour éviter les arnaques.
          </p>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="htf-card p-6 border-t-4" style={{ borderTopColor: 'var(--color-success)' }}>
              <div className="text-3xl" aria-hidden="true">🏘️</div>
              <div className="mt-3 font-extrabold text-[var(--color-primary)]">1) Choisir son type de logement</div>
              <ul className="mt-3 grid gap-2 text-sm text-[var(--color-muted)]">
                <li><span className="font-bold text-[var(--color-text)]">CROUS</span> : le moins cher, mais très demandé (DSE tôt).</li>
                <li><span className="font-bold text-[var(--color-text)]">Résidences privées</span> : confort + services, plus cher.</li>
                <li><span className="font-bold text-[var(--color-text)]">Privé</span> : studio/coloc, plus de choix, souvent besoin d&apos;un garant.</li>
                <li><span className="font-bold text-[var(--color-text)]">Chez l&apos;habitant</span> : économique + immersion, moins d&apos;indépendance.</li>
              </ul>
              <div className="mt-4 rounded-xl bg-muted/40 border border-border p-4 text-sm text-[var(--color-muted)]">
                Check-list : budget, priorités (prix/indépendance/services), zone, transports.
              </div>
            </div>

            <div className="htf-card p-6 border-t-4" style={{ borderTopColor: 'var(--color-accent)' }}>
              <div className="text-3xl" aria-hidden="true">📄</div>
              <div className="mt-3 font-extrabold text-[var(--color-primary)]">2) Bail & dépôt de garantie</div>
              <ul className="mt-3 grid gap-2 text-sm text-[var(--color-muted)]">
                <li><span className="font-bold text-[var(--color-text)]">Bail étudiant</span> : souvent 9 mois (année universitaire).</li>
                <li>
                  <span className="font-bold text-[var(--color-text)]">Dépôt de garantie</span> (max légal) : 1 mois (non meublé),
                  2 mois (meublé) hors charges.
                </li>
                <li><span className="font-bold text-[var(--color-text)]">Restitution</span> : 1 mois si état identique, 2 mois si différences.</li>
              </ul>
              <div className="mt-4 text-sm text-[var(--color-muted)]">
                Source : <ExternalLink href="https://www.service-public.gouv.fr/particuliers/vosdroits/F31269">Service-Public (dépôt de garantie)</ExternalLink>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="htf-card p-6 border-l-4" style={{ borderLeftColor: 'var(--color-warning)' }}>
              <div className="font-extrabold text-[var(--color-primary)]">3) État des lieux (ultra important)</div>
              <ul className="mt-3 grid gap-2 text-sm text-[var(--color-muted)]">
                <li>Faites l&apos;état des lieux d&apos;entrée en notant chaque défaut.</li>
                <li>Prenez des photos/vidéos (preuve).</li>
                <li>À la sortie : logement propre + comparaison avec l&apos;entrée.</li>
              </ul>
            </div>

            <div className="htf-card p-6 border-l-4" style={{ borderLeftColor: 'var(--color-danger)' }}>
              <div className="font-extrabold text-[var(--color-primary)]">4) Anti-arnaques (règles d&apos;or)</div>
              <ul className="mt-3 grid gap-2 text-sm text-[var(--color-muted)]">
                <li><span className="font-bold text-[var(--color-text)]">Ne payez jamais</span> avant visite + bail signé.</li>
                <li>Évitez Western Union / mandats cash.</li>
                <li>Méfiez-vous des offres trop belles.</li>
                <li>Lisez le bail, demandez de l&apos;aide si besoin.</li>
              </ul>
              <div className="mt-4 text-sm text-[var(--color-muted)]">
                Plus d&apos;infos : <ExternalLink href="https://www.etudiant.gouv.fr/fr/louer-un-logement-dans-le-prive-conseils-demarches-988">Étudiant.gouv.fr</ExternalLink>
              </div>
            </div>
          </div>
        </section>

        <section id="caf" className="py-10">
          <h2 className="htf-h2">Housing Assistance (CAF)</h2>

          <div className="mt-6">
            <Callout variant="tip" title="💡 These two aids can be combined">
              Many students use both: APL payments (CAF) + Visale as a guarantor when renting.
            </Callout>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="htf-card htf-card-hover p-6">
              <div className="text-3xl" aria-hidden="true">💶</div>
              <div className="mt-3 font-extrabold text-[var(--color-primary)]">Get Monthly APL Payments</div>
              <div className="mt-1 text-sm text-[var(--color-muted)]">
                Foreign students with a valid residence permit can apply for Personalized Housing Assistance (APL) from the CAF.
              </div>
              <div className="mt-4">
                <ExternalButton href="https://www.caf.fr/">caf.fr</ExternalButton>
              </div>
            </div>

            <div className="htf-card htf-card-hover p-6">
              <div className="text-3xl" aria-hidden="true">🤝</div>
              <div className="mt-3 font-extrabold text-[var(--color-primary)]">No Guarantor? Use Visale</div>
              <div className="mt-1 text-sm text-[var(--color-muted)]">
                The Visale guarantee (free, via Action Logement) acts as a guarantor for students who have no guarantor in France.
              </div>
              <div className="mt-4">
                <ExternalButton href="https://www.visale.fr/">Visale</ExternalButton>
              </div>
            </div>
          </div>
        </section>

        <section id="why-villejuif" className="py-10">
          <h2 className="htf-h2">Why Choose Villejuif?</h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                stripe: '#3B82F6',
                icon: '🚇',
                title: 'Accessible',
                desc: 'Metro line 7 — direct to Paris centre. Line 14 coming soon.',
                linkText: 'Villejuif student page',
              },
              {
                stripe: '#10B981',
                icon: '💰',
                title: '20–30% Cheaper',
                desc: 'Significant savings vs. Paris intra-muros.',
              },
              {
                stripe: '#14B8A6',
                icon: '🏥',
                title: 'Near Everything',
                desc: 'Gustave Roussy, medical schools, university campuses.',
                linkText: 'Ville de Villejuif: Students',
              },
            ].map((c) => (
              <div key={c.title} className="htf-card htf-card-hover p-6 border-t-4" style={{ borderTopColor: c.stripe }}>
                <div className="text-3xl" aria-hidden="true">{c.icon}</div>
                <div className="mt-3 font-extrabold text-[var(--color-primary)]">{c.title}</div>
                <div className="mt-1 text-sm text-[var(--color-muted)]">{c.desc}</div>
                {c.linkText && (
                  <div className="mt-4">
                    <ExternalLink href="https://www.villejuif.fr/etudiants-et-etudiantes">{c.linkText}</ExternalLink>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="budget" className="py-10">
          <h2 className="htf-h2">Budget Estimator</h2>
          <div className="mt-6 htf-card p-6">
            <BudgetEstimator />
          </div>
        </section>

        <ReferencesSection />
      </div>
    </>
  );
}
