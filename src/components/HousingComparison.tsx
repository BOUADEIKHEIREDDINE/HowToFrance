'use client';

import { useMemo, useState } from 'react';

import { cn } from '@/lib/utils';
import ExternalLink from '@/components/ExternalLink';

type Mode = 'both' | 'villejuif' | 'paris';

type Row = {
  typeLabel: string;
  typeHref: string;
  villejuif: string;
  paris: string;
  notes: string;
  badge?: { label: string; color: 'green' | 'blue' };
  cheap?: boolean;
};

const ROWS: Row[] = [
  {
    typeLabel: 'CROUS residence',
    typeHref: 'https://www.location-etudiant.fr/residences-etudiantes-villejuif-94076.html',
    villejuif: '€400–€550',
    paris: '€450–€650',
    notes: 'Very economical, but places are limited and given priority to students receiving grants.',
    cheap: true,
  },
  {
    typeLabel: 'Private studio apartment',
    typeHref: 'https://logement.studyrama.com/villes/villejuif',
    villejuif: '€700–€850',
    paris: '€900–€1,200+',
    notes: 'Villejuif generally offers more space for a comparable or lower rent than Paris.',
  },
  {
    typeLabel: 'Shared apartment',
    typeHref: 'https://www.leboncoin.fr/cl/colocations/cp_villejuif_94800',
    villejuif: '€500–€650',
    paris: '€600–€900',
    notes: 'Ideal for socializing and sharing expenses (rent, internet, electricity).',
    badge: { label: 'Best value', color: 'green' },
    cheap: true,
  },
  {
    typeLabel: 'Private student residence',
    typeHref:
      'https://www.residenceetudiante.fr/residence/residence-etudiante-twenty-campus-villejuif-croizat.html',
    villejuif: '€750–€950',
    paris: '€950–€1,300',
    notes: 'Includes services (gym, internet, laundry) but costs are higher.',
    badge: { label: 'Most services', color: 'blue' },
  },
];

function PricePill({ text, cheap }: { text: string; cheap?: boolean }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-extrabold"
      style={{
        background: cheap ? 'rgba(16,185,129,0.12)' : 'rgba(59,130,246,0.10)',
        color: cheap ? '#065F46' : '#1E3A5F',
        border: '1px solid rgba(148,163,184,0.45)',
      }}
    >
      {text}
    </span>
  );
}

export default function HousingComparison() {
  const [mode, setMode] = useState<Mode>('both');
  const header = useMemo(() => ({ villejuif: 'Villejuif (Avg.)', paris: 'Paris (Avg.)' }), []);

  return (
    <div className="mt-6">
      <div className="flex flex-wrap items-center gap-2">
        <div className="text-sm font-extrabold text-[var(--color-muted)]">Highlight:</div>
        {[
          { id: 'villejuif', label: 'Villejuif' },
          { id: 'paris', label: 'Paris' },
          { id: 'both', label: 'Both' },
        ].map((opt) => {
          const active = mode === (opt.id as Mode);
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => setMode(opt.id as Mode)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-extrabold transition',
                active
                  ? 'bg-[var(--color-accent)] text-white'
                  : 'border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[rgba(59,130,246,0.08)]',
              )}
              aria-pressed={active}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      {/* Desktop / tablet: table */}
      <div className="hidden md:block mt-5 overflow-x-auto rounded-xl border bg-white">
        <table className="min-w-[980px] w-full text-sm">
          <thead className="bg-[#F1F5F9]">
            <tr className="text-left">
              <th className="p-4 font-extrabold text-[var(--color-primary)]">Type</th>
              <th
                className={cn(
                  'p-4 font-extrabold text-[var(--color-primary)]',
                  mode === 'villejuif' && 'bg-[rgba(16,185,129,0.08)]',
                  mode === 'both' && 'bg-[rgba(16,185,129,0.05)]',
                )}
              >
                {header.villejuif}
              </th>
              <th
                className={cn(
                  'p-4 font-extrabold text-[var(--color-primary)]',
                  mode === 'paris' && 'bg-[rgba(59,130,246,0.08)]',
                  mode === 'both' && 'bg-[rgba(59,130,246,0.05)]',
                )}
              >
                {header.paris}
              </th>
              <th className="p-4 font-extrabold text-[var(--color-primary)]">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {ROWS.map((row) => (
              <tr key={row.typeLabel} className="align-top">
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <ExternalLink href={row.typeHref} className="font-extrabold">
                      {row.typeLabel}
                    </ExternalLink>
                    {row.badge && (
                      <span
                        className="rounded-full px-2.5 py-1 text-[11px] font-extrabold"
                        style={{
                          background:
                            row.badge.color === 'green'
                              ? 'rgba(16,185,129,0.12)'
                              : 'rgba(59,130,246,0.10)',
                          color: row.badge.color === 'green' ? '#065F46' : '#1E3A5F',
                        }}
                      >
                        {row.badge.label}
                      </span>
                    )}
                  </div>
                </td>
                <td
                  className={cn(
                    'p-4',
                    mode === 'villejuif' && 'bg-[rgba(16,185,129,0.06)]',
                    mode === 'both' && 'bg-[rgba(16,185,129,0.03)]',
                  )}
                >
                  <PricePill text={row.villejuif} cheap={row.cheap} />
                </td>
                <td
                  className={cn(
                    'p-4',
                    mode === 'paris' && 'bg-[rgba(59,130,246,0.06)]',
                    mode === 'both' && 'bg-[rgba(59,130,246,0.03)]',
                  )}
                >
                  <PricePill text={row.paris} />
                </td>
                <td className="p-4 text-[var(--color-muted)] leading-relaxed">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: cards */}
      <div className="md:hidden mt-5 grid grid-cols-1 gap-4">
        {ROWS.map((row) => (
          <div key={row.typeLabel} className="htf-card p-5">
            <div className="flex items-center justify-between gap-3">
              <ExternalLink href={row.typeHref} className="font-extrabold">
                {row.typeLabel}
              </ExternalLink>
              {row.badge && (
                <span
                  className="rounded-full px-2.5 py-1 text-[11px] font-extrabold"
                  style={{
                    background:
                      row.badge.color === 'green'
                        ? 'rgba(16,185,129,0.12)'
                        : 'rgba(59,130,246,0.10)',
                    color: row.badge.color === 'green' ? '#065F46' : '#1E3A5F',
                  }}
                >
                  {row.badge.label}
                </span>
              )}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div>
                <div className="text-xs font-extrabold text-[var(--color-muted)]">{header.villejuif}</div>
                <div className="mt-1">
                  <PricePill text={row.villejuif} cheap={row.cheap} />
                </div>
              </div>
              <div>
                <div className="text-xs font-extrabold text-[var(--color-muted)]">{header.paris}</div>
                <div className="mt-1">
                  <PricePill text={row.paris} />
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm text-[var(--color-muted)] leading-relaxed">{row.notes}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

