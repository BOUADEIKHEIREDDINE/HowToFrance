'use client';

import { useMemo, useState } from 'react';

import { cn } from '@/lib/utils';

export type TabItem = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type ResponsiveTabsProps = {
  items: TabItem[];
  defaultId?: string;
  className?: string;
};

export default function ResponsiveTabs({ items, defaultId, className }: ResponsiveTabsProps) {
  const firstId = items[0]?.id;
  const initial = defaultId ?? firstId ?? '';
  const [activeId, setActiveId] = useState(initial);

  const active = useMemo(() => items.find((t) => t.id === activeId) ?? items[0], [activeId, items]);

  return (
    <div className={className}>
      {/* Mobile: select */}
      <div className="sm:hidden">
        <select
          className="w-full rounded-xl border border-border bg-white px-3 py-2 text-sm font-semibold"
          value={activeId}
          onChange={(e) => setActiveId(e.target.value)}
          aria-label="Select a tab"
        >
          {items.map((t) => (
            <option key={t.id} value={t.id}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop: tabs */}
      <div className="hidden sm:flex flex-wrap gap-2">
        {items.map((t) => {
          const isActive = t.id === activeId;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveId(t.id)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-extrabold transition',
                isActive
                  ? 'bg-[var(--color-accent)] text-white'
                  : 'border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[rgba(59,130,246,0.08)]',
              )}
              aria-pressed={isActive}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="mt-4">{active?.content}</div>
    </div>
  );
}

