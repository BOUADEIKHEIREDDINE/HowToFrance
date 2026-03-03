'use client';

import { useEffect, useState } from 'react';

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-5 right-20 z-50 h-12 w-12 rounded-full shadow-lg transition hover:-translate-y-0.5"
      style={{ background: 'var(--color-accent)', color: '#fff' }}
      aria-label="Back to top"
    >
      <span aria-hidden="true" className="text-lg font-black">
        ↑
      </span>
    </button>
  );
}

