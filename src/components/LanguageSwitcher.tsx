'use client';

import { useCallback, useEffect, useState } from 'react';
import { Languages } from 'lucide-react';
import { cn } from '@/lib/utils';

type LangCode = 'fr' | 'en' | 'ar' | 'es' | 'hi';

type Lang = {
  code: LangCode;
  label: string;
  flag: string;
};

const LANGUAGES: Lang[] = [
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'ar', label: 'AR', flag: '🇸🇦' },
  { code: 'es', label: 'ES', flag: '🇪🇸' },
  { code: 'hi', label: 'HI', flag: '🇮🇳' },
];

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()!.split(';').shift() ?? null;
  return null;
}

function setCookie(name: string, value: string, opts: { path?: string; domain?: string } = {}) {
  if (typeof document === 'undefined') return;
  let cookie = `${name}=${value}`;
  cookie += `; path=${opts.path ?? '/'}`;
  if (opts.domain) {
    cookie += `; domain=${opts.domain}`;
  }
  document.cookie = cookie;
}

function clearGoogleTranslateCookies() {
  const host = typeof window !== 'undefined' ? window.location.hostname : undefined;
  setCookie('googtrans', '', { path: '/' });
  if (host) {
    setCookie('googtrans', '', { path: '/', domain: host });
  }
}

function applyRtlIfNeeded(code: LangCode) {
  if (typeof document === 'undefined') return;
  const html = document.documentElement;

  if (code === 'ar') {
    html.setAttribute('lang', 'ar');
    html.classList.add('translated-ar');
  } else {
    // Default document language when not in Arabic
    html.setAttribute('lang', 'fr');
    html.classList.remove('translated-ar');
  }
}

function changeLanguage(langCode: LangCode) {
  if (typeof window === 'undefined') return;

  // English is the original content (source language)
  if (langCode === 'en') {
    // Restore original content
    try {
      const iframe = document.querySelector<HTMLIFrameElement>('.goog-te-banner-frame');
      if (iframe && iframe.contentDocument) {
        const btn = iframe.contentDocument.querySelector<HTMLButtonElement>(
          '.goog-te-button button',
        );
        if (btn) btn.click();
      }
    } catch {
      // ignore
    }

    clearGoogleTranslateCookies();
    applyRtlIfNeeded('fr');
    window.location.reload();
    return;
  }

  // Translate from English to the selected target language
  const langPair = `/en/${langCode}`;
  const host = window.location.hostname;
  setCookie('googtrans', langPair, { path: '/' });
  setCookie('googtrans', langPair, { path: '/', domain: host });
  applyRtlIfNeeded(langCode);
  window.location.reload();
}

export default function LanguageSwitcher() {
  const [active, setActive] = useState<LangCode>('en');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const cookie = getCookie('googtrans');
    if (cookie && cookie.includes('/')) {
      const parts = cookie.split('/');
      const last = parts[parts.length - 1] as LangCode | undefined;
      if (last && (['fr', 'en', 'ar', 'es', 'hi'] as LangCode[]).includes(last)) {
        setActive(last);
        applyRtlIfNeeded(last);
        return;
      }
    }

    // Default: original English content
    setActive('en');
    applyRtlIfNeeded('fr');
  }, []);

  const onSelect = useCallback(
    (code: LangCode) => {
      if (code === active) return;
      setActive(code);
      changeLanguage(code);
    },
    [active],
  );

  return (
    <div className="hidden sm:flex items-center rounded-full border border-border/70 bg-card/60 p-1 shadow-sm backdrop-blur-xl">
      {LANGUAGES.map((lang) => {
        const isActive = active === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => onSelect(lang.code)}
            className={cn(
              'relative flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors',
              isActive ? 'text-foreground' : 'text-mutedForeground hover:text-foreground',
            )}
            aria-pressed={isActive}
          >
            {isActive && (
              <span className="absolute inset-0 -z-10 rounded-full bg-muted/80" aria-hidden="true" />
            )}
            <span className="text-sm" aria-hidden="true">
              {lang.flag}
            </span>
            <span>{lang.label}</span>
          </button>
        );
      })}
      <span className="px-2 text-mutedForeground">
        <Languages className="h-4 w-4" aria-hidden="true" />
      </span>
    </div>
  );
}

