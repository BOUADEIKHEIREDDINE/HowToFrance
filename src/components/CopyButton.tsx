'use client';

import { useState } from 'react';

type CopyButtonProps = {
  text: string;
  label?: string;
  className?: string;
};

export default function CopyButton({ text, label = 'Copy address', className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      // no-op (clipboard may be blocked)
    }
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      className={
        className ??
        'htf-btn htf-btn-secondary px-3 py-2 text-sm font-bold'
      }
      aria-label={label}
    >
      {copied ? 'Copied!' : label}
    </button>
  );
}

