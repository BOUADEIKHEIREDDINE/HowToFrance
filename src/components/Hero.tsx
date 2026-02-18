'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { fadeUp, stagger } from '@/lib/motion';

type HeroProps = {
  title: string;
  subtitle: string;
};

export default function Hero({ title, subtitle }: HeroProps) {
  const reduce = useReducedMotion();

  return (
    <section className="pt-10 md:pt-14">
      <div className="relative overflow-hidden rounded-[calc(var(--radius)+8px)] border border-border bg-card/70 backdrop-blur-xl shadow-sm">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        </div>

        <div className="relative px-6 py-10 md:px-10 md:py-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeUp}
              className={cn(
                'inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-semibold text-mutedForeground',
              )}
            >
              <Sparkles className="h-4 w-4 text-accent" aria-hidden="true" />
              Premium guides + community
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-foreground"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-base md:text-lg text-mutedForeground max-w-2xl"
            >
              {subtitle}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Button asChild variant="accent" size="lg">
                <Link href="#sections">
                  Explore sections <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/forum">
                  Ask a question <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Subtle motion hint (disabled with reduced-motion) */}
          <div className="mt-10 border-t border-border/70 pt-6">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 6 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs text-mutedForeground"
            >
              Trusted shortcuts for visas, housing, wellbeing and community — in one place.
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

