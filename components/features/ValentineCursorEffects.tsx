'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MAX_TRAILS = 10;
const SPAWN_THROTTLE_MS = 100;
const VALENTINE_SYMBOLS = ['❤', '💕', '✨', '•'] as const;
const COLORS = ['#C41E3A', '#FFB6C1', '#FFD700', '#E6E6FA', '#FFFAFA'] as const;

type TrailItem = {
  id: number;
  x: number;
  y: number;
  symbol: (typeof VALENTINE_SYMBOLS)[number];
  color: string;
  size: number;
  driftX: number;
  floatY: number;
  duration: number;
};

function HeartIcon({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

export default function ValentineCursorEffects() {
  const [trails, setTrails] = useState<TrailItem[]>([]);
  const idRef = useRef(0);
  const lastSpawnRef = useRef(0);
  const throttleRef = useRef(false);

  const addTrail = useCallback((clientX: number, clientY: number) => {
    const now = Date.now();
    if (throttleRef.current || now - lastSpawnRef.current < SPAWN_THROTTLE_MS) return;
    lastSpawnRef.current = now;

    setTrails((prev) => {
      const next = [
        ...prev.slice(-(MAX_TRAILS - 1)),
        {
          id: ++idRef.current,
          x: clientX + (Math.random() * 24 - 12),
          y: clientY + (Math.random() * 24 - 12),
          symbol: VALENTINE_SYMBOLS[Math.floor(Math.random() * VALENTINE_SYMBOLS.length)],
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          size: 6 + Math.random() * 5,
          driftX: (Math.random() - 0.5) * 24,
          floatY: -24 - Math.random() * 10,
          duration: 1.2 + Math.random() * 0.8,
        },
      ];
      return next;
    });
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => addTrail(e.clientX, e.clientY);
    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, [addTrail]);

  const removeTrail = useCallback((id: number) => {
    setTrails((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden"
      aria-hidden
    >
      <AnimatePresence>
        {trails.map((t) => (
          <motion.div
            key={t.id}
            className="absolute will-change-transform"
            style={{
              left: t.x,
              top: t.y,
              marginLeft: -t.size / 2,
              marginTop: -t.size / 2,
              color: t.color,
              fontSize: t.size,
              filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.25))',
            }}
            initial={{ opacity: 0, scale: 0.3, y: 0, x: 0 }}
            animate={{
              opacity: [0, 0.9, 0],
              scale: [0.4, 1, 0.5],
              y: t.floatY,
              x: t.driftX,
            }}
            transition={{
              duration: t.duration,
              ease: 'easeOut',
            }}
            onAnimationComplete={() => removeTrail(t.id)}
          >
            {t.symbol === '❤' ? (
              <HeartIcon
                className="w-full h-full"
                style={{ width: `${t.size}px`, height: `${t.size}px` }}
              />
            ) : (
              <span className="block leading-none" style={{ fontSize: t.size }}>
                {t.symbol}
              </span>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
