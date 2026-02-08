'use client';

import { forwardRef, useState, useEffect } from 'react';
import ChapterWrapper from './ChapterWrapper';
import { CHAPTERS } from '@/lib/constants/storyData';
import { motion } from 'framer-motion';

const CHAT_MESSAGES: { text: string; isMe: boolean }[] = [
    { text: 'ooiii', isMe: true },
    { text: 'hi', isMe: false },
    { text: 'how was your day', isMe: true },
    { text: 'good', isMe: false },
    { text: 'had dinner?', isMe: true },
    { text: 'kaichu neeyo', isMe: false },
    { text: 'I had', isMe: true },
    { text: 'ahda', isMe: false },
];

const FADE_IN_DURATION = 0.9;
const HOLD_BEFORE_UP = 0.5;
const FLOAT_UP_DURATION = 7;
const TOTAL_DURATION = FADE_IN_DURATION + HOLD_BEFORE_UP + FLOAT_UP_DURATION;
const STAGGER = FADE_IN_DURATION + HOLD_BEFORE_UP;
const TYPING_INDICATOR_DELAY_MS =
    ((CHAT_MESSAGES.length - 1) * STAGGER + TOTAL_DURATION + 0.5) * 1000;

function TypingDots({ isMe }: { isMe: boolean }) {
    return (
        <div className="flex items-center gap-1.5 px-4 py-3">
            {[0, 1, 2].map((j) => (
                <motion.span
                    key={j}
                    className={`h-2 w-2 rounded-full ${
                        isMe ? 'bg-white/90' : 'bg-gray-500'
                    }`}
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: j * 0.2,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    );
}

const Chapter12 = forwardRef<HTMLDivElement, any>((props, ref) => {
    const chapter = CHAPTERS[11];
    const [showTyping, setShowTyping] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setShowTyping(true), TYPING_INDICATOR_DELAY_MS);
        return () => clearTimeout(t);
    }, []);

    return (
        <ChapterWrapper
            ref={ref}
            {...props}
            title={chapter.title}
            narration={chapter.narration}
            image={chapter.image}
            colorTheme={chapter.colorTheme}
            overlay={
                <div className="w-full h-full relative overflow-hidden">
                    {CHAT_MESSAGES.map((msg, i) => (
                        <motion.div
                            key={i}
                            className={`absolute left-0 right-0 bottom-6 flex px-6 md:px-12 ${msg.isMe ? 'justify-end pl-8 md:pl-16' : 'justify-start pr-8 md:pr-16'}`}
                            style={{ zIndex: i }}
                            initial={{ opacity: 0, y: 48 }}
                            animate={{
                                opacity: [0, 1, 1, 0],
                                y: [48, 0, 0, '-100vh'],
                            }}
                            transition={{
                                duration: TOTAL_DURATION,
                                times: [0, FADE_IN_DURATION / TOTAL_DURATION, (FADE_IN_DURATION + HOLD_BEFORE_UP) / TOTAL_DURATION, 1],
                                delay: i * STAGGER,
                                ease: 'easeOut',
                            }}
                        >
                            <span
                                className={`inline-block max-w-[75%] md:max-w-[65%] px-4 py-3 rounded-2xl text-sm md:text-base font-lato shadow-xl ${
                                    msg.isMe
                                        ? 'rounded-br-md bg-gradient-to-br from-indigo-500 to-purple-600 text-white'
                                        : 'rounded-bl-md bg-white text-gray-800 border border-gray-100 shadow-md'
                                }`}
                            >
                                {msg.text}
                            </span>
                        </motion.div>
                    ))}
                    {showTyping && (
                        <>
                            <motion.div
                                className="absolute left-0 right-0 bottom-6 flex px-6 md:px-12 justify-start pr-8 md:pr-16"
                                style={{ zIndex: CHAT_MESSAGES.length }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <span className="inline-block rounded-2xl rounded-bl-md bg-white text-gray-800 border border-gray-100 shadow-md">
                                    <TypingDots isMe={false} />
                                </span>
                            </motion.div>
                            <motion.div
                                className="absolute left-0 right-0 bottom-6 flex px-6 md:px-12 justify-end pl-8 md:pl-16"
                                style={{ zIndex: CHAT_MESSAGES.length + 1 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.15 }}
                            >
                                <span className="inline-block rounded-2xl rounded-br-md bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-xl">
                                    <TypingDots isMe={true} />
                                </span>
                            </motion.div>
                        </>
                    )}
                </div>
            }
        />
    );
});

Chapter12.displayName = 'Chapter12';

export default Chapter12;
