'use client';

import { motion } from 'framer-motion';

export default function Loader() {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-rose-soft via-lavender to-blush px-6"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="mb-6"
            >
                <div className="w-28 h-28 flex items-center justify-center">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg">
                        <path
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                            fill="#C41E3A"
                        />
                    </svg>
                </div>
            </motion.div>

            <motion.h2
                className="text-xl md:text-2xl font-playfair text-gray-800 text-center max-w-md mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
                A love story in 14 chapters
            </motion.h2>

            <motion.p
                className="text-sm md:text-base font-lato text-gray-700 text-center max-w-sm mb-6"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
            >
                Every chapter matters. Stay till the last — there&apos;s something waiting for you there.
            </motion.p>

            <div className="w-56 h-1.5 bg-white/40 rounded-full overflow-hidden mb-4">
                <motion.div
                    className="h-full bg-rose-deep"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2.2, ease: 'easeInOut' }}
                />
            </div>

            <motion.p
                className="text-gray-600 text-xs font-lato"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                Preparing something special...
            </motion.p>
        </motion.div>
    );
}
