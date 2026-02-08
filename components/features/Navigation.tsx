'use client';

import { motion } from 'framer-motion';

interface NavigationProps {
    totalChapters: number;
    activeChapter: number;
    onNavigate: (index: number) => void;
}

export default function Navigation({ totalChapters, activeChapter, onNavigate }: NavigationProps) {
    return (
        <nav
            className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2 md:gap-3"
            aria-label="Chapter navigation"
        >
            <span className="text-[10px] md:text-xs text-gray-600/90 font-lato tabular-nums">
                {activeChapter + 1} / {totalChapters}
            </span>
            <div className="relative flex flex-col gap-2 md:gap-3">
                {Array.from({ length: totalChapters }).map((_, index) => (
                    <motion.button
                        key={index}
                        type="button"
                        onClick={() => onNavigate(index)}
                        className={`rounded-full transition-all border-2 border-white/90 shadow-md ${activeChapter === index
                                ? 'bg-gray-800 w-3.5 h-3.5 md:w-4 md:h-4 border-gray-800'
                                : 'bg-white/80 hover:bg-white w-2.5 h-2.5 md:w-3 md:h-3 border-white'
                            }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`Go to chapter ${index + 1} of ${totalChapters}`}
                        aria-current={activeChapter === index ? 'true' : undefined}
                    />
                ))}
                <div className="absolute -left-[2px] top-0 w-[2px] bg-white/40 h-full -z-10 rounded-full">
                    <motion.div
                        className="w-full bg-gray-800 rounded-full"
                        initial={false}
                        animate={{ height: `${((activeChapter + 1) / totalChapters) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>
        </nav>
    );
}
