 'use client';

import { useState } from 'react';

import GradientHero from '@/components/GradientHero';
import OnThisPage from '@/components/OnThisPage';
import Callout from '@/components/Callout';

const FAQ_SECTIONS = [
  {
    id: 'admin',
    title: 'Démarches administratives',
    emoji: '📋',
    color: '#2563EB',
    description:
      "Les bases pour être en règle dès votre arrivée : visa, titre de séjour, justificatifs et démarches à Villejuif.",
    items: [
      {
        q: "Quels documents sont indispensables à mon arrivée en France ?",
        a: "Vous devez disposer d'un passeport valide pour toute la durée du séjour, d'un visa de long séjour valant titre de séjour (VLS-TS) ou d'un titre de séjour en cours de validité, d'une attestation d'inscription dans votre établissement, d'un justificatif de domicile, et avoir payé la CVEC (Contribution Vie Étudiante et de Campus) avant votre inscription administrative.",
      },
      {
        q: 'Comment valider mon VLS-TS après mon arrivée ?',
        a: "La validation doit être faite dans les 3 mois suivant votre arrivée. La procédure est entièrement en ligne sur le portail ANEF (Administration Numérique pour les Étrangers en France). Une taxe de séjour payable via un timbre fiscal électronique est requise.",
      },
      {
        q: 'Comment renouveler mon titre de séjour ?',
        a: "La demande de renouvellement doit être soumise entre 2 et 4 mois avant l'expiration de votre titre actuel, via le portail ANEF. N'attendez pas la dernière minute !",
      },
      {
        q: 'Quel montant financier dois-je justifier pour mon séjour ?',
        a: "Vous devez justifier d'un minimum d'environ 615€ par mois pour subvenir à vos besoins en France.",
      },
      {
        q: 'Où effectuer mes démarches administratives si je réside à Villejuif ?',
        a: "Les étudiants de Villejuif dépendent de la Sous-préfecture de l'Haÿ-les-Roses, située au 2 avenue Larroumès, 94240 L'Haÿ-les-Roses. Vous pouvez les contacter par email : sp-lhay-etrangers-usagers@val-de-marne.gouv.fr. Un Point d'Accueil Numérique (PAN) est disponible sur rendez-vous.",
      },
    ],
  },
  {
    id: 'health',
    title: 'Santé & assurance maladie',
    emoji: '🏥',
    color: '#16A34A',
    description:
      "Comprendre la Sécurité sociale, la CSS et les mutuelles étudiantes pour éviter les mauvaises surprises médicales.",
    items: [
      {
        q: "Comment m'inscrire à la Sécurité Sociale en tant qu'étudiant étranger ?",
        a: "Rendez-vous sur etudiant-etranger.ameli.fr, remplissez le formulaire en ligne avec vos informations personnelles, et téléchargez vos justificatifs (titre de séjour, attestation d'inscription, extrait d'acte de naissance traduit si besoin). Vous recevrez un numéro provisoire, puis un numéro définitif et une Carte Vitale.",
      },
      {
        q: "Quels sont les taux de remboursement de l'Assurance Maladie ?",
        a: "Les consultations chez un médecin généraliste sont remboursées à 70% (en respectant le parcours de soins coordonnés). Les médicaments sont remboursés entre 15% et 100% selon leur importance. L'hospitalisation est remboursée à 80%, le reste pouvant être couvert par une mutuelle.",
      },
      {
        q: 'Ai-je droit à la Complémentaire Santé Solidaire (CSS) ?',
        a: "Selon vos revenus, vous pouvez être éligible à la CSS, qui offre une couverture santé gratuite ou à faible coût. Elle couvre les frais non remboursés par l'Assurance Maladie de base (spécialistes, soins dentaires, hospitalisation).",
      },
      {
        q: 'Quelles mutuelles étudiantes sont recommandées ?',
        a: "Parmi les options adaptées aux étudiants internationaux : LMDE (tarifs réduits pour étudiants), SMEBA (avec conseils en anglais), HEALTHY Student Pack d'April International (sans délai de carence), Heyme (avec assistance psychologique gratuite), Alan (100% numérique, remboursements rapides), et MGEN (couverture étendue incluant la santé mentale).",
      },
      {
        q: "Combien de temps faut-il pour s'inscrire à l'Assurance Maladie ?",
        a: "Le délai de traitement est de 2 à 6 semaines. Il est fortement recommandé de s'inscrire dès votre arrivée en France pour éviter toute période sans couverture médicale.",
      },
      {
        q: 'Où trouver un soutien psychologique gratuit ?',
        a: "La Maison Étudiante de Paris propose des permanences via l'association APASO et Nightline Paris (01 88 32 12 32, disponible la nuit). Les Bureaux d'Aide Psychologique Universitaire (BAPU) offrent des consultations gratuites, prises en charge à 100% par la sécurité sociale.",
      },
    ],
  },
  {
    id: 'housing',
    title: 'Logement',
    emoji: '🏠',
    color: '#9333EA',
    description:
      'Panorama des options de logement autour de Villejuif, avec aides financières et solutions pour trouver un garant.',
    items: [
      {
        q: 'Quelles sont les options de logement pour les étudiants à Villejuif ?',
        a: 'À Villejuif, vous pouvez opter pour : une résidence CROUS (400–550€/mois), un studio privé (700–850€/mois), une colocation (500–650€/mois), ou une résidence étudiante privée (750–950€/mois). Ces prix sont 20 à 30% moins élevés qu\'à Paris intra-muros.',
      },
      {
        q: 'Comment obtenir un logement CROUS ?',
        a: 'Remplissez le Dossier Social Étudiant (DSE) entre le 15 janvier et le 31 mai via messervices.etudiant.gouv.fr pour une rentrée en septembre. Les places sont limitées et attribuées selon des critères sociaux, donc anticipez au maximum. Les tarifs 2024 vont de 200€ à 450€/mois.',
      },
      {
        q: 'Quelles plateformes utiliser pour chercher un logement ?',
        a: 'Plusieurs plateformes sont disponibles : Lokaviz (CROUS, annonces vérifiées), Roomlala et Appartager (colocation), Studapart (baux sécurisés pour étudiants), Le Bon Coin (particuliers, restez vigilant aux arnaques), et les résidences privées Campuséa ou Les Estudines.',
      },
      {
        q: "Je n'ai pas de garant en France. Que faire ?",
        a: "La garantie Visale, proposée gratuitement par Action Logement, permet à Action Logement de se porter garant pour vous. C'est un dispositif essentiel pour les étudiants sans garant physique en France. Faites la demande sur visale.fr.",
      },
      {
        q: 'Puis-je bénéficier des APL (Aide Personnalisée au Logement) ?',
        a: "Oui, si vous êtes muni d'un titre de séjour valide. Le montant de l'APL varie en fonction de votre loyer et de vos ressources. Faites une simulation sur caf.fr pour estimer votre aide.",
      },
      {
        q: 'Pourquoi choisir Villejuif plutôt que Paris pour se loger ?',
        a: "Villejuif offre des loyers 20 à 30% moins chers qu'à Paris, tout en étant bien desservie par la ligne 7 du métro (accès direct à Paris) et bientôt la ligne 14 du Grand Paris Express. La ville est également proche de pôles universitaires et hospitaliers majeurs comme l'Institut Gustave Roussy.",
      },
    ],
  },
  {
    id: 'budget',
    title: 'Alimentation & budget',
    emoji: '🍽️',
    color: '#EA580C',
    description:
      'Où manger pas cher et quelles structures contacter si votre budget est vraiment serré.',
    items: [
      {
        q: 'Comment manger à petit prix en tant qu’étudiant ?',
        a: 'Les Restaurants Universitaires (CROUS) proposent des repas à 3,30€ pour les étudiants non-boursiers et à 1€ pour les boursiers ou en situation de précarité (demande à effectuer sur epa.lescrous.fr). Un restaurant universitaire est disponible à Villejuif à ces tarifs.',
      },
      {
        q: 'Existe-t-il des aides alimentaires gratuites pour étudiants ?',
        a: 'Oui, plusieurs associations organisent des distributions gratuites : Linkee (lutte contre le gaspillage alimentaire), Cop1 – Solidarités Étudiantes, et AGORAé (via la Maison Étudiante de Paris). Ces associations distribuent aussi des produits d’hygiène à Paris et en proche banlieue.',
      },
    ],
  },
  {
    id: 'integration',
    title: 'Intégration & vie sociale',
    emoji: '🎓',
    color: '#0891B2',
    description:
      'Cours de français, vie associative, avantages culturels : tout ce qui vous aide à vous sentir chez vous.',
    items: [
      {
        q: 'Où apprendre ou pratiquer le français à Villejuif ?',
        a: "Plusieurs options locales : Secours Catholique – Antenne Villejuif (cours FLE tous niveaux, 3 rue Sacco et Vanzetti), Croix-Rouge locale (niveau B1, ~10€/an), Novis Education & Co (cours FLE + accompagnement administratif), L'Atelier d'à côté (cours gratuits via Villejuif V+), Café des Langues (échanges informels, 32 rue Georges Lebigot).",
      },
      {
        q: 'Y a-t-il des ressources pour apprendre le français à Paris ?',
        a: 'Oui : les Bibliothèques de Paris proposent des ateliers de conversation gratuits (dès niveau A2), et le site reseau-alpha.org répertorie toutes les structures FLE d’Île-de-France par code postal.',
      },
      {
        q: "Comment rencontrer d'autres étudiants et m'intégrer socialement ?",
        a: "Plusieurs réseaux existent : le Buddy System (ESN Erasmus) met en relation étudiants locaux et internationaux ; le Club International des Jeunes à Paris (CIJP) organise sorties, ateliers et soirées ; les associations de l'Efrei (école à Villejuif) sont aussi un bon point de contact. Des événements comme la Nuit des Étudiants du Monde sont organisés chaque année.",
      },
      {
        q: "Quels avantages culturels ai-je en tant que jeune étudiant (-26 ans) ?",
        a: "De nombreux avantages : musées nationaux gratuits pour les moins de 26 ans résidant en UE, Pass Culture (300€ de crédit à 18 ans pour livres, concerts, cinémas), forfait Imagine R (~380€/an pour les transports illimités en Île-de-France), et tarifs cinéma réduits (5€ à 9€).",
      },
      {
        q: "Comment accéder aux transports en commun en Île-de-France ?",
        a: "Le forfait Imagine R permet aux moins de 26 ans de voyager de façon illimitée sur le réseau Île-de-France Mobilités pour environ 380€ par an. Villejuif est desservie par la ligne 7 du métro avec un accès direct au centre de Paris.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (sectionId: string, itemIdx: number) => {
    const key = `${sectionId}-${itemIdx}`;
    setOpenItem(openItem === key ? null : key);
  };

  return (
    <>
      <GradientHero
        title="FAQ — How to France"
        subtitle="Quick answers to the most common questions about visas, health, housing, budget, and daily life around Villejuif & Paris."
        gradientFrom="#1E3A5F"
        gradientTo="#0EA5E9"
        pills={FAQ_SECTIONS.map((s) => ({ label: s.title, href: `#${s.id}` }))}
        rightTitle="Main topics"
        rightEmojis={FAQ_SECTIONS.map((s) => s.emoji)}
      />

      <OnThisPage
        sections={FAQ_SECTIONS.map((s) => ({
          id: s.id,
          label: s.title,
        }))}
      />

      <div className="relative lg:pl-[260px]">
        {FAQ_SECTIONS.map((section) => (
          <section key={section.id} id={section.id} className="py-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="htf-h2 flex items-center gap-2">
                <span aria-hidden="true">{section.emoji}</span>
                <span>{section.title}</span>
              </h2>
              <span
                className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-extrabold"
                style={{
                  borderColor: section.color,
                  background: 'rgba(255,255,255,0.9)',
                  color: section.color,
                }}
              >
                {section.items.length} questions
              </span>
            </div>

            <p className="mt-3 htf-body max-w-3xl text-[var(--color-muted)]">
              {section.description}
            </p>

            <div className="mt-6 space-y-3">
              {section.items.map((item, idx) => {
                const key = `${section.id}-${idx}`;
                const isOpen = openItem === key;

                return (
                  <div
                    key={key}
                    className="htf-card htf-card-hover overflow-hidden border border-slate-200/80"
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(section.id, idx)}
                      className="flex w-full items-start justify-between gap-3 px-4 py-3 text-left md:px-5 md:py-4"
                    >
                      <span
                        className="text-sm font-semibold leading-snug text-[var(--color-text)]"
                        style={{ color: isOpen ? section.color : undefined }}
                      >
                        {item.q}
                      </span>
                      <span
                        className="flex h-6 w-6 flex-none items-center justify-center rounded-full text-xs font-extrabold transition-colors"
                        style={{
                          background: isOpen ? section.color : '#E5E7EB',
                          color: isOpen ? '#FFFFFF' : '#111827',
                        }}
                        aria-hidden="true"
                      >
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="border-t border-slate-200/80 bg-slate-50/70 px-4 pb-4 pt-3 text-sm leading-relaxed text-[var(--color-muted)] md:px-5">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        <div className="pb-10">
          <Callout variant="tip" title="Pour les démarches officielles">
            Ces réponses sont là pour vous guider rapidement. Pour des informations à jour et
            opposables, vérifiez toujours sur les sites officiels (service-public.fr, ameli.fr,
            caf.fr, Île-de-France Mobilités) ou auprès de votre établissement.
          </Callout>
        </div>
      </div>
    </>
  );
}

