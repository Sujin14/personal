'use client';

import { forwardRef, useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProposalSequence from '@/components/animations/ProposalSequence';
import { CHAPTERS } from '@/lib/constants/storyData';
import { cn } from '@/lib/utils/cn';
import TypewriterText from '@/components/animations/TypewriterText';

const KADALOLAM_AUDIO = '/audio/kadalolam.mp3';

const VALENTINE_LINE = 'Will you be my Valentine? Not just for this day, but till the last breath of mine.';
const FALLING_WORDS = VALENTINE_LINE.split(/\s+/);

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.1,
        },
    },
};

const wordVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

function FallingValentineLine({ className }: { className?: string }) {
    return (
        <motion.div
            className={cn('flex flex-wrap justify-center gap-x-1.5 gap-y-0.5', className)}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {FALLING_WORDS.map((word, i) => (
                <motion.span
                    key={`${word}-${i}`}
                    variants={wordVariants}
                    className="inline-block text-lg md:text-xl font-playfair text-rose-deep"
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}

/** Same Valentine theme as all other chapters */
const VALENTINE_GRADIENT = 'linear-gradient(135deg, #FFB6C1 0%, #E6E6FA 50%, #FFC0CB 100%)';

const CHAPTER_14_IMAGE = '/images/chapters/chapter14.jpeg';

const Chapter14 = forwardRef<HTMLDivElement, any>((props, ref) => {
    const chapter = CHAPTERS[13];
    const style = props['style'] as any;
    const externalClassName = props['className'] as any;
    const [narrationComplete, setNarrationComplete] = useState(false);
    const [showChapter14Image, setShowChapter14Image] = useState(false);
    const completedRef = useRef(false);
    const kadalolamRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const audio = new Audio(KADALOLAM_AUDIO);
        audio.volume = 0.75;
        kadalolamRef.current = audio;

        const tryPlay = () => {
            audio.play().catch(() => {});
        };

        audio.addEventListener('canplaythrough', tryPlay, { once: true });
        audio.load();
        tryPlay();

        return () => {
            audio.removeEventListener('canplaythrough', tryPlay);
            audio.pause();
            audio.src = '';
            kadalolamRef.current = null;
        };
    }, []);

    const handleChapterInteraction = (e: React.MouseEvent) => {
        if ((e.target as HTMLElement).closest('[data-proposal-sequence]')) return;
        if (kadalolamRef.current?.paused) {
            kadalolamRef.current.play().catch(() => {});
        }
    };

    const handleNarrationComplete = () => {
        if (completedRef.current) return;
        completedRef.current = true;
        setNarrationComplete(true);
    };

    return (
        <div
            ref={ref}
            onClick={handleChapterInteraction}
            className={cn(
                'relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center px-4 py-6',
                externalClassName
            )}
            style={{ ...style, background: VALENTINE_GRADIENT }}
        >
            {showChapter14Image && (
                <motion.div
                    className="absolute inset-0 z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    aria-hidden
                    style={{
                        backgroundImage: `url(${CHAPTER_14_IMAGE})`,
                        backgroundSize: '100% auto',
                        backgroundPosition: 'center top',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
            )}
            <div className="relative z-10 max-w-xl w-full flex flex-col items-center gap-3 flex-1 min-h-0 py-2">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                        scale: [1, 1.2, 1],
                        y: [0, -6, 0],
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 0.4,
                        ease: 'easeInOut',
                    }}
                    className="text-4xl md:text-5xl shrink-0 drop-shadow-lg"
                >
                    💝
                </motion.div>

                {/* Scrollable bordered box for the full poem */}
                <div className="w-full border-2 border-rose-deep/40 rounded-xl bg-white/30 shadow-inner overflow-y-auto flex-1 min-h-0 max-h-[45vh] px-4 py-3">
                    <div className="font-dancing text-sm md:text-base text-gray-800 leading-snug whitespace-pre-line text-center">
                        <TypewriterText
                            text={chapter.narration}
                            startDelay={400}
                            speed={55}
                            className="block text-center"
                            onComplete={handleNarrationComplete}
                        />
                    </div>
                </div>

                {narrationComplete && (
                    <FallingValentineLine className="shrink-0" />
                )}

                <ProposalSequence
                    ready={narrationComplete}
                    onResponseOpen={() => kadalolamRef.current?.pause()}
                    onResponseClose={() => kadalolamRef.current?.play().catch(() => {})}
                    onAccept={() => setShowChapter14Image(true)}
                />

                <div className="mt-2 text-gray-600 text-xs shrink-0">
                    Forever Yours, Sujin
                </div>
            </div>
        </div>
    );
});

Chapter14.displayName = 'Chapter14';

export default Chapter14;
