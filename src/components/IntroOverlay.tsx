'use client';

import { useEffect, useState } from 'react';

export default function IntroOverlay() {
  const [visible, setVisible] = useState(true);

  // Auto-hide the intro after the full 20s animation
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const id = window.setTimeout(() => setVisible(false), 20000);
    return () => window.clearTimeout(id);
  }, []);

  const handleSkip = () => {
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div id="intro-overlay">
      <button id="skip-btn" onClick={handleSkip}>
        Skip intro
      </button>

      <div id="intro-text-container">
        <div id="intro-line-1" className="intro-text-line">
          You arrive in a new country.
        </div>
        <div id="intro-line-2" className="intro-text-line">
          You feel different.
        </div>
        <div id="intro-line-3" className="intro-text-line">
          You are not alone.
        </div>
      </div>

      <div id="shapes-layer">
        <div id="square" className="shape square-anim" />

        <div id="circle-1" className="shape circle circle-anim-1" />
        <div id="circle-2" className="shape circle circle-anim-2" />
        <div id="circle-3" className="shape circle circle-anim-3" />
        <div id="circle-4" className="shape circle circle-anim-4" />

        <div id="htf-zone">
          <div id="htf-zone-label">How To France</div>
          <div id="htf-zone-sub-label">A guide for students abroad</div>
        </div>
      </div>

      <div id="final-text-container">
        <div id="final-main">Welcome to France.</div>
        <div id="final-sub">How To France</div>
      </div>
    </div>
  );
}


