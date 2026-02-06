'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from '@/components/features/Loader';
import Navigation from '@/components/features/Navigation';
import ValentineCursorEffects from '@/components/features/ValentineCursorEffects';
import { CHAPTERS } from '@/lib/constants/storyData';
// Import all chapters explicitly
import Chapter01 from '@/components/chapters/Chapter01';
import Chapter02 from '@/components/chapters/Chapter02';
import Chapter03 from '@/components/chapters/Chapter03';
import Chapter04 from '@/components/chapters/Chapter04';
import Chapter05 from '@/components/chapters/Chapter05';
import Chapter06 from '@/components/chapters/Chapter06';
import Chapter07 from '@/components/chapters/Chapter07';
import Chapter08 from '@/components/chapters/Chapter08';
import Chapter09 from '@/components/chapters/Chapter09';
import Chapter10 from '@/components/chapters/Chapter10';
import Chapter11 from '@/components/chapters/Chapter11';
import Chapter12 from '@/components/chapters/Chapter12';
import Chapter13 from '@/components/chapters/Chapter13';
import Chapter14 from '@/components/chapters/Chapter14';

const CurrentChapterComponent = ({ index }: { index: number }) => {
  switch (index) {
    case 0: return <Chapter01 />;
    case 1: return <Chapter02 />;
    case 2: return <Chapter03 />;
    case 3: return <Chapter04 />;
    case 4: return <Chapter05 />;
    case 5: return <Chapter06 />;
    case 6: return <Chapter07 />;
    case 7: return <Chapter08 />;
    case 8: return <Chapter09 />;
    case 9: return <Chapter10 />;
    case 10: return <Chapter11 />;
    case 11: return <Chapter12 />;
    case 12: return <Chapter13 />;
    case 13: return <Chapter14 />;
    default: return <Chapter01 />;
  }
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        if (activeChapter < CHAPTERS.length - 1) {
          e.preventDefault();
          setActiveChapter((prev) => prev + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        if (activeChapter > 0) {
          e.preventDefault();
          setActiveChapter((prev) => prev - 1);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeChapter]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="relative h-screen overflow-hidden bg-gradient-to-br from-rose-soft via-lavender to-blush">
      <ValentineCursorEffects />
      <Navigation
        totalChapters={CHAPTERS.length}
        activeChapter={activeChapter}
        onNavigate={setActiveChapter}
      />

      <div className="relative z-10 h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeChapter}
            className="h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CurrentChapterComponent index={activeChapter} />
          </motion.div>
        </AnimatePresence>
      </div>

      {activeChapter < CHAPTERS.length - 1 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 text-rose-deep/90 text-sm animate-bounce">
          ↓ Next: arrow key or dot
        </div>
      )}
    </main>
  );
}
