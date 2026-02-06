'use client';

import { forwardRef, useState } from 'react';
import ChapterWrapper from './ChapterWrapper';
import { CHAPTERS } from '@/lib/constants/storyData';
import { motion } from 'framer-motion';

const Chapter09 = forwardRef<HTMLDivElement, any>((props, ref) => {
    const chapter = CHAPTERS[8];
    const [isZoomed, setIsZoomed] = useState(false);

    return (
        <ChapterWrapper
            ref={ref}
            {...props}
            title={chapter.title}
            narration={chapter.narration}
            image={chapter.image}
            colorTheme={chapter.colorTheme}
        >
            <motion.div
                className="text-center mt-8 cursor-pointer"
                onClick={() => setIsZoomed(!isZoomed)}
                whileHover={{ scale: 1.05 }}
            >
                <p className="text-sm text-gray-500 mb-2">Click to view autograph message</p>
                <motion.div
                    animate={{ scale: isZoomed ? 1.5 : 1 }}
                    className="inline-block p-4 bg-white/80 rounded-lg shadow-xl"
                >
                    <p className="font-dancing text-lg">Her precious words remain here...</p>
                </motion.div>
            </motion.div>
        </ChapterWrapper>
    );
});

Chapter09.displayName = 'Chapter09';

export default Chapter09;
