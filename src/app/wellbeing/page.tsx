import SectionHero from '@/components/SectionHero';

export default function WellbeingPage() {
  return (
    <>
      <SectionHero title="Wellbeing" subtitle="Taking care of yourself in France." />

      <section className="py-8 space-y-4">
        <h2 className="text-2xl font-semibold mb-2">Healthcare (CPAM)</h2>
        <p>Understanding the French healthcare system and CPAM registration.</p>
      </section>

      <section className="py-8 space-y-4">
        <h2 className="text-2xl font-semibold mb-2">Mental Health Resources</h2>
        <p>Where to find mental health support in France.</p>
      </section>

      <section className="py-8 space-y-4">
        <h2 className="text-2xl font-semibold mb-2">Emergency Numbers</h2>
        <p>Important emergency contact information.</p>
      </section>

      <section className="py-8 space-y-4">
        <h2 className="text-2xl font-semibold mb-2">Culture Shock Tips</h2>
        <p>Tips for adapting to a new culture.</p>
      </section>

      <section className="py-8 space-y-4">
        <h2 className="text-2xl font-semibold mb-2">Admin Stress</h2>
        <p>Strategies for managing administrative tasks.</p>
      </section>
    </>
  );
}
