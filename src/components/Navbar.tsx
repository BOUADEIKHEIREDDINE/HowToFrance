'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useMemo } from 'react';

import Logo from './Logo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import LanguageSwitcher from '@/components/LanguageSwitcher';

type NavItem = { label: string; href: string };

export default function Navbar() {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  const navItems = useMemo<NavItem[]>(
    () => [
      { label: 'Home', href: '/' },
      { label: 'Legal Stuff', href: '/legal' },
      { label: 'Housing', href: '/housing' },
      { label: 'Wellbeing', href: '/wellbeing' },
      { label: 'Associations', href: '/associations' },
      { label: 'FAQ', href: '/forum' },
    ],
    [],
  );

  return (
    <nav className="sticky top-0 z-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background/90 to-transparent" />
      <div className="border-b border-border/70 bg-white/70 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Logo />
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="relative flex items-center rounded-full border border-border/70 bg-card/60 p-1 shadow-sm backdrop-blur-xl">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'group relative z-10 rounded-full px-4 py-2 text-sm font-medium transition-colors',
                      active
                        ? 'text-foreground font-semibold'
                        : 'text-mutedForeground hover:text-foreground',
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-muted/80"
                        transition={
                          reduce
                            ? { duration: 0 }
                            : { type: 'spring', stiffness: 420, damping: 36 }
                        }
                      />
                    )}
                    <span className="relative">
                      {item.label}
                      <span
                        className={cn(
                          'absolute -bottom-1 left-0 right-0 origin-left bg-accent transition-transform duration-200',
                          active ? 'h-0.5 scale-x-100' : 'h-px scale-x-0 group-hover:scale-x-100',
                        )}
                      />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="lg:hidden rounded-full"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>

                <div className="mt-4 grid gap-2">
                  {navItems.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          'rounded-2xl border border-border/70 bg-card/60 px-4 py-3 text-sm font-medium backdrop-blur-xl',
                          active ? 'text-foreground' : 'text-mutedForeground hover:text-foreground',
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>

                {/* We could later add a mobile-friendly language switcher here if needed */}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
