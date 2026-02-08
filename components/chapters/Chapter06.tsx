'use client';

import { forwardRef } from 'react';
import ChapterWrapper from './ChapterWrapper';
import HeartUnlock from '@/components/animations/HeartUnlock';
import TypewriterText from '@/components/animations/TypewriterText';
import { CHAPTERS } from '@/lib/constants/storyData';

const HEART_UNLOCK_LINE = 'Finally time came to open the lock and got the key to the heart.';

const Chapter06 = forwardRef<HTMLDivElement, any>((props, ref) => {
    const chapter = CHAPTERS[5];

    return (
        <ChapterWrapper
            ref={ref}
            {...props}
            title={chapter.title}
            narration={chapter.narration}
            image={chapter.image}
            colorTheme={chapter.colorTheme}
            contentBetweenImageAndChildren={
                <p className="text-center text-lg md:text-xl font-lato text-gray-800 px-4 max-w-lg mx-auto leading-relaxed">
                    <TypewriterText
                        text={HEART_UNLOCK_LINE}
                        startDelay={800}
                        speed={50}
                        className="block text-center"
                    />
                </p>
            }
        >
            <HeartUnlock />
        </ChapterWrapper>
    );
});

Chapter06.displayName = 'Chapter06';

export default Chapter06;
