'use client';

import type { ReactNode } from 'react';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import { fadeUp, stagger } from '@/lib/motion';

type SectionCardsProps = {
  title: string;
  subtitle?: string;
  cards: {
    title: string;
    description: string;
    href: string;
    icon?: ReactNode;
  }[];
};

export default function SectionCards({ title, subtitle, cards }: SectionCardsProps) {
  const reduce = useReducedMotion();

  return (
    <section id="sections" className="py-14">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          {title}
        </h2>
        {subtitle && <p className="text-sm md:text-base text-mutedForeground">{subtitle}</p>}
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
      >
        {cards.map(({ title: cardTitle, description, href, icon }) => (
          <motion.div key={cardTitle} variants={fadeUp}>
            <Link
              href={href}
              className={cn(
                'group block h-full rounded-[calc(var(--radius)+6px)]',
                'focus-visible:outline-none',
              )}
            >
              <div className="relative h-full overflow-hidden rounded-[calc(var(--radius)+6px)] border border-border bg-card/70 shadow-sm backdrop-blur-xl transition-all duration-200 ease-out group-hover:-translate-y-1 group-hover:shadow-lg">
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
                  <div className="absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
                </div>

                <div className="relative p-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-muted/60 text-foreground shadow-sm">
                      {icon}
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold leading-tight">
                        {cardTitle}
                      </h3>
                      <p className="mt-1 text-sm text-mutedForeground">
                        {description}
                      </p>

                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                        Explore
                        <motion.span
                          initial={false}
                          animate={reduce ? undefined : { x: 0 }}
                          className="inline-flex"
                        >
                          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

