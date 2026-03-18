'use client';

import Link from 'next/link';
import { useState } from 'react';
import { LifeBuoy, MessageCircle, BookOpen, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export default function FloatingHelp() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            type="button"
            className="group relative flex items-center gap-3 rounded-full border border-border bg-card/70 px-4 py-3 shadow-lg backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            aria-label="Open help center"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primaryForeground shadow-sm">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </span>

            <span className="hidden sm:block text-sm font-semibold">
              Need help?
            </span>

            {/* Tooltip-like expand on hover (desktop) */}
            <AnimatePresence>
              {!open && (
                <motion.span
                  initial={reduce ? false : { opacity: 0, x: 6 }}
                  animate={reduce ? undefined : { opacity: 1, x: 0 }}
                  exit={reduce ? undefined : { opacity: 0, x: 6 }}
                  transition={{ duration: 0.18 }}
                  className="pointer-events-none absolute -top-10 right-0 hidden sm:inline-flex items-center rounded-full border border-border bg-card/90 px-3 py-1 text-xs text-mutedForeground shadow-sm backdrop-blur-xl"
                >
                  Help Center
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>Help Center & FAQ</SheetTitle>
          </SheetHeader>

          <div className="mt-4 space-y-3">
            <div className="rounded-[var(--radius)] border border-border bg-muted/40 p-4">
              <div className="text-sm font-semibold">Quick topics</div>
              <div className="mt-3 grid gap-2">
                <Button asChild variant="accent">
                  <Link href="/forum" onClick={() => setOpen(false)}>
                    <BookOpen className="h-4 w-4" />
                    Open FAQ
                    <ArrowRight className="h-4 w-4 ml-auto" />
                  </Link>
                </Button>

                <Button variant="secondary" disabled>
                  <MessageCircle className="h-4 w-4" />
                  Ask a question (soon)
                </Button>

                <Button variant="secondary" disabled>
                  <LifeBuoy className="h-4 w-4" />
                  Contact support (soon)
                </Button>
              </div>
            </div>

            <div className="text-xs text-mutedForeground">
              Tip: start with the FAQ — it covers visas, housing, health, budget, and integration in Villejuif & Paris.
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

