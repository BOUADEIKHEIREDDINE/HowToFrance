'use client';

import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

import { cn } from '@/lib/utils';

export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetClose = Dialog.Close;
export const SheetPortal = Dialog.Portal;

export function SheetOverlay({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Dialog.Overlay>) {
  return (
    <Dialog.Overlay
      className={cn(
        'fixed inset-0 z-50 bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out',
        className,
      )}
      {...props}
    />
  );
}

export function SheetContent({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Dialog.Content>) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <Dialog.Content
        className={cn(
          'fixed right-0 top-0 z-50 h-full w-[92vw] max-w-sm border-l border-border bg-card/80 backdrop-blur-xl p-6 shadow-2xl outline-none',
          className,
        )}
        {...props}
      >
        {children}
        <SheetClose
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted/60"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </SheetClose>
      </Dialog.Content>
    </SheetPortal>
  );
}

export function SheetHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mb-4 space-y-1', className)} {...props} />;
}

export function SheetTitle({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Dialog.Title>) {
  return (
    <Dialog.Title className={cn('text-base font-semibold', className)} {...props} />
  );
}

export function SheetDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Dialog.Description>) {
  return (
    <Dialog.Description
      className={cn('text-sm text-mutedForeground', className)}
      {...props}
    />
  );
}

