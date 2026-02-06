'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeartUnlock() {
    const [isUnlocking, setIsUnlocking] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsUnlocking(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
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
    );
}
