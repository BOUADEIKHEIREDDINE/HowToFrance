import Link from 'next/link';

import { cn } from '@/lib/utils';

type HeroPill = { label: string; href: string };

type GradientHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  gradientFrom: string;
  gradientTo: string;
  pills?: HeroPill[];
  rightEmojis?: string[];
  rightTitle?: string;
  className?: string;
};

export default function GradientHero({
  eyebrow,
  title,
  subtitle,
  gradientFrom,
  gradientTo,
  pills,
  rightEmojis,
  rightTitle,
  className,
}: GradientHeroProps) {
  return (
    <section
      className={cn(
        'relative left-1/2 right-1/2 -mx-[50vw] w-screen',
        'py-16 md:py-20',
        className,
      )}
      style={{
        background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <div>
            {eyebrow && (
              <div className="mb-3 text-white/90 text-xs font-extrabold uppercase tracking-[0.12em]">
                {eyebrow}
              </div>
            )}
            <h1 className="text-white text-4xl md:text-[2.75rem] font-extrabold tracking-tight leading-[1.05]">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-white/90 text-base md:text-lg leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            )}

            {pills && pills.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {pills.map((pill) => (
                  <Link
                    key={pill.href}
                    href={pill.href}
                    className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
                  >
                    {pill.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="justify-self-center lg:justify-self-end w-full max-w-md">
            <div className="htf-card border-white/20 bg-white/10 backdrop-blur-xl p-6">
              {rightTitle && (
                <div className="text-white/90 text-sm font-semibold mb-3">{rightTitle}</div>
              )}
              <div className="grid grid-cols-3 gap-3">
                {(rightEmojis ?? []).slice(0, 6).map((emoji, idx) => (
                  <div
                    key={`${emoji}-${idx}`}
                    className="rounded-xl bg-white/15 border border-white/20 p-4 flex items-center justify-center text-3xl"
                    aria-hidden="true"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

