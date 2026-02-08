'use client';

import { motion } from 'framer-motion';
import { ReactNode, forwardRef, useEffect, useRef } from 'react';
import TypewriterText from '@/components/animations/TypewriterText';

/** Single Valentine theme for all chapters */
const VALENTINE_GRADIENT = 'linear-gradient(135deg, #FFB6C1 0%, #E6E6FA 50%, #FFC0CB 100%)';

const FADE_IN_INTERVAL_MS = 100;

interface ChapterWrapperProps {
    title: string;
    narration: string | ReactNode;
    image: string;
    colorTheme: {
        primary: string;
        secondary: string;
        accent: string;
    };
    children?: ReactNode;
    /** Rendered in an absolute full-screen layer (no layout space). Use for floating chat etc. */
    overlay?: ReactNode;
    /** Optional content between the image and the narration/children (e.g. typewriter line). */
    contentBetweenImageAndChildren?: ReactNode;
    /** Optional audio to play when chapter is shown, with progressive (fade-in) volume. */
    sound?: string;
    /** Fade-in duration in seconds. Default 4. */
    soundFadeInSeconds?: number;
    /** Target volume 0–1. Default 0.75. */
    soundTargetVolume?: number;
}

const ChapterWrapper = forwardRef<HTMLDivElement, ChapterWrapperProps>(({
    title,
    narration,
    image,
    colorTheme: _colorTheme,
    children,
    overlay,
    contentBetweenImageAndChildren,
    sound,
    soundFadeInSeconds = 4,
    soundTargetVolume = 0.75,
}, ref) => {
    const narrationStr = typeof narration === 'string' ? narration : '';
    const soundFadeRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        if (typeof window === 'undefined' || !sound) return;
        const audio = new Audio(sound);
        audio.volume = 0;
        audio.play().catch(() => {});

        const step = soundTargetVolume / ((soundFadeInSeconds * 1000) / FADE_IN_INTERVAL_MS);
        let current = 0;
        soundFadeRef.current = setInterval(() => {
            current = Math.min(current + step, soundTargetVolume);
            audio.volume = current;
            if (current >= soundTargetVolume && soundFadeRef.current) {
                clearInterval(soundFadeRef.current);
                soundFadeRef.current = null;
            }
        }, FADE_IN_INTERVAL_MS);

        return () => {
            if (soundFadeRef.current) clearInterval(soundFadeRef.current);
            soundFadeRef.current = null;
            audio.pause();
            audio.src = '';
        };
    }, [sound, soundFadeInSeconds, soundTargetVolume]);

    return (
        <section
            ref={ref}
            className="h-screen flex flex-col items-center justify-center px-4 py-6 overflow-hidden relative"
            style={{ background: VALENTINE_GRADIENT }}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center flex-1 min-h-0"
            >
                <h2 className="text-2xl md:text-3xl font-playfair text-center mb-3 text-gray-800 shrink-0">
                    <TypewriterText text={title} startDelay={200} speed={95} cursor={false} />
                </h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="relative w-full max-h-[42vh] mb-4 rounded-xl overflow-hidden shadow-xl bg-white/20 shrink-0 flex-shrink-0"
                >
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-contain object-center"
                    />
                </motion.div>

                {contentBetweenImageAndChildren && (
                    <div className="mb-3 shrink-0 w-full flex justify-center">
                        {contentBetweenImageAndChildren}
                    </div>
                )}

                <div className="text-sm md:text-base font-lato text-center text-gray-700 leading-snug whitespace-pre-line overflow-hidden flex-1 min-h-0 flex flex-col justify-center">
                    <TypewriterText
                        text={narrationStr}
                        startDelay={600}
                        speed={58}
                        className="block text-center"
                    />
                </div>

                {children && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                        className="mt-4 shrink-0"
                    >
                        {children}
                    </motion.div>
                )}
            </motion.div>
            {overlay && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {overlay}
                </div>
            )}
        </section>
    );
});

ChapterWrapper.displayName = 'ChapterWrapper';

export default ChapterWrapper;
