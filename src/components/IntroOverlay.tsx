'use client';

import { useEffect, useRef, useState } from 'react';

type IntroPhase =
  | 'idle'
  | 'community_in'
  | 'community_text'
  | 'square_in'
  | 'square_hover'
  | 'text_you'
  | 'text_steps'
  | 'htf_in'
  | 'morphing'
  | 'circle_to_community'
  | 'final_text'
  | 'finished';

// Multiplicateur global pour une intro plus lente / cinématique
const SPEED = 2.0;

// Durées (en ms) – valeurs “de base” * SPEED
const DURATIONS = {
  initialBlank: 2000 * SPEED, // cible ~4s
  communityGather: 1400 * SPEED, // cible ~2.8s
  textFade: 450, // fade in/out
  textCommunity: 1600 * SPEED, // cible ~3.2s
  textYou: 1500 * SPEED, // cible ~3.0s
  textSteps: 1750 * SPEED, // cible ~3.5s
  betweenTexts: 300, // petit gap entre textes
  squareIn: 1200 * SPEED, // cible ~2.4s
  htfIn: 900 * SPEED, // cible ~1.8s
  squareToHtf: 1100 * SPEED, // cible ~2.2s
  squareInBlock: 5000, // 5s obligatoires dans le bloc HTF
  morphDelay: 1000, // Délai avant que le carré commence à se transformer en cercle (en ms)
  morphDuration: 2500, // Durée du morph carré->cercle (en ms). Place-le dans les 5s du bloc HTF.
  circleExit: 950 * SPEED, // cible ~1.9s
  finalTextVisible: 1900 * SPEED, // cible ~3.8s
  overlayFadeOut: 1000,
  skipFadeOut: 350,
} as const;

// ============================================
// CONFIGURATION DES POSITIONS DU CARRÉ
// ============================================
// Modifie ces coordonnées pour contrôler tous les mouvements du carré
// Format: { x: 'XXvw', y: 'YY%' } où x = position horizontale, y = position verticale
const SQUARE_POSITIONS = {
  // Position initiale (hors écran à gauche)
  initial: { x: '-120vw', y: '-50%' },
  
  // Position après entrée (hover avant les textes)
  entered: { x: '-30vw', y: '-50%' },
  
  // Position avant d'entrer dans le bloc HTF
  beforeHtf: { x: '-22vw', y: '-50%' },
  
  // Position au début de la traversée du bloc HTF (bord gauche)
  htfStart: { x: '-22vw', y: '-50%' },
  
  // Position à la fin de la traversée du bloc HTF (bord droit)
  htfEnd: { x: '8vw', y: '-50%' },
  
  // Position finale dans la communauté (statique, pas de mouvement après)
  final: { x: '15vw', y: '-56%' },
} as const;

export default function IntroOverlay() {
  const [visible, setVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [phase, setPhase] = useState<IntroPhase>('idle');
  const [currentMessage, setCurrentMessage] = useState<string>('');
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [showCommunity, setShowCommunity] = useState(false);
  const [communityHover, setCommunityHover] = useState(false);
  const [communityPulse, setCommunityPulse] = useState(false);
  const [squareEntered, setSquareEntered] = useState(false);
  const [squareAtHtf, setSquareAtHtf] = useState(false);
  const [squareInBlock, setSquareInBlock] = useState(false);
  const [squareMorphed, setSquareMorphed] = useState(false);
  const [squareAtCommunity, setSquareAtCommunity] = useState(false);
  const [htfVisible, setHtfVisible] = useState(false);
  
  // Position actuelle du carré (contrôlée par coordonnées)
  const [squarePosition, setSquarePosition] = useState<{ x: string; y: string }>(SQUARE_POSITIONS.initial);
  const [squareBorderRadius, setSquareBorderRadius] = useState<string>('8px');
  const [squareOpacity, setSquareOpacity] = useState<number>(0);

  const timeoutsRef = useRef<number[]>([]);
  const skippedRef = useRef(false);

  // Helper “timeline” basé sur des Promises, pour éviter les cascades de setTimeout
  const wait = (ms: number) =>
    new Promise<void>((resolve) => {
      const id = window.setTimeout(() => {
        if (skippedRef.current) return;
        resolve();
      }, ms);
      timeoutsRef.current.push(id);
    });

  // Block scroll while overlay is visible
  useEffect(() => {
    if (!visible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  // Main timeline
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setVisible(false);
      setPhase('finished');
      return;
    }

    let cancelled = false;
    skippedRef.current = false;

    const runTimeline = async () => {
      setVisible(true);
      setPhase('idle');
      // Initialiser la position du carré
      setSquarePosition(SQUARE_POSITIONS.initial);
      setSquareOpacity(0);
      setSquareBorderRadius('8px');

      // 0) Écran bleu vide
      await wait(DURATIONS.initialBlank);
      if (cancelled || skippedRef.current) return;

      // 1) Cercles: rassemblement lent (visuel via CSS, on lance tout de suite)
      setShowCommunity(true);
      setPhase('community_in');

      // 2) Texte A: "This is the french community" – apparaît vite après les cercles
      setIsTextVisible(false);
      await wait(DURATIONS.textFade);
      if (cancelled || skippedRef.current) return;

      setCurrentMessage('This is the french community');
      setIsTextVisible(true);
      setPhase('community_text');
      await wait(DURATIONS.textCommunity);
      if (cancelled || skippedRef.current) return;

      // Le hover subtil de la communauté démarre après que le texte A ait été visible
      setCommunityHover(true);

      setIsTextVisible(false);
      await wait(DURATIONS.betweenTexts);
      if (cancelled || skippedRef.current) return;

      // 3) Carré: entrée lente depuis la gauche
      setSquareEntered(true);
      setSquarePosition(SQUARE_POSITIONS.entered);
      setSquareOpacity(1);
      setPhase('square_in');
      await wait(DURATIONS.squareIn);
      if (cancelled || skippedRef.current) return;

      // Hover du carré
      setPhase('square_hover');

      // 4) Texte B: "This is you"
      setCurrentMessage('This is you');
      setIsTextVisible(true);
      setPhase('text_you');
      await wait(DURATIONS.textYou);
      if (cancelled || skippedRef.current) return;

      setIsTextVisible(false);
      await wait(DURATIONS.betweenTexts);
      if (cancelled || skippedRef.current) return;

      // 5) Texte C: "if you want to integrate this society, there are many steps to take."
      setCurrentMessage(
        'if you want to integrate this society, there are many steps to take.',
      );
      setIsTextVisible(true);
      setPhase('text_steps');
      await wait(DURATIONS.textSteps);
      if (cancelled || skippedRef.current) return;

      setIsTextVisible(false);
      await wait(DURATIONS.betweenTexts);
      if (cancelled || skippedRef.current) return;

      // 6) Bloc HTF + texte D
      setHtfVisible(true);
      await wait(DURATIONS.htfIn);
      if (cancelled || skippedRef.current) return;

      setCurrentMessage('And we will help you take these steps');
      setIsTextVisible(true);
      setPhase('htf_in');

      // Le carré commence à se diriger vers le bloc HTF
      // On déclenche immédiatement la phase suivante pour un mouvement continu,
      // sans pause intermédiaire visible.
      setSquareAtHtf(true);
      setSquarePosition(SQUARE_POSITIONS.beforeHtf);

      // 7) Carré DANS le bloc HTF pendant 5s (traversée simple, pas de morphing)
      setSquareInBlock(true);
      setSquarePosition(SQUARE_POSITIONS.htfStart);
      setPhase('morphing');
      await wait(DURATIONS.morphDelay);
      if (cancelled || skippedRef.current) return;

      setSquareMorphed(true);
      // Le carré reste un carré (pas de morphing en cercle)
      setSquarePosition(SQUARE_POSITIONS.htfEnd);
      await wait(DURATIONS.squareInBlock - DURATIONS.morphDelay);
      if (cancelled || skippedRef.current) return;

      // 8) Sortie du nouveau cercle vers la communauté + disparition du texte D
      setIsTextVisible(false);
      setPhase('circle_to_community');
      setSquarePosition(SQUARE_POSITIONS.final);
      await wait(DURATIONS.circleExit);
      if (cancelled || skippedRef.current) return;
      setSquareAtCommunity(true);

      // Petit pulse de la communauté quand le nouveau cercle rejoint
      setCommunityPulse(true);
      await wait(400);
      setCommunityPulse(false);
      if (cancelled || skippedRef.current) return;

      // 9) Texte final italic bottom-center
      setCurrentMessage('Welcome to How To France');
      setIsTextVisible(true);
      setPhase('final_text');
      await wait(DURATIONS.finalTextVisible);
      if (cancelled || skippedRef.current) return;

      // 10) Fade-out overlay
      setIsFadingOut(true);
      await wait(DURATIONS.overlayFadeOut);
      if (cancelled || skippedRef.current) return;

      setVisible(false);
      setPhase('finished');
    };

    runTimeline();

    return () => {
      skippedRef.current = true;
      cancelled = true;
      timeoutsRef.current.forEach((id) => window.clearTimeout(id));
      timeoutsRef.current = [];
    };
  }, []);

  const handleSkip = () => {
    skippedRef.current = true;
    timeoutsRef.current.forEach((id) => window.clearTimeout(id));
    timeoutsRef.current = [];
    setIsFadingOut(true);
    window.setTimeout(() => {
      setVisible(false);
      setPhase('finished');
    }, DURATIONS.skipFadeOut);
  };

  if (!visible) {
    return null;
  }

  const overlayClassName = [
    'intro-overlay-root',
    isFadingOut ? 'intro-fade-out' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div id="intro-overlay" className={overlayClassName}>
      <button
        id="skip-btn"
        type="button"
        onClick={handleSkip}
        aria-label="Skip intro and go to the site"
      >
        Skip intro
      </button>

      {/* Shapes layer */}
      <div
        id="shapes-layer"
        className={[
          showCommunity ? 'community-visible' : '',
          communityHover ? 'community-hover' : '',
          communityPulse ? 'community-pulse' : '',
          squareEntered ? 'square-entered' : '',
          squareAtHtf ? 'square-at-htf' : '',
          squareInBlock ? 'square-in-block' : '',
          squareMorphed ? 'square-morphed' : '',
          phase === 'circle_to_community' ? 'square-to-community' : '',
          squareAtCommunity ? 'square-at-community' : '',
          phase === 'square_hover' || phase === 'text_you' || phase === 'text_steps'
            ? 'square-hovering'
            : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {/* Community cluster (right side) - mixed shapes */}
        <div id="community">
          {/* Circle */}
          <div
            id="circle-1"
            className="shape community-circle community-circle--circle circle-1"
          />
          {/* Pentagon (was square) */}
          <div
            id="circle-2"
            className="shape community-circle community-circle--pentagon circle-2"
          />
          {/* Triangle */}
          <div
            id="circle-3"
            className="shape community-circle community-circle--triangle circle-3"
          />
          {/* Hexagon (second circle) */}
          <div
            id="circle-4"
            className="shape community-circle community-circle--hexagon circle-4"
          />
        </div>

        {/* The square that becomes the circle - contrôlé par coordonnées */}
        <div
          id="square"
          className="shape square"
          style={{
            transform: `translate3d(${squarePosition.x}, ${squarePosition.y}, 0)`,
            opacity: squareOpacity,
            borderRadius: squareBorderRadius,
            transition: phase === 'morphing' || phase === 'circle_to_community'
              ? `transform ${DURATIONS.squareInBlock}ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity 0.7s ease-out`
              : phase === 'square_in'
              ? 'transform 2.4s cubic-bezier(0.22, 0.61, 0.36, 1), opacity 0.7s ease-out'
              : 'transform 2.4s cubic-bezier(0.22, 0.61, 0.36, 1), opacity 0.7s ease-out',
          }}
        />

        {/* HTF block */}
        <div id="htf-zone" className={htfVisible ? 'htf-visible' : ''}>
          <div id="htf-zone-label">HTF</div>
          <div id="htf-zone-sub-label">How To France</div>
        </div>
      </div>

      {/* Bottom-center text layer, rendu en dernier pour être au-dessus de tout */}
      <div
        aria-live="polite"
        style={{
          position: 'fixed',
          inset: 0,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingBottom: '7vh',
          pointerEvents: 'none',
          zIndex: 2147483647,
        }}
      >
        <div
          style={{
            fontSize: 'clamp(1.15rem, 2.2vw, 1.7rem)',
            fontWeight: 500,
            padding: '0 8vw',
            maxWidth: '70ch',
            color: '#ffffff',
            textShadow:
              '0 2px 14px rgba(0, 0, 0, 0.55), 0 0 26px rgba(0, 180, 255, 0.18)',
            letterSpacing: '0.01em',
            opacity: isFadingOut ? 0 : isTextVisible ? 1 : 0,
            transition: 'opacity 0.45s ease-in-out',
            textAlign: 'center',
          }}
        >
          {currentMessage}
        </div>
      </div>
    </div>
  );
}

