'use client';

import { useEffect, useMemo, useState } from 'react';

import { cn } from '@/lib/utils';

export type OnThisPageSection = { id: string; label: string };

type OnThisPageProps = {
  sections: OnThisPageSection[];
  className?: string;
  appearAfterPx?: number;
};

export default function OnThisPage({ sections, className, appearAfterPx = 260 }: OnThisPageProps) {
  const ids = useMemo(() => sections.map((s) => s.id), [sections]);
  const [activeId, setActiveId] = useState<string | null>(ids[0] ?? null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > appearAfterPx);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [appearAfterPx]);

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0));
        if (visibleEntries.length > 0) {
          setActiveId((visibleEntries[0].target as HTMLElement).id);
        }
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: [0, 1] },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  if (!visible) return null;

  return (
    <aside
      className={cn(
        'hidden lg:block',
        'fixed left-5 top-28 z-30 w-[220px]',
        className,
      )}
    >
      <div className="htf-card p-4">
        <div className="text-xs font-extrabold uppercase tracking-wider text-[var(--color-muted)]">
          On this page
        </div>
        <nav className="mt-3 grid gap-2">
          {sections.map((s) => {
            const active = s.id === activeId;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={cn(
                  'relative rounded-lg px-3 py-2 text-sm font-semibold transition',
                  active ? 'text-[var(--color-accent)]' : 'text-[var(--color-muted)] hover:text-[var(--color-text)]',
                )}
              >
                <span
                  className={cn(
                    'absolute left-1 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full',
                    active ? 'bg-[var(--color-accent)]' : 'bg-transparent',
                  )}
                  aria-hidden="true"
                />
                <span className="pl-3">{s.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

