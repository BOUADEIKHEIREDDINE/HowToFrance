import GradientHero from '@/components/GradientHero';
import ExternalLink from '@/components/ExternalLink';
import ExternalButton from '@/components/ExternalButton';
import Callout from '@/components/Callout';
import CopyButton from '@/components/CopyButton';
import OnThisPage from '@/components/OnThisPage';
import ReferencesSection from '@/components/ReferencesSection';

export default function LegalPage() {
  return (
    <>
      <GradientHero
        title="Legal & Administrative Procedures"
        subtitle="Integration in France begins with understanding and completing the administrative and legal procedures. These steps are crucial to ensuring a fully compliant stay."
        gradientFrom="#1E3A5F"
        gradientTo="#2563EB"
        pills={[
          { label: 'Documents', href: '#documents' },
          { label: 'Residence Permit', href: '#residence' },
          { label: 'Banking', href: '#banking' },
          { label: 'Health Insurance', href: '#health-insurance' },
          { label: 'CSS', href: '#css' },
          { label: 'Mutual Options', href: '#mutual-options' },
        ]}
        rightTitle="Quick icons"
        rightEmojis={['📄', '🏠', '💳', '🏥', '✅', '🎓']}
      />

      <OnThisPage
        sections={[
          { id: 'documents', label: 'Documents' },
          { id: 'residence', label: 'Residence permit' },
          { id: 'villejuif', label: 'Villejuif location' },
          { id: 'banking', label: 'Banking' },
          { id: 'health-insurance', label: 'Health insurance' },
          { id: 'css', label: 'CSS' },
          { id: 'reimbursements', label: 'Reimbursements' },
          { id: 'mutual-options', label: 'Mutual options' },
        ]}
      />

      <div className="relative lg:pl-[260px]">
        <section id="documents" className="py-10">
          <h2 className="htf-h2">Prerequisites and General Documents</h2>
          <p className="mt-3 htf-body max-w-3xl">
            For any foreign student wishing to settle in France, several documents and prerequisites are essential:
          </p>

          <div className="mt-6 htf-card p-6">
            <div className="relative">
              {/* Vertical stepper line */}
              <div
                className="absolute left-[14px] top-5 bottom-5 w-px"
                style={{ background: 'rgba(59,130,246,0.25)' }}
                aria-hidden="true"
              />

              {[
                {
                  n: 1,
                  title: 'Passport + VLS-TS / residence permit',
                  desc: 'A passport valid for the entire duration of the stay, as well as a long-stay visa valid as a residence permit (VLS-TS) or a valid residence permit.',
                  link: {
                    href: 'https://www.service-public.gouv.fr/particuliers/vosdroits/N31346',
                    label: 'Service-Public.fr',
                  },
                },
                {
                  n: 2,
                  title: 'Enrollment proof',
                  desc: 'Proof of enrollment in a French higher education institution.',
                },
                {
                  n: 3,
                  title: 'Financial resources (~€615/month)',
                  desc: 'Financial resources: minimum of approximately €615 per month.',
                  link: {
                    href: 'https://www.campusfrance.org/fr/organiser-arrivee-France-check-list',
                    label: 'Campus France checklist',
                  },
                  tip: '💡 Tip: Keep 3 months of bank statements ready',
                },
                {
                  n: 4,
                  title: 'Proof of address',
                  desc: 'Proof of address (rental agreement, accommodation certificate, or utility bill).',
                },
                {
                  n: 5,
                  title: 'CVEC payment',
                  desc: 'Payment of the Student and Campus Contribution (CVEC) is mandatory before enrollment.',
                  link: {
                    href: 'https://www.croos.fr/blog/les-5-demarches-a-effectuer-des-votre-arrivee-en-france',
                    label: 'CROOS: 5 steps to follow',
                  },
                },
              ].map((step) => (
                <div key={step.n} className="relative flex gap-4 py-4">
                  <div className="flex-none">
                    <div
                      className="h-7 w-7 rounded-full flex items-center justify-center text-xs font-extrabold text-white"
                      style={{ background: 'var(--color-accent)' }}
                    >
                      {step.n}
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                      <div className="min-w-0">
                        <div className="font-extrabold text-[var(--color-primary)]">{step.title}</div>
                        <div className="mt-1 text-sm text-[var(--color-muted)] leading-relaxed">{step.desc}</div>
                        {step.tip && (
                          <div className="mt-2 inline-flex items-center rounded-full px-3 py-1 text-xs font-extrabold"
                            style={{ background: '#FFFBEB', color: '#92400E', border: '1px solid rgba(245,158,11,0.35)' }}
                          >
                            {step.tip}
                          </div>
                        )}
                      </div>

                      {step.link && (
                        <div className="flex-none">
                          <ExternalButton href={step.link.href} variant="secondary" className="px-3 py-2 text-sm">
                            {step.link.label}
                          </ExternalButton>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="residence" className="py-10">
          <h2 className="htf-h2">Validation and Renewal of Residence Permit</h2>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="htf-card htf-card-hover p-6 border-t-4" style={{ borderTopColor: 'var(--color-success)' }}>
              <div className="text-3xl" aria-hidden="true">🛬</div>
              <div className="mt-3 font-extrabold text-[var(--color-primary)]">On Arrival</div>
              <div className="mt-1 text-sm text-[var(--color-muted)]">
                Within 3 months: validate your VLS-TS online on the ANEF portal (paperless procedure).
              </div>
              <div className="mt-4">
                <ExternalButton href="https://www.service-public.gouv.fr/particuliers/vosdroits/N31346">
                  ANEF portal
                </ExternalButton>
              </div>
            </div>

            <div className="htf-card htf-card-hover p-6 border-t-4" style={{ borderTopColor: 'var(--color-accent)' }}>
              <div className="text-3xl" aria-hidden="true">🔄</div>
              <div className="mt-3 font-extrabold text-[var(--color-primary)]">Renewal</div>
              <div className="mt-1 text-sm text-[var(--color-muted)]">
                Apply 2–4 months before your permit expires, also via the ANEF portal.
              </div>
              <div className="mt-4">
                <ExternalButton href="https://www.service-public.gouv.fr/particuliers/vosdroits/N31346">
                  ANEF portal
                </ExternalButton>
              </div>
            </div>
          </div>
        </section>

        <section id="villejuif" className="py-10">
          <h2 className="htf-h2">Reference Locations for Villejuif</h2>

          <div className="mt-6 htf-card p-6" style={{ borderLeft: '4px solid var(--color-accent)' }}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
              <div className="flex items-start gap-4">
                <div
                  className="h-11 w-11 rounded-full flex items-center justify-center text-xl"
                  style={{ background: 'var(--color-accent-soft)', color: 'var(--color-accent)' }}
                  aria-hidden="true"
                >
                  📍
                </div>
                <div className="min-w-0">
                  <div className="font-extrabold text-[var(--color-primary)]">
                    Sous-préfecture de l&apos;Haÿ-les-Roses
                  </div>
                  <div className="mt-1 text-sm text-[var(--color-muted)]">
                    Students residing in Villejuif must contact the Sous-préfecture de l&apos;Haÿ-les-Roses for administrative procedures.{' '}
                    <ExternalLink href="https://www.val-de-marne.gouv.fr/Vos-demarches/Vos-demarches-etrangers-dans-le-departement-du-Val-de-Marne">
                      Official page
                    </ExternalLink>
                  </div>

                  <div className="mt-4 grid gap-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span aria-hidden="true">🏢</span>
                      <span className="text-[var(--color-text)]">
                        2 avenue Larroumès, 94240 L&apos;Haÿ-les-Roses
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span aria-hidden="true">✉️</span>
                      <a
                        href="mailto:sp-lhay-etrangers-usagers@val-de-marne.gouv.fr"
                        className="htf-external-link"
                      >
                        sp-lhay-etrangers-usagers@val-de-marne.gouv.fr
                      </a>
                    </div>
                    <div className="flex items-start gap-2">
                      <span aria-hidden="true">🧑‍💻</span>
                      <span className="text-[var(--color-muted)]">
                        A Digital Welcome Center (PAN) is available by appointment to assist students with their online procedures.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-none">
                <CopyButton text="2 avenue Larroumès, 94240 L'Haÿ-les-Roses" />
              </div>
            </div>
          </div>
        </section>

        <section id="banking" className="py-10">
          <h2 className="htf-h2">Guide bancaire (étudiant étranger) — 2024–2026</h2>
          <p className="mt-3 htf-body max-w-3xl">
            Ouvrir un compte bancaire est essentiel en France (APL, salaire, prélèvements, RIB). Voici un guide simple
            pour choisir entre néobanques et banques traditionnelles, et préparer vos documents.
          </p>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="htf-card p-6 border-t-4" style={{ borderTopColor: 'var(--color-accent)' }}>
              <div className="text-3xl" aria-hidden="true">🏦</div>
              <div className="mt-3 font-extrabold text-[var(--color-primary)]">Pourquoi ouvrir un compte ?</div>
              <ul className="mt-3 grid gap-2 text-sm text-[var(--color-muted)]">
                <li>Recevoir aides/salaires (APL, bourses, job étudiant).</li>
                <li>Payer loyer/factures plus facilement (prélèvements).</li>
                <li>Obtenir un <span className="font-bold text-[var(--color-text)]">RIB</span> (demandé partout).</li>
              </ul>
              <div className="mt-4 text-sm text-[var(--color-muted)]">
                Source : <ExternalLink href="https://www.campusfrance.org/fr/ouvrir-un-compte-bancaire-en-france">Campus France</ExternalLink>
              </div>
            </div>

            <div className="htf-card p-6 border-t-4" style={{ borderTopColor: 'var(--color-success)' }}>
              <div className="text-3xl" aria-hidden="true">📄</div>
              <div className="mt-3 font-extrabold text-[var(--color-primary)]">Check-list (banque traditionnelle)</div>
              <ul className="mt-3 grid gap-2 text-sm text-[var(--color-muted)]">
                <li>Pièce d&apos;identité (passeport / CNI UE / titre de séjour).</li>
                <li>Justificatif de domicile &lt; 3 mois (ou attestation d&apos;hébergement + pièces du logeur).</li>
                <li>Justificatif de scolarité (certificat / carte étudiant).</li>
                <li>Visa étudiant si non-UE.</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 htf-card p-6">
            <div className="font-extrabold text-[var(--color-primary)]">Néobanques (ouverture rapide)</div>
            <div className="mt-3 overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted/40 text-[var(--color-muted)]">
                  <tr>
                    <th className="p-3 text-left font-extrabold">Néobanque</th>
                    <th className="p-3 text-left font-extrabold">Points forts</th>
                    <th className="p-3 text-left font-extrabold">Docs souvent demandés</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--color-text)]">
                  <tr className="border-t">
                    <td className="p-3 font-semibold">Nickel</td>
                    <td className="p-3 text-[var(--color-muted)]">Très simple à ouvrir, souvent avec passeport.</td>
                    <td className="p-3 text-[var(--color-muted)]">Passeport / CNI (UE).</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-semibold">Revolut</td>
                    <td className="p-3 text-[var(--color-muted)]">Top international (multi-devises).</td>
                    <td className="p-3 text-[var(--color-muted)]">Pièce d&apos;identité + parfois justificatif.</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-semibold">N26</td>
                    <td className="p-3 text-[var(--color-muted)]">App simple, suivi budget, notifications.</td>
                    <td className="p-3 text-[var(--color-muted)]">Pièce d&apos;identité + domicile.</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-semibold">bunq</td>
                    <td className="p-3 text-[var(--color-muted)]">Offres étudiantes selon périodes.</td>
                    <td className="p-3 text-[var(--color-muted)]">Pièce d&apos;identité + domicile.</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-semibold">Lydia</td>
                    <td className="p-3 text-[var(--color-muted)]">Pratique pour payer/recevoir entre amis.</td>
                    <td className="p-3 text-[var(--color-muted)]">Pièce d&apos;identité.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-sm text-[var(--color-muted)]">
              Astuce : démarrez avec une néobanque pour avoir un RIB vite, puis ouvrez une banque traditionnelle si besoin.
            </div>
          </div>
        </section>

        <section id="health-insurance" className="py-10">
          <h2 className="htf-h2">Registering for Health Insurance</h2>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="htf-card htf-card-hover p-6">
              <div className="text-3xl" aria-hidden="true">📋</div>
              <div className="mt-3 htf-h3">Step 1</div>
              <div className="mt-2 font-extrabold text-[var(--color-primary)]">Gather documents</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  'Residence permit / proof of application',
                  'University enrollment certificate',
                  'Birth certificate (translated if needed)',
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border px-3 py-1 text-xs font-bold text-[var(--color-text)]"
                    style={{ background: '#F1F5F9' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="htf-card htf-card-hover p-6">
              <div className="text-3xl" aria-hidden="true">💻</div>
              <div className="mt-3 htf-h3">Step 2</div>
              <div className="mt-2 font-extrabold text-[var(--color-primary)]">Fill the form</div>
              <div className="mt-2 text-sm text-[var(--color-muted)]">
                Go to{' '}
                <ExternalLink href="https://etudiant-etranger.ameli.fr/">
                  https://etudiant-etranger.ameli.fr/
                </ExternalLink>{' '}
                and upload your supporting documents.
              </div>
              <div className="mt-4">
                <ExternalButton href="https://etudiant-etranger.ameli.fr/">Open ameli form</ExternalButton>
              </div>
            </div>

            <div className="htf-card htf-card-hover p-6">
              <div className="text-3xl" aria-hidden="true">💳</div>
              <div className="mt-3 htf-h3">Step 3</div>
              <div className="mt-2 font-extrabold text-[var(--color-primary)]">Receive your card</div>
              <div className="mt-2 text-sm text-[var(--color-muted)]">
                Temporary social security number first → then permanent number → then Carte Vitale.
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Callout variant="success" title="⏱ Allow 2–6 weeks processing time">
              Register as soon as you arrive so you can access care and reimbursements smoothly.
            </Callout>
          </div>
        </section>

        <section id="css" className="py-10">
          <h2 className="htf-h2">Complementary Health Insurance (CSS)</h2>

          <Callout variant="warning" title="You may qualify for free CSS coverage" icon="🛡️" className="mt-6">
            Some international students may be eligible for Complémentaire Santé Solidaire (CSS) — free or low-cost health coverage depending on income. CSS covers specialist consultations, dental care, and certain hospital expenses not covered by basic insurance.
            <div className="mt-3 grid gap-2">
              <div className="flex items-start gap-2">
                <span aria-hidden="true">⏱</span>
                <span>Processing time: 2 to 6 weeks. Register as soon as you arrive.</span>
              </div>
              <div className="flex items-start gap-2">
                <span aria-hidden="true">💳</span>
                <span>Once a permanent number is assigned, you will receive your Carte Vitale.</span>
              </div>
            </div>
          </Callout>
        </section>

        <section id="reimbursements" className="py-10">
          <h2 className="htf-h2">Reimbursement Rates</h2>

          <div className="mt-6 htf-card p-6">
            {[
              { label: 'GP consultations', value: 70, color: 'var(--color-success)', text: '70%' },
              { label: 'Medications', value: 65, color: 'linear-gradient(90deg, rgba(245,158,11,0.9), rgba(16,185,129,0.9))', text: '15%–100%' },
              { label: 'Hospitalization', value: 80, color: 'var(--color-accent)', text: '80%' },
              { label: 'Specialist care', value: 70, color: 'var(--color-accent)', text: 'On referral (≈ GP rate)' },
            ].map((row) => (
              <div key={row.label} className="grid grid-cols-[180px_1fr_90px] gap-3 items-center py-3">
                <div className="font-extrabold text-[var(--color-text)]">{row.label}</div>
                <div className="h-3 rounded-full bg-[#E2E8F0] overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${row.value}%`,
                      background: row.color,
                    }}
                  />
                </div>
                <div className="text-right text-sm font-extrabold text-[var(--color-muted)]">{row.text}</div>
              </div>
            ))}

            <div className="mt-3 text-sm text-[var(--color-muted)]">
              Note: A mutuelle (complementary insurance) often covers the remaining costs.
            </div>
          </div>
        </section>

        <section id="mutual-options" className="py-10">
          <h2 className="htf-h2">Student Health Insurance Options (2024/2025)</h2>

          <div className="mt-6">
            <Callout variant="tip" title="💡 All prices vary — compare directly on each site">
              Plans and reimbursements change often. Use each provider’s simulator and read coverage details before subscribing.
            </Callout>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              {
                name: 'LMDE (La Mutuelle des Étudiants)',
                desc: 'Plans tailored to students with basic coverage and dental, optical, and hospital options. Low rates, designed for limited budgets.',
              },
              {
                name: 'SMEBA',
                desc: 'Basic to premium coverage, discounts for international students, advice in English.',
              },
              {
                name: 'HEALTHY Student Pack (April International)',
                desc: 'Covers medical, hospital, dental, and optical care. Flexible, no waiting period. Designed for foreign students.',
              },
              {
                name: 'Heyme',
                desc: 'International coverage, routine healthcare, medication, vision, dental. Free psychological support included.',
              },
              {
                name: 'Alan',
                desc: 'Digital-first, intuitive interface, fast reimbursements.',
              },
              {
                name: "MGEN (Mutuelle Générale de l'Éducation Nationale)",
                desc: 'Extensive coverage including specialized care and mental health consultations.',
              },
            ].map((item) => (
              <div key={item.name} className="htf-card htf-card-hover p-6">
                <div className="flex items-start gap-3">
                  <div
                    className="h-10 w-10 rounded-full flex items-center justify-center font-extrabold text-white"
                    style={{ background: 'rgba(59,130,246,0.9)' }}
                    aria-hidden="true"
                  >
                    {item.name.trim().charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <div className="font-extrabold text-[var(--color-primary)]">{item.name}</div>
                    <div className="mt-1 text-sm text-[var(--color-muted)]">{item.desc}</div>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    className="htf-btn htf-btn-secondary px-3 py-2 text-sm font-bold opacity-60 cursor-not-allowed"
                    disabled
                  >
                    Compare
                  </button>
                  <span className="text-xs font-bold text-[var(--color-muted)]">Visit website ↗</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <ReferencesSection />
      </div>
    </>
  );
}
