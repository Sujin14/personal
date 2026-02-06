'use client';

import { forwardRef } from 'react';
import ChapterWrapper from './ChapterWrapper';
import { CHAPTERS } from '@/lib/constants/storyData';
import { motion } from 'framer-motion';

const Chapter11 = forwardRef<HTMLDivElement, any>((props, ref) => {
    const chapter = CHAPTERS[10];

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
                className="mt-8 mx-auto w-64 bg-white rounded-lg shadow-xl p-6"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1, type: "spring" }}
            >
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-xl">
                        💬
                    </div>
                    <div>
                        <p className="font-semibold text-sm">WhatsApp</p>
                        <p className="text-xs text-gray-500">New message</p>
                    </div>
                </div>
                <p className="text-sm text-gray-700">"Hey... it's been a while..."</p>
            </motion.div>
        </ChapterWrapper>
    );
});

Chapter11.displayName = 'Chapter11';

export default Chapter11;
