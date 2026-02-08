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
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                className="mb-8"
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

            <motion.div
                className="text-center max-w-md space-y-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <p className="text-base md:text-lg font-lato text-gray-800 leading-relaxed">
                    Hi, please view this with <strong>headphones</strong> and try to understand the emotions in it.
                </p>
                <p className="text-sm md:text-base font-lato text-gray-700 leading-relaxed">
                    Take your time to read each page with your heart.
                </p>
            </motion.div>

            <div className="w-56 h-1.5 bg-white/40 rounded-full overflow-hidden mt-8 mb-2">
                <motion.div
                    className="h-full bg-rose-deep"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 3.5, ease: 'easeInOut' }}
                />
            </div>
        </motion.div>
    );
}
