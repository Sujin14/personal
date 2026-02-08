'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

const LOVE_ICONS = ['❤️', '💕', '💗', '💖', '💝', '🌸', '✨'];
const SPREAD_COUNT = 56;

function useSpreadPositions(count: number) {
    return useMemo(() => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            left: 5 + (i * 17) % 90,
            top: 8 + (i * 23) % 84,
            icon: LOVE_ICONS[i % LOVE_ICONS.length],
            size: 14 + (i % 3) * 6,
            delay: (i / count) * 2.8,
            duration: 0.8 + (i % 5) * 0.15,
        }));
    }, [count]);
}

export default function HeartUnlock() {
    const [isUnlocking, setIsUnlocking] = useState(false);
    const [spreadLove, setSpreadLove] = useState(false);
    const [hideSpread, setHideSpread] = useState(false);
    const positions = useSpreadPositions(SPREAD_COUNT);

    useEffect(() => {
        const t1 = setTimeout(() => setIsUnlocking(true), 1000);
        const t2 = setTimeout(() => setSpreadLove(true), 2200);
        const t3 = setTimeout(() => setHideSpread(true), 6000);
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, []);

    const showSpread = spreadLove && !hideSpread;

    return (
        <>
            <div className="relative w-64 h-64 mx-auto">
                <motion.div
                    className="absolute left-1/2 -translate-x-1/2 top-0"
                    initial={{ y: -100, opacity: 0 }}
                    animate={isUnlocking ? { y: 80, opacity: 1 } : { y: -100, opacity: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                >
                    <div className="text-6xl">🗝️</div>
                </motion.div>

                <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl">
                    <motion.div
                        initial={{ scale: 1 }}
                        animate={isUnlocking ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] } : { scale: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                    >
                        ❤️
                    </motion.div>
                </motion.div>

                {isUnlocking && (
                    <>
                        {Array.from({ length: 12 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-gold-sparkle rounded-full left-1/2 top-1/2"
                                initial={{ scale: 0, x: 0, y: 0 }}
                                animate={{
                                    x: Math.cos((i * 2 * Math.PI) / 12) * 100,
                                    y: Math.sin((i * 2 * Math.PI) / 12) * 100,
                                    scale: [0, 1, 0],
                                    opacity: [1, 1, 0],
                                }}
                                transition={{ delay: 2.5, duration: 1.5 }}
                            />
                        ))}
                    </>
                )}
            </div>

            {/* Love icons spread gradually; removed when animation completes */}
            <AnimatePresence>
                {showSpread && (
                    <motion.div
                        className="fixed inset-0 pointer-events-none z-20 overflow-hidden"
                        aria-hidden
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {positions.map(({ id, left, top, icon, size, delay, duration }) => (
                            <motion.span
                                key={id}
                                className="absolute opacity-0"
                                style={{
                                    left: `${left}%`,
                                    top: `${top}%`,
                                    fontSize: size,
                                    filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))',
                                }}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{
                                    scale: [0, 1.15, 1],
                                    opacity: [0, 0.9, 0.85],
                                }}
                                transition={{
                                    duration,
                                    delay,
                                    ease: 'easeOut',
                                }}
                            >
                                {icon}
                            </motion.span>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
