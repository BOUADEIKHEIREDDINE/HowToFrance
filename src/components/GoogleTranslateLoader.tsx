'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (options: unknown, elementId: string) => void;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

export default function GoogleTranslateLoader() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // If Google Translate is already loaded, do nothing
    if (window.google?.translate?.TranslateElement) {
      return;
    }

    // Define the callback required by Google Translate script
    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return;

      // We keep the widget hidden; language is controlled via cookies + buttons
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          autoDisplay: false,
        },
        'google_translate_element',
      );
    };

    const scriptId = 'google-translate-loader-script';
    if (document.getElementById(scriptId)) return;

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Hidden container required by Google Translate. We don't show the default UI.
  return <div id="google_translate_element" style={{ display: 'none' }} />;
}

