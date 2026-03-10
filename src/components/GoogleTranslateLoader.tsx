'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

export default function GoogleTranslateLoader() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Ensure init function exists before loading the script
    window.googleTranslateElementInit = () => {
      if (!window.google || !window.google.translate) return;

      // eslint-disable-next-line no-new
      new window.google.translate.TranslateElement(
        {
          // Source language: the site content is in English
          pageLanguage: 'en',
          includedLanguages: 'en,ar,es,hi,fr',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element',
      );
    };

    // Avoid injecting the script multiple times
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src*="translate.google.com/translate_a/element.js"]',
    );
    if (existingScript) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src =
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Keep the script / widget alive across route changes; no cleanup
    };
  }, []);

  // Hidden container for Google widget (required but fully hidden via CSS)
  return <div id="google_translate_element" style={{ display: 'none' }} />;
}

