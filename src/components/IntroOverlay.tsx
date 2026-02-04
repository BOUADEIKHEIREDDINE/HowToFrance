'use client';

import { useEffect, useState } from 'react';

const INTRO_DURATION_MS = 20000;

export default function IntroOverlay() {
  const [visible, setVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [currentMessage, setCurrentMessage] = useState<string>('');
  const [isTextVisible, setIsTextVisible] = useState(false);

  // Text timeline + smooth fade transitions and overlay fade-out
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const timeouts: number[] = [];
    const schedule = (fn: () => void, delay: number) => {
      const id = window.setTimeout(fn, delay);
      timeouts.push(id);
    };

    const changeText = (text: string, atMs: number) => {
      schedule(() => {
        setIsTextVisible(false);
        schedule(() => {
          setCurrentMessage(text);
          setIsTextVisible(true);
        }, 250);
      }, atMs);
    };

    // 0–3s: empty blue screen (no text)
    changeText('You arrive in a new country.', 3000);
    changeText('You feel different.', 7000);
    changeText("And that's okay.", 11000);
    changeText('You are not alone.', 14000);
    changeText('We help you integrate.', 17000);

    // Start fading out overlay near the end, then hide completely
    schedule(() => setIsFadingOut(true), INTRO_DURATION_MS - 1000);
    schedule(() => setVisible(false), INTRO_DURATION_MS);

    return () => {
      timeouts.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  const handleSkip = () => {
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      id="intro-overlay"
      className={isFadingOut ? 'intro-fade-out' : ''}
    >
      <button
        id="skip-btn"
        type="button"
        onClick={handleSkip}
        aria-label="Skip intro and go to the site"
      >
        Skip intro
      </button>

      <div id="intro-text-container" aria-live="polite">
        <div
          id="intro-main-text"
          className={isTextVisible ? 'intro-text-visible' : ''}
        >
          {currentMessage}
        </div>
      </div>

      <div id="shapes-layer">
        <div id="square" className="shape square-anim" />

        <div id="circle-1" className="shape circle circle-anim-1" />
        <div id="circle-2" className="shape circle circle-anim-2" />
        <div id="circle-3" className="shape circle circle-anim-3" />
        <div id="circle-4" className="shape circle circle-anim-4" />

        <div id="htf-zone">
          <div id="htf-zone-label">HTF</div>
          <div id="htf-zone-sub-label">How To France</div>
        </div>
      </div>

      <div id="final-text-container">
        <div id="final-main">Welcome to France.</div>
        <div id="final-sub">How To France</div>
      </div>
    </div>
  );
}


