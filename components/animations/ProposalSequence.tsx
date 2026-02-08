'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const ACCEPTANCE_AUDIO = '/audio/acceptance.mp3';
const REJECT_AUDIO = '/audio/Kannukulla.mp3';
const THINK_AUDIO = '/audio/ninakku.mp3';

type ResponseChoice = null | 'accept' | 'reject' | 'think';

interface ProposalSequenceProps {
    /** When false, the "Click to respond" button is disabled until the narration has finished. Default true. */
    ready?: boolean;
    /** Called when user selects an option (e.g. to pause chapter background music). */
    onResponseOpen?: () => void;
    /** Called when user closes the response (e.g. to resume chapter background music). */
    onResponseClose?: () => void;
    /** Called when user clicks "Yes! I accept" (e.g. to show chapter 14 image). */
    onAccept?: () => void;
    /** Called when user clicks Back from the three-options screen (e.g. to hide chapter 14 image). */
    onBack?: () => void;
}

export default function ProposalSequence({ ready = true, onResponseOpen, onResponseClose, onAccept, onBack }: ProposalSequenceProps) {
    const [showOptions, setShowOptions] = useState(false);
    const [chosen, setChosen] = useState<ResponseChoice>(null);
    const acceptanceAudioRef = useRef<HTMLAudioElement | null>(null);
    const rejectAudioRef = useRef<HTMLAudioElement | null>(null);
    const thinkAudioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            acceptanceAudioRef.current = new Audio(ACCEPTANCE_AUDIO);
            rejectAudioRef.current = new Audio(REJECT_AUDIO);
            thinkAudioRef.current = new Audio(THINK_AUDIO);
            return () => {
                acceptanceAudioRef.current?.pause();
                acceptanceAudioRef.current = null;
                rejectAudioRef.current?.pause();
                rejectAudioRef.current = null;
                thinkAudioRef.current?.pause();
                thinkAudioRef.current = null;
            };
        }
    }, []);

    const handleChoice = (choice: ResponseChoice) => {
        onResponseOpen?.();
        if (choice === 'accept') {
            onAccept?.();
            if (acceptanceAudioRef.current) {
            rejectAudioRef.current?.pause();
            rejectAudioRef.current && (rejectAudioRef.current.currentTime = 0);
            thinkAudioRef.current?.pause();
            thinkAudioRef.current && (thinkAudioRef.current.currentTime = 0);
            acceptanceAudioRef.current.volume = 1;
            acceptanceAudioRef.current.play().catch(() => {});
            }
        }
        if (choice === 'reject' && rejectAudioRef.current) {
            acceptanceAudioRef.current?.pause();
            acceptanceAudioRef.current && (acceptanceAudioRef.current.currentTime = 0);
            thinkAudioRef.current?.pause();
            thinkAudioRef.current && (thinkAudioRef.current.currentTime = 0);
            rejectAudioRef.current.volume = 1;
            rejectAudioRef.current.play().catch(() => {});
        }
        if (choice === 'think' && thinkAudioRef.current) {
            acceptanceAudioRef.current?.pause();
            acceptanceAudioRef.current && (acceptanceAudioRef.current.currentTime = 0);
            rejectAudioRef.current?.pause();
            rejectAudioRef.current && (rejectAudioRef.current.currentTime = 0);
            thinkAudioRef.current.volume = 1;
            thinkAudioRef.current.play().catch(() => {});
        }
        setChosen(choice);
    };

    const handleClose = () => {
        acceptanceAudioRef.current?.pause();
        acceptanceAudioRef.current && (acceptanceAudioRef.current.currentTime = 0);
        rejectAudioRef.current?.pause();
        rejectAudioRef.current && (rejectAudioRef.current.currentTime = 0);
        thinkAudioRef.current?.pause();
        thinkAudioRef.current && (thinkAudioRef.current.currentTime = 0);
        onResponseClose?.();
        setChosen(null);
    };

    return (
        <div className="mt-2 shrink-0 w-full max-w-md mx-auto" data-proposal-sequence>
            {!showOptions ? (
                <motion.button
                    onClick={ready ? () => setShowOptions(true) : undefined}
                    disabled={!ready}
                    className={`px-6 py-2 text-sm font-lato rounded-full mx-auto block transition-colors ${
                        ready
                            ? 'bg-rose-deep text-white shadow-lg hover:bg-rose-deep/90 cursor-pointer'
                            : 'bg-gray-300 text-gray-500 shadow cursor-not-allowed'
                    }`}
                    whileHover={ready ? { scale: 1.05 } : undefined}
                    whileTap={ready ? { scale: 0.95 } : undefined}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    {ready ? 'Click to respond ♡' : 'Read the message above first...'}
                </motion.button>
            ) : !chosen ? (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-3"
                >
                    <motion.button
                        type="button"
                        onClick={() => {
                            setShowOptions(false);
                            onBack?.();
                        }}
                        className="mb-2 text-xs font-lato text-gray-600 hover:text-gray-800 underline transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        ← Back
                    </motion.button>
                    <p className="text-sm font-lato text-gray-700 mb-3">
                        Whatever your answer, you&apos;ll always be my person. Choose one:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 justify-center flex-wrap">
                        <motion.button
                            onClick={() => handleChoice('accept')}
                            className="px-4 py-2.5 rounded-xl bg-rose-deep/90 text-white text-sm font-lato shadow-md hover:bg-rose-deep transition-colors border border-rose-deep/50"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Yes! I accept 💕
                        </motion.button>
                        <motion.button
                            onClick={() => handleChoice('think')}
                            className="px-4 py-2.5 rounded-xl bg-lavender/80 text-gray-800 text-sm font-lato shadow-md hover:bg-lavender transition-colors border border-gray-300/50"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            I need time to think 🌸
                        </motion.button>
                        <motion.button
                            onClick={() => handleChoice('reject')}
                            className="px-4 py-2.5 rounded-xl bg-white/80 text-gray-700 text-sm font-lato shadow-md hover:bg-gray-100 transition-colors border border-gray-300/50"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            I&apos;m sorry, I can&apos;t 😢
                        </motion.button>
                    </div>
                </motion.div>
            ) : (
                <AnimatePresence mode="wait">
                    <motion.div
                        key={chosen}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-center rounded-xl border-2 border-rose-deep/30 bg-white/50 px-4 py-3 shadow-inner"
                    >
                        {chosen === 'accept' && (
                            <>
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="mb-3"
                                >
                                    <img
                                        src="/images/chapters/dairymilk.webp"
                                        alt="Dairy Milk Silk"
                                        width={200}
                                        height={128}
                                        className="mx-auto rounded-lg shadow-md max-h-32 w-auto h-auto object-contain"
                                    />
                                </motion.div>
                                <p className="text-sm font-lato text-gray-800 mb-2">
                                    Thank you for saying yes! 💝
                                </p>
                                <p className="text-xs font-lato text-gray-600 mb-1">
                                    Text me on WhatsApp with this message:
                                </p>
                                <p className="text-sm font-playfair text-rose-deep font-semibold italic">
                                    &ldquo;I want to be your lifetime Valentine&rdquo;
                                </p>
                                <p className="text-xs text-gray-500 mt-2">
                                    I&apos;ll be waiting. Forever yours, Sujin.
                                </p>
                            </>
                        )}
                        {chosen === 'reject' && (
                            <>
                                <p className="text-2xl mb-2" aria-hidden>😢</p>
                                <p className="text-sm font-lato text-gray-700 mb-2">
                                    I understand. Thank you for being honest.
                                </p>
                                <p className="text-xs font-lato text-gray-600 mb-1">
                                    If you&apos;d like to reply, you can text on WhatsApp:
                                </p>
                                <p className="text-sm font-lato text-gray-700 italic">
                                    &ldquo;Sorry, I can&apos;t&rdquo;
                                </p>
                                <p className="text-xs text-gray-500 mt-2">
                                    You&apos;ll always be special to me. — Sujin
                                </p>
                                <p className="text-sm font-lato text-gray-600 italic mt-3">
                                    The waiting never ends...
                                </p>
                            </>
                        )}
                        {chosen === 'think' && (
                            <>
                                <p className="text-sm font-lato text-gray-700 mb-2">
                                    I&apos;m glad you&apos;re considering it. Take all the time you need.
                                </p>
                                <p className="text-xs font-lato text-gray-600 mb-1">
                                    When you feel ready, text me on WhatsApp:
                                </p>
                                <p className="text-sm font-playfair text-rose-deep/90 italic">
                                    &ldquo;There is a chance we can look&rdquo;
                                </p>
                                <p className="text-xs text-gray-500 mt-2">
                                    I&apos;ll wait for you. — Sujin
                                </p>
                            </>
                        )}

                        <div className="relative h-16 mt-3 overflow-hidden">
                            {Array.from({ length: 12 }).map((_, i) => (
                                <motion.span
                                    key={i}
                                    className="absolute text-lg"
                                    style={{ left: `${10 + i * 8}%`, top: 0 }}
                                    animate={{
                                        y: 64,
                                        rotate: Math.random() * 360,
                                        opacity: 0,
                                    }}
                                    transition={{
                                        duration: 2 + Math.random(),
                                        delay: Math.random() * 0.3,
                                        ease: 'easeOut',
                                    }}
                                >
                                    🌹
                                </motion.span>
                            ))}
                        </div>

                        <motion.button
                            type="button"
                            onClick={handleClose}
                            className="mt-4 px-4 py-2 text-sm font-lato rounded-lg bg-gray-200/80 text-gray-700 hover:bg-gray-300 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Close
                        </motion.button>
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    );
}
