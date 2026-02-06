'use client';

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils/cn';

interface TypewriterTextProps {
  text: string;
  /** Delay in ms before starting */
  startDelay?: number;
  /** Ms per character (lower = faster) */
  speed?: number;
  /** Show blinking cursor at end */
  cursor?: boolean;
  /** Restart when text changes (e.g. new chapter) */
  key?: string;
  className?: string;
  /** Callback when typing finishes */
  onComplete?: () => void;
}

export default function TypewriterText({
  text,
  startDelay = 300,
  speed = 35,
  cursor = true,
  className,
  onComplete,
}: TypewriterTextProps) {
  const [visibleLength, setVisibleLength] = useState(0);
  const [started, setStarted] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    setVisibleLength(0);
    setStarted(false);
  }, [text]);

  useEffect(() => {
    if (!text) return;

    const startTimer = setTimeout(() => {
      setStarted(true);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [text, startDelay]);

  useEffect(() => {
    if (!started || !text) return;

    if (visibleLength >= text.length) {
      onCompleteRef.current?.();
      return;
    }

    const timer = setTimeout(() => {
      setVisibleLength((prev) => Math.min(prev + 1, text.length));
    }, speed);

    return () => clearTimeout(timer);
  }, [started, text, visibleLength, speed]);

  const visibleText = text.slice(0, visibleLength);

  return (
    <span className={cn('inline', className)}>
      {visibleText}
      {cursor && visibleLength < text.length && (
        <span
          className="inline-block w-0.5 h-[1em] align-baseline bg-rose-deep ml-0.5 animate-pulse"
          aria-hidden
        />
      )}
    </span>
  );
}
