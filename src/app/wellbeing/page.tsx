import GradientHero from '@/components/GradientHero';
import ExternalLink from '@/components/ExternalLink';
import Callout from '@/components/Callout';
import ResponsiveTabs from '@/components/ResponsiveTabs';
import OnThisPage from '@/components/OnThisPage';
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
          { label: 'Health & Taxes', href: '#health-taxes' },
          { label: 'Transport', href: '#transport' },
          { label: 'Student jobs', href: '#jobs' },
          { label: 'Religious life', href: '#religion' },
          { label: 'Mental Health', href: '#mental-health' },
          { label: 'Learn French', href: '#learn-french' },
          { label: 'Culture & Leisure', href: '#perks' },
        ]}
        rightTitle="Quick icons"
        rightEmojis={['🍽️', '🧠', '🇫🇷', '🎭', '🤝', '✨']}
      />

      <OnThisPage
        sections={[
          { id: 'food', label: 'Food & groceries' },
          { id: 'health-taxes', label: 'Health & taxes' },
          { id: 'transport', label: 'Getting around' },
          { id: 'jobs', label: 'Student jobs' },
          { id: 'religion', label: 'Religious life' },
          { id: 'mental-health', label: 'Mental health' },
          { id: 'learn-french', label: 'Learn French' },
          { id: 'networks', label: 'Networks' },
          { id: 'perks', label: 'Culture & perks' },
        ]}
      />

      <div className="relative lg:pl-[260px]">
        <section id="food" className="py-10">
          <h2 className="htf-h2">Food, groceries & student budget</h2>
          <p className="mt-3 htf-body max-w-3xl">
            Whether you want to eat cheap, cook healthy, or find familiar ingredients, here&apos;s a practical guide for
            Villejuif & Paris.
          </p>

          <div className="mt-6 htf-card p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className="rounded-xl p-5"
                style={{ background: 'rgba(59,130,246,0.10)', border: '1px solid rgba(59,130,246,0.25)' }}
              >
                <div className="text-xs font-extrabold text-[var(--color-muted)]">CROUS meal (standard student)</div>
                <div className="mt-1 text-3xl font-extrabold text-[var(--color-primary)]">€3.30</div>
              </div>
              <div
                className="rounded-xl p-5"
                style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.28)' }}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs font-extrabold text-[var(--color-muted)]">CROUS meal (social rate)</div>
                  <span
                    className="rounded-full px-3 py-1 text-[11px] font-extrabold"
                    style={{ background: 'rgba(245,158,11,0.14)', color: '#92400E' }}
                  >
                    Application needed
                  </span>
                </div>
                <div className="mt-1 text-3xl font-extrabold text-[var(--color-primary)]">€1.00</div>
              </div>
            </div>

            <div className="mt-5 text-sm text-[var(--color-muted)]">
              Learn more via{' '}
              <ExternalLink href="https://www.crous-paris.fr/se-restaurer/payer-son-repas/des-repas-a-tarif-social-pour-tous-les-etudiants/">
                CROUS restaurants
              </ExternalLink>
              .
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🥕', name: 'Linkee', href: 'https://linkee.co/', desc: 'Food distributions + solidarity network.' },
              { icon: '🤲', name: 'Cop1 – Solidarités Étudiantes', href: 'https://cop1.fr/', desc: 'Support for student budgets + events.' },
              { icon: '🛒', name: 'AGORAé (Maison Étudiante)', href: 'https://maison-etudiante.paris/en/distributions-alimentaires/', desc: 'Food distribution + solidarity grocery store.' },
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

          <div className="mt-8 htf-card p-6">
            <h3 className="text-lg font-extrabold text-[var(--color-primary)]">
              Manger et faire ses courses en France (guide facile)
            </h3>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Bienvenue en France ! Où trouver les produits que vous aimez ? Comment manger équilibré sans dépenser trop ?
              Voici un guide pratique pour Villejuif et Paris.
            </p>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="htf-card p-6 border-t-4" style={{ borderTopColor: 'var(--color-accent)' }}>
                <div className="text-sm font-extrabold text-[var(--color-primary)]">1) Commerces spécialisés</div>
                <div className="mt-3 grid gap-3 text-sm text-[var(--color-text)]">
                  <div>
                    <div className="font-extrabold">Alimentation halal</div>
                    <div className="mt-1 text-[var(--color-muted)]">
                      À Villejuif : <span className="font-bold">Assalam</span> (104 Rue de Chevilly),{' '}
                      <span className="font-bold">Krouna Chedli</span> (épicerie, souvent ouverte tard),{' '}
                      <span className="font-bold">H Market</span> (produits halal, promos).
                    </div>
                    <div className="mt-1 text-[var(--color-muted)]">
                      À Paris : cherchez sur Google Maps “boucherie halal Paris”.
                    </div>
                  </div>
                  <div>
                    <div className="font-extrabold">Alimentation asiatique</div>
                    <div className="mt-1 text-[var(--color-muted)]">
                      Paris (13e, Place d&apos;Italie / Porte de Choisy / Ivry) : <span className="font-bold">Tang Frères</span>,{' '}
                      <span className="font-bold">Paris Store</span>. Accès facile via métro ligne 7.
                    </div>
                  </div>
                  <div>
                    <div className="font-extrabold">Alimentation africaine</div>
                    <div className="mt-1 text-[var(--color-muted)]">Paris 13e : cherchez “épicerie africaine Paris 13”.</div>
                  </div>
                  <div>
                    <div className="font-extrabold">Alimentation casher</div>
                    <div className="mt-1 text-[var(--color-muted)]">
                      Val-de-Marne + Paris (ex: 19e) : cherchez “supermarché casher Paris”.
                    </div>
                  </div>
                </div>
              </div>

              <div className="htf-card p-6 border-t-4" style={{ borderTopColor: 'var(--color-success)' }}>
                <div className="text-sm font-extrabold text-[var(--color-primary)]">2) Marchés locaux (Villejuif)</div>
                <div className="mt-3 overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/40 text-[var(--color-muted)]">
                      <tr>
                        <th className="p-3 text-left font-extrabold">Marché</th>
                        <th className="p-3 text-left font-extrabold">Adresse</th>
                        <th className="p-3 text-left font-extrabold">Jours</th>
                      </tr>
                    </thead>
                    <tbody className="text-[var(--color-text)]">
                      <tr className="border-t">
                        <td className="p-3 font-semibold">Marché Delaune</td>
                        <td className="p-3">Avenue Delaune</td>
                        <td className="p-3">Mercredi & Dimanche matin</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-3 font-semibold">Marché du Centre</td>
                        <td className="p-3">Place Eugène-Varlin</td>
                        <td className="p-3">Mercredi & Samedi matin</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-3 font-semibold">Marché Léo-Lagrange</td>
                        <td className="p-3">Place Oscar Niemeyer</td>
                        <td className="p-3">Mercredi & Vendredi (10h–19h30)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 grid gap-2 text-sm text-[var(--color-muted)]">
                  <div className="flex items-start gap-2">
                    <span aria-hidden="true">⏰</span>
                    <span>
                      Astuce : tôt = meilleur choix, fin de marché = souvent moins cher.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span aria-hidden="true">🧺</span>
                    <span>Prévoyez sacs réutilisables + monnaie.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 htf-card p-6 border-l-4" style={{ borderLeftColor: 'var(--color-warning)' }}>
              <div className="font-extrabold text-[var(--color-primary)]">3) Astuces budget courses</div>
              <ul className="mt-3 grid gap-2 text-sm text-[var(--color-muted)]">
                <li>
                  <span className="font-bold text-[var(--color-text)]">Discount:</span> Lidl & Aldi pour des prix bas toute l&apos;année.
                </li>
                <li>
                  <span className="font-bold text-[var(--color-text)]">Anti-gaspillage:</span>{' '}
                  <ExternalLink href="https://www.toogoodtogo.com/fr">Too Good To Go</ExternalLink> et{' '}
                  <ExternalLink href="https://phenix.app/">Phenix</ExternalLink>.
                </li>
                <li>
                  <span className="font-bold text-[var(--color-text)]">Classiques qui marchent:</span> cuisiner soi-même, faire une liste, profiter des promos, acheter en vrac.
                </li>
              </ul>

              <div className="mt-4 text-xs text-[var(--color-muted)]">
                Référence : Too Good To Go (communiqué “Rentrée 2025”).{' '}
                <ExternalLink href="https://www.toogoodtogo.com/fr/press/rentree-2025-la-recette-de-too-good-to-go-pour-economiser-jusqu-a-870-eur-par-an">
                  Lire
                </ExternalLink>
                .
              </div>
            </div>
          </div>
        </section>

        <section id="health-taxes" className="py-10">
          <h2 className="htf-h2">Santé & impôts (guide facile)</h2>

          <div className="mt-6">
            <Callout variant="tip" title="Deux sujets qui font peur… mais ça se gère" icon="🧾">
              Santé et impôts sont des démarches essentielles. Avec les bons documents et les bons sites, tout devient plus
              simple.
            </Callout>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="htf-card p-6 border-t-4" style={{ borderTopColor: 'var(--color-success)' }}>
              <div className="text-3xl" aria-hidden="true">🏥</div>
              <div className="mt-3 font-extrabold text-[var(--color-primary)]">1) Votre santé en France</div>
              <div className="mt-2 text-sm text-[var(--color-muted)]">
                En tant qu&apos;étudiant, vous pouvez vous affilier à la Sécurité sociale (démarche gratuite) et obtenir une Carte Vitale.
              </div>
              <ul className="mt-4 grid gap-2 text-sm text-[var(--color-muted)]">
                <li>
                  Affiliation :{' '}
                  <ExternalLink href="https://www.ameli.fr/">ameli.fr</ExternalLink>
                </li>
                <li>
                  Médecin traitant = meilleur remboursement.{' '}
                  <ExternalLink href="https://www.ameli.fr/assure/remboursements/etre-bien-rembourse/medecin-traitant">
                    Guide ameli
                  </ExternalLink>
                </li>
                <li>Mutuelle : utile pour réduire le reste à charge (dentaire, lunettes, etc.).</li>
              </ul>
              <div className="mt-4 rounded-xl bg-muted/40 border border-border p-4 text-sm text-[var(--color-muted)]">
                Check-list : INE, pièce d&apos;identité, justificatif de scolarité, RIB français.
              </div>
            </div>

            <div className="htf-card p-6 border-t-4" style={{ borderTopColor: 'var(--color-accent)' }}>
              <div className="text-3xl" aria-hidden="true">💶</div>
              <div className="mt-3 font-extrabold text-[var(--color-primary)]">2) Les impôts (première déclaration)</div>
              <div className="mt-2 text-sm text-[var(--color-muted)]">
                Déclarer ne veut pas dire payer. Si vous avez des revenus en France, une déclaration peut être nécessaire.
              </div>
              <ul className="mt-4 grid gap-2 text-sm text-[var(--color-muted)]">
                <li>
                  Site officiel : <ExternalLink href="https://www.impots.gouv.fr/">impots.gouv.fr</ExternalLink>
                </li>
                <li>
                  Première fois :{' '}
                  <ExternalLink href="https://www.impots.gouv.fr/portail/particulier/je-declare-mes-revenus-pour-la-premiere-fois">
                    procédure
                  </ExternalLink>
                </li>
                <li>
                  Conventions fiscales :{' '}
                  <ExternalLink href="https://www.impots.gouv.fr/portail/international-particulier/conventions-fiscales">
                    éviter la double imposition
                  </ExternalLink>
                </li>
              </ul>
              <div className="mt-4 rounded-xl bg-muted/40 border border-border p-4 text-sm text-[var(--color-muted)]">
                Astuce : gardez vos documents (fiches de paie, attestations) et demandez de l&apos;aide si besoin.
              </div>
            </div>
          </div>
        </section>

        <section id="transport" className="py-10">
          <h2 className="htf-h2">Se déplacer à Paris & en Île-de-France</h2>

          <div className="mt-6 htf-card p-6">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="min-w-0">
                <div className="font-extrabold text-[var(--color-primary)]">Forfait Imagine R Étudiant (moins de 26 ans)</div>
                <div className="mt-2 text-sm text-[var(--color-muted)]">
                  Abonnement annuel illimité (métro, RER, bus, tram, train) en Île-de-France. En 2024/2025 : 392,30€.
                </div>
                <div className="mt-4 grid gap-2 text-sm text-[var(--color-muted)]">
                  <div className="flex items-start gap-2">
                    <span aria-hidden="true">📄</span>
                    <span>Documents : photo, certificat de scolarité, justificatif de domicile, RIB ou CB.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span aria-hidden="true">🧭</span>
                    <span>
                      Site :{' '}
                      <ExternalLink href="https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/forfait-imagine-r-etudiant">
                        Île-de-France Mobilités
                      </ExternalLink>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-none">
                <ExternalLink href="https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/forfait-imagine-r-etudiant">
                  Souscrire / infos →
                </ExternalLink>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                emoji: '🚲',
                title: "Vélib' Métropole",
                desc: "Vélos en libre-service (app). Bon plan pour trajets courts.",
                href: 'https://www.velib-metropole.fr/',
              },
              {
                emoji: '🛴',
                title: 'Trottinettes',
                desc: "Lime / Dott / Tier : pratique mais respectez règles (pas de trottoir).",
                href: 'https://www.iledefrance-mobilites.fr/',
              },
              {
                emoji: '🗺️',
                title: 'Planifier',
                desc: 'Citymapper / Google Maps / app Île-de-France Mobilités (temps réel).',
                href: 'https://www.iledefrance-mobilites.fr/',
              },
            ].map((c) => (
              <div key={c.title} className="htf-card htf-card-hover p-6">
                <div className="text-3xl" aria-hidden="true">{c.emoji}</div>
                <div className="mt-3 font-extrabold text-[var(--color-primary)]">{c.title}</div>
                <div className="mt-2 text-sm text-[var(--color-muted)]">{c.desc}</div>
                <div className="mt-4">
                  <ExternalLink href={c.href}>Open</ExternalLink>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="jobs" className="py-10">
          <h2 className="htf-h2">Jobs étudiants (guide débutant)</h2>

          <div className="mt-6">
            <Callout variant="warning" title="Règle clé : 964h/an" icon="⏱️">
              Les étudiants non-européens peuvent travailler jusqu&apos;à 964 heures par an (environ 60% d&apos;un temps plein).
            </Callout>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="htf-card p-6 border-t-4" style={{ borderTopColor: 'var(--color-accent)' }}>
              <div className="font-extrabold text-[var(--color-primary)]">Où chercher</div>
              <div className="mt-3 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-muted/40 text-[var(--color-muted)]">
                    <tr>
                      <th className="p-3 text-left font-extrabold">Plateforme</th>
                      <th className="p-3 text-left font-extrabold">Pourquoi</th>
                    </tr>
                  </thead>
                  <tbody className="text-[var(--color-text)]">
                    <tr className="border-t">
                      <td className="p-3 font-semibold">StudentPop</td>
                      <td className="p-3 text-[var(--color-muted)]">Missions courtes, ultra flexible.</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3 font-semibold">Jobijoba / JobEtudiant</td>
                      <td className="p-3 text-[var(--color-muted)]">Beaucoup d&apos;offres à temps partiel.</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3 font-semibold">Indeed / LinkedIn</td>
                      <td className="p-3 text-[var(--color-muted)]">Large catalogue + réseau.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-sm text-[var(--color-muted)]">
                Réf :{' '}
                <ExternalLink href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2713">
                  Service-Public (travail étudiant étranger)
                </ExternalLink>
              </div>
            </div>

            <div className="htf-card p-6 border-t-4" style={{ borderTopColor: 'var(--color-success)' }}>
              <div className="font-extrabold text-[var(--color-primary)]">À retenir</div>
              <ul className="mt-3 grid gap-2 text-sm text-[var(--color-muted)]">
                <li>
                  Votre VLS-TS “étudiant” / titre de séjour suffit (dans la limite légale).
                </li>
                <li>
                  Salaire minimum : SMIC.{' '}
                  <ExternalLink href="https://www.service-public.fr/particuliers/vosdroits/F23005">
                    Détails
                  </ExternalLink>
                </li>
                <li>Contrats fréquents : CDD, CDI temps partiel, intérim.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="religion" className="py-10">
          <h2 className="htf-h2">Vie religieuse en France (repères)</h2>

          <div className="mt-6 htf-card p-6 border-l-4" style={{ borderLeftColor: 'var(--color-accent)' }}>
            <div className="font-extrabold text-[var(--color-primary)]">Laïcité & liberté de culte</div>
            <div className="mt-2 text-sm text-[var(--color-muted)]">
              La France est un pays laïc : l&apos;État est neutre, et chacun est libre de croire ou non, et de pratiquer sa religion dans le respect de l&apos;ordre public.
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="htf-card htf-card-hover p-6">
              <div className="text-3xl" aria-hidden="true">🕌</div>
              <div className="mt-3 font-extrabold text-[var(--color-primary)]">Musulmans</div>
              <div className="mt-2 text-sm text-[var(--color-muted)]">
                Villejuif : cherchez “mosquée Villejuif horaires” sur Google Maps. Paris : la Grande Mosquée de Paris (5e, ligne 7 – Censier-Daubenton) + salles de prière (13e/14e).
              </div>
            </div>
            <div className="htf-card htf-card-hover p-6">
              <div className="text-3xl" aria-hidden="true">⛪</div>
              <div className="mt-3 font-extrabold text-[var(--color-primary)]">Chrétiens</div>
              <div className="mt-2 text-sm text-[var(--color-muted)]">
                Églises catholiques / protestantes / orthodoxes : très nombreuses. Cherchez “église Villejuif” ou “église Paris” sur Google Maps.
              </div>
            </div>
            <div className="htf-card htf-card-hover p-6">
              <div className="text-3xl" aria-hidden="true">🕍</div>
              <div className="mt-3 font-extrabold text-[var(--color-primary)]">Juifs</div>
              <div className="mt-2 text-sm text-[var(--color-muted)]">
                Synagogues : cherchez “synagogue Villejuif” ou “synagogue Paris”. Le 19e compte une importante communauté.
              </div>
            </div>
            <div className="htf-card htf-card-hover p-6">
              <div className="text-3xl" aria-hidden="true">🧘</div>
              <div className="mt-3 font-extrabold text-[var(--color-primary)]">Autres confessions</div>
              <div className="mt-2 text-sm text-[var(--color-muted)]">
                Centres et temples existent à Paris/Île-de-France. Les consulats/ambassades peuvent aussi orienter vers des communautés.
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Callout variant="tip" title="Campus" icon="🎓">
              Certaines universités proposent des espaces de recueillement. Regardez aussi les associations étudiantes (EMF, aumôneries, etc.) pour rencontrer du monde.
            </Callout>
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
      </div>
    </>
  );
}
