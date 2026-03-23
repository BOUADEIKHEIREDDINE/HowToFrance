import Link from 'next/link';

import Callout from '@/components/Callout';
import GradientHero from '@/components/GradientHero';
import OnThisPage from '@/components/OnThisPage';

export default function OutreachPage() {
  return (
    <>
      <GradientHero
        eyebrow="OUR PURPOSE"
        title="Your French Integration Guide: From Financial Aid to Social Circles"
        subtitle="Have you been lurking on France recently and felt the desire to come and study abroad? The biggest hurdles are still the overwhelming wall of paperwork."
        gradientFrom="#1565C0"
        gradientTo="#2196F3"
        pills={[{ label: 'Join our community', href: '/forum' }]}
        rightTitle="Quick topics"
        rightEmojis={['📄', '🏠', '💰', '🤝', '💬', '⭐']}
      />

      <OnThisPage
        sections={[
          { id: 'problem', label: "The Problem We're Solving" },
          { id: 'expect', label: 'What to Expect on HTF' },
          { id: 'different', label: 'Why HTF is Different' },
        ]}
      />

      <div className="relative lg:pl-[260px]">
        <section id="problem" className="py-10">
          <h2 className="htf-h2">The Problem We're Solving</h2>

          <p className="mt-3 htf-body max-w-3xl">
            Have you been lurking on France recently and felt the desire to come and study abroad? If so, the
            biggest hurdles still holding you back might be the overwhelming wall of paperwork waiting for you.
          </p>
          <p className="mt-4 htf-body max-w-3xl">
            Knowing what is mandatory, how and where to get the papers you need and knowing what aids you can
            benefit from is a real struggle when you need to navigate through dozens of French government
            websites that are only really useful when you already know what you are looking for and still
            overall difficult to understand.
          </p>
          <p className="mt-4 htf-body max-w-3xl">
            This on its own makes moving to France a challenge and we think that this design flaw should not be
            the reason to reconsider studying here.
          </p>
        </section>

        <section id="expect" className="py-10">
          <h2 className="htf-h2">What to Expect on HTF</h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="htf-card htf-card-hover bg-muted/40 p-6 border-t-4"
              style={{ borderTopColor: 'var(--color-accent)' }}
            >
              <div className="text-3xl" aria-hidden="true">
                📋
              </div>
              <div className="mt-3 font-extrabold text-[var(--color-primary)]">Legal &amp; Financial Guidance</div>
              <div className="mt-1 text-sm text-[var(--color-muted)]">
                A comprehensive journey to guide you at every step of legal procedures, whether it is paperwork
                or finance. We pulled most of the heavy lifting by combining feedback from people who have
                already gone through the procedures and reading the government websites ourselves.
              </div>
            </div>

            <div
              className="htf-card htf-card-hover bg-muted/40 p-6 border-t-4"
              style={{ borderTopColor: 'var(--color-success)' }}
            >
              <div className="text-3xl" aria-hidden="true">
                🤝
              </div>
              <div className="mt-3 font-extrabold text-[var(--color-primary)]">Community &amp; Associations</div>
              <div className="mt-1 text-sm text-[var(--color-muted)]">
                A catalogue about the life of your surrounding community. Events, associations as well as the
                best spots around will be listed for you to explore your neighborhood and meet people eager
                to share a moment.
              </div>
            </div>

            <div
              className="htf-card htf-card-hover bg-muted/40 p-6 border-t-4"
              style={{ borderTopColor: 'var(--color-warning)' }}
            >
              <div className="text-3xl" aria-hidden="true">
                💰
              </div>
              <div className="mt-3 font-extrabold text-[var(--color-primary)]">Budget Tips &amp; Tricks</div>
              <div className="mt-1 text-sm text-[var(--color-muted)]">
                Tips and tricks for your budget to feel like the least of your problems while still being able
                to go out and enjoy student life in France.
              </div>
            </div>

            <div
              className="htf-card htf-card-hover bg-muted/40 p-6 border-t-4"
              style={{ borderTopColor: 'var(--color-accent)' }}
            >
              <div className="text-3xl" aria-hidden="true">
                💬
              </div>
              <div className="mt-3 font-extrabold text-[var(--color-primary)]">Student Forum</div>
              <div className="mt-1 text-sm text-[var(--color-muted)]">
                An online web of students ready to share their experience on our forum for any further
                questions you could have or simply to have a chat with people who share the same experience.
              </div>
            </div>
          </div>
        </section>

        <section id="different" className="py-10">
          <h2 className="htf-h2">Why HTF is Different</h2>

          <p className="mt-3 htf-body max-w-3xl">
            The best part? All those resources are free. No more need to pay for an agency to help you with
            paperwork and still leave you on your own to integrate into your community.
          </p>
          <p className="mt-4 htf-body max-w-3xl">
            We walk with you from start to your complete blend in France.
          </p>

          <div className="mt-6">
            <Callout variant="warning" title="Don't navigate the French system alone.">
              Join our community today and start your journey with confidence and most importantly, start it
              accompanied from the start.
            </Callout>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/forum" className="htf-btn htf-btn-primary px-3 py-2 text-sm font-bold">
              Get Started
            </Link>
            <a href="#expect" className="htf-btn htf-btn-secondary px-3 py-2 text-sm font-bold">
              Learn More
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

