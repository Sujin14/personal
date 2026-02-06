'use client';

import { forwardRef, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ProposalSequence from '@/components/animations/ProposalSequence';
import { CHAPTERS } from '@/lib/constants/storyData';
import { cn } from '@/lib/utils/cn';
import TypewriterText from '@/components/animations/TypewriterText';

/** Same Valentine theme as all other chapters */
const VALENTINE_GRADIENT = 'linear-gradient(135deg, #FFB6C1 0%, #E6E6FA 50%, #FFC0CB 100%)';

const Chapter14 = forwardRef<HTMLDivElement, any>((props, ref) => {
    const chapter = CHAPTERS[13];
    const style = props['style'] as any;
    const externalClassName = props['className'] as any;
    const [narrationComplete, setNarrationComplete] = useState(false);
    const completedRef = useRef(false);

    const handleNarrationComplete = () => {
        if (completedRef.current) return;
        completedRef.current = true;
        setNarrationComplete(true);
    };

    return (
        <div
            ref={ref}
            className={cn(
                'relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center px-4 py-6',
                externalClassName
            )}
            style={{ ...style, background: VALENTINE_GRADIENT }}
        >
            <div className="max-w-xl w-full flex flex-col items-center gap-3 flex-1 min-h-0 py-2">
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

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-xl md:text-2xl font-playfair text-rose-deep shrink-0"
                >
                    Will you be my Valentine?
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-sm font-lato text-gray-700 shrink-0"
                >
                    Not just for this day,
                    <br />
                    But till the last breath of mine.
                </motion.p>

                <ProposalSequence ready={narrationComplete} />

                <div className="mt-2 text-gray-600 text-xs shrink-0">
                    Forever Yours, Sujin
                </div>
            </div>
        </div>
    );
});

Chapter14.displayName = 'Chapter14';

export default Chapter14;
