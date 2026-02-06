'use client';

import { motion } from 'framer-motion';

interface NavigationProps {
    totalChapters: number;
    activeChapter: number;
    onNavigate: (index: number) => void;
}

export default function Navigation({ totalChapters, activeChapter, onNavigate }: NavigationProps) {
    return (
        <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
            {Array.from({ length: totalChapters }).map((_, index) => (
                <motion.button
                    key={index}
                    onClick={() => onNavigate(index)}
                    className={`rounded-full transition-all border-2 border-white/90 shadow-md ${activeChapter === index
                            ? 'bg-gray-800 w-4 h-4 border-gray-800'
                            : 'bg-white/80 hover:bg-white w-3 h-3 border-white'
                        }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Go to chapter ${index + 1}`}
                />
            ))}

            <div className="absolute -left-[2px] top-0 w-[2px] bg-white/40 h-full -z-10">
                <motion.div
                    className="w-full bg-gray-800"
                    initial={{ height: 0 }}
                    animate={{ height: `${((activeChapter + 1) / totalChapters) * 100}%` }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </nav>
    );
}
