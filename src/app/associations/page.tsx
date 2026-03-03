import GradientHero from '@/components/GradientHero';
import AssociationsDirectory from '@/components/AssociationsDirectory';
import ReferencesSection from '@/components/ReferencesSection';

export default function AssociationsPage() {
  return (
    <>
      <GradientHero
        title="Find Your Community"
        subtitle="Volunteer, get support, or simply meet people — these associations are here for you."
        gradientFrom="#92400E"
        gradientTo="#D97706"
        pills={[
          { label: '🍎 Food Aid', href: '#food-aid' },
          { label: '🧠 Mental Health', href: '#mental-health' },
          { label: '🇫🇷 French Lessons', href: '#french-lessons' },
          { label: '🌍 Networking', href: '#networking' },
        ]}
        rightTitle="Community icons"
        rightEmojis={['🤝', '🧠', '🍎', '🇫🇷', '🎓', '🌍']}
      />

      <AssociationsDirectory />

      <ReferencesSection />
    </>
  );
}
