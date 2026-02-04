import BudgetEstimator from '@/components/BudgetEstimator';
import SectionHero from '@/components/SectionHero';

export default function HousingPage() {
  return (
    <>
      <SectionHero title="Housing" subtitle="Find your home in France." />

      <section className="py-8 space-y-4">
        <h2 className="text-2xl font-semibold mb-2">Find Housing</h2>
        <p>Tips and resources for finding student accommodation.</p>
      </section>

      <section className="py-8 space-y-4">
        <h2 className="text-2xl font-semibold mb-2">Contracts Explained</h2>
        <p>Understanding lease agreements and tenant rights.</p>
      </section>

      <section className="py-8 space-y-4">
        <h2 className="text-2xl font-semibold mb-2">CAF Aid</h2>
        <p>Information about housing assistance programs.</p>
      </section>

      <section className="py-8 space-y-4">
        <h2 className="text-2xl font-semibold mb-2">Scam Red Flags</h2>
        <p>How to avoid housing scams.</p>
      </section>

      <section className="py-8 space-y-4">
        <h2 className="text-2xl font-semibold mb-2">Useful Platforms</h2>
        <p>List of reputable housing websites.</p>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-4">Budget Estimator (Placeholder)</h2>
        <BudgetEstimator />
      </section>
    </>
  );
}
