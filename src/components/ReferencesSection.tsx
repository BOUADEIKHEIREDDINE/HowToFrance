import ExternalLink from '@/components/ExternalLink';

type Reference = {
  label: string;
  title: string;
  url: string;
};

const REFERENCES: Reference[] = [
  {
    label: '[1]',
    title: 'Service-Public.fr — Foreign students in France',
    url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/N31346',
  },
  {
    label: '[2]',
    title: 'Campus France — Checklist for arriving in France',
    url: 'https://www.campusfrance.org/fr/organiser-arrivee-France-check-list',
  },
  {
    label: '[3]',
    title: 'CROOS — Five steps to take upon arrival',
    url: 'https://www.croos.fr/blog/les-5-demarches-a-effectuer-des-votre-arrivee-en-france',
  },
  {
    label: '[4]',
    title: 'Val-de-Marne Prefecture — Procedures for foreign nationals',
    url: 'https://www.val-de-marne.gouv.fr/Vos-demarches/Vos-demarches-etrangers-dans-le-departement-du-Val-de-Marne',
  },
  { label: '[5]', title: 'Ameli.fr — etudiant-etranger.ameli.fr', url: 'https://etudiant-etranger.ameli.fr/' },
  {
    label: '[6]',
    title: 'CROUS Paris — Meals at subsidized rates',
    url: 'https://www.crous-paris.fr/se-restaurer/payer-son-repas/des-repas-a-tarif-social-pour-tous-les-etudiants/',
  },
  { label: '[7]', title: 'Linkee', url: 'https://linkee.co/' },
  { label: '[8]', title: 'Cop1 - Student Solidarity', url: 'https://cop1.fr/' },
  { label: '[9]', title: 'La Maison Étudiante — Food distribution', url: 'https://maison-etudiante.paris/en/distributions-alimentaires/' },
  { label: '[10]', title: 'La Maison Étudiante — Health and well-being', url: 'https://maison-etudiante.paris/aides/sante-bien-etre/' },
  { label: '[11]', title: 'Nightline Paris', url: 'https://nightline-paris.fr/' },
  { label: '[12]', title: 'La Maison Étudiante — BAPU', url: 'https://maison-etudiante.paris/aides/sante-bien-etre/' },
  {
    label: '[13]',
    title: 'Culture.gouv.fr — Free museum admission for 18-25 year olds',
    url: 'https://www.culture.gouv.fr/thematiques/musees/Les-musees-en-France/les-politiques-des-musees-de-france/la-gratuite-des-collections-permanentes-pour-les-18-25-ans-dans-les-musees-nationaux',
  },
  { label: '[14]', title: 'Culture Pass', url: 'https://pass.culture.fr/' },
  {
    label: '[15][16]',
    title: 'Mon Avenir en Grand — Benefits for those under 26',
    url: 'https://www.monavenirengrand.com/contenus/sorties-culturelles-les-avantages-pour-les-moins-de-26-ans-en-france.html',
  },
  { label: '[17]', title: 'Location-etudiant.fr — Accommodation in Villejuif', url: 'https://www.location-etudiant.fr/residences-etudiantes-villejuif-94076.html' },
  { label: '[18]', title: 'Studyrama — Student life in Villejuif', url: 'https://logement.studyrama.com/villes/villejuif' },
  { label: '[19]', title: 'Le Bon Coin — Shared accommodation in Villejuif', url: 'https://www.leboncoin.fr/cl/colocations/cp_villejuif_94800' },
  { label: '[20]', title: 'Residenceetudiante.fr — Twenty Campus Villejuif', url: 'https://www.residenceetudiante.fr/residence/residence-etudiante-twenty-campus-villejuif-croizat.html' },
  { label: '[21]', title: 'My Student Services', url: 'https://www.messervices.etudiant.gouv.fr/' },
  { label: '[22]', title: 'Twenty Campus Villejuif Paris Héloïse', url: 'https://www.twenty-campus.com/en/residences/twenty-campus-villejuif-paris-heloise/' },
  { label: '[23]', title: 'UXCO — Ecla Residence Villejuif', url: 'https://www.uxco.com/fr/logement-etudiant/paris/villejuif/eclavillejuif/' },
  { label: '[24]', title: 'Lokaviz', url: 'https://www.lokaviz.fr/' },
  { label: '[25]', title: 'ImmoJeune — CROUS Villejuif', url: 'https://www.immojeune.com/crous/villejuif-94.html' },
  { label: '[27]', title: 'La Carte des Colocs', url: 'https://www.lacartedescolocs.fr/' },
  { label: '[29]', title: 'CAF', url: 'https://www.caf.fr/' },
  { label: '[30]', title: 'Visale', url: 'https://www.visale.fr/' },
  { label: '[31][32]', title: 'City of Villejuif — Students', url: 'https://www.villejuif.fr/etudiants-et-etudiantes' },
  { label: '[33]', title: 'Alpha Network — Catholic Relief Services Villejuif', url: 'https://www.reseau-alpha.org/structure/apprentissage-du-francais/secours-catholique-antenne-de-villejuif' },
  { label: '[34]', title: 'Alpha Network — Villejuif Red Cross FLE B1', url: 'https://www.reseau-alpha.org/structure/apprentissage-du-francais/croix-rouge-francaise-unite-locale-de-gentilly-villejuif-le-kremlin-bicetre/formation/francais-a-visee-sociale-et-communicative/b98a2-cours-de-fle-b1' },
  { label: '[35]', title: 'City of Villejuif — Novis Education & Co', url: 'https://www.villejuif.fr/toutes-les-associations/novis-education-co' },
  { label: '[36]', title: 'Facebook — French classes Villejuif V+', url: 'https://www.facebook.com/groups/villejuifvplus/posts/3556772491140076/' },
  { label: '[37]', title: 'Meetup — Paris and Villejuif Language Exchange', url: 'https://www.meetup.com/en-AU/villejuif-language-exchange/' },
  { label: '[38]', title: 'Paris.fr — FLE Workshops', url: 'https://www.paris.fr/activites/ateliers-de-conversation-en-francais-53400' },
  { label: '[39]', title: 'ESN Buddy System', url: 'https://buddysystem.eu/en/institutions' },
  { label: '[40]', title: 'Club International de Paris', url: 'https://club-international.org/' },
  { label: '[41]', title: "City of Villejuif — RTD International", url: 'https://www.villejuif.fr/toutes-les-associations/rtd-international' },
  { label: '[42]', title: 'Efrei — Community Life', url: 'https://www.efrei.fr/wp-content/uploads/2025/08/plaquette_alpha_associations_etudiantes.pdf' },
  { label: '[43]', title: 'City of Villejuif — Cultural Guide 2025-2026', url: 'https://www.villejuif.fr/toutes-les-publications/guide-culturel-2025-2026' },
  { label: '[44]', title: 'Ecla — Student Accommodation 2025', url: 'https://www.ecla.com/fr/blog/hebergement-etudiant/' },
  { label: '[45]', title: 'Lokaviz', url: 'https://www.lokaviz.fr/' },
  { label: '[46]', title: 'Roomlala', url: 'https://www.roomlala.com/' },
  { label: '[47]', title: 'Appartager', url: 'https://www.appartager.com/' },
  { label: '[48]', title: 'Studapart', url: 'https://www.studapart.com/' },
  { label: '[49]', title: 'Campuséa', url: 'https://www.campusea.fr/' },
  { label: '[50]', title: 'Youth Hostels — HI France', url: 'https://www.hifrance.org/' },
];

export default function ReferencesSection() {
  const count = REFERENCES.length;
  return (
    <section className="py-10">
      <details className="htf-card p-5">
        <summary className="cursor-pointer list-none select-none flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span aria-hidden="true">📚</span>
            <span className="font-extrabold text-[var(--color-primary)]">
              Sources &amp; References
            </span>
            <span className="rounded-full bg-muted px-3 py-1 text-xs font-bold text-[var(--color-muted)]">
              ({count})
            </span>
          </div>
          <span className="text-sm font-bold text-[var(--color-muted)]" aria-hidden="true">
            ▼
          </span>
        </summary>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-2">
          {REFERENCES.map((ref) => (
            <ExternalLink
              key={`${ref.label}-${ref.url}`}
              href={ref.url}
              className="inline-flex items-center justify-between gap-3 rounded-md bg-[#F1F5F9] px-3 py-2 text-xs"
            >
              <span className="font-extrabold text-[var(--color-primary)]">{ref.label}</span>
              <span className="min-w-0 flex-1 truncate text-[var(--color-text)]">{ref.title}</span>
              <span className="text-[var(--color-muted)] font-bold" aria-hidden="true">
                →
              </span>
            </ExternalLink>
          ))}
        </div>
      </details>
    </section>
  );
}

