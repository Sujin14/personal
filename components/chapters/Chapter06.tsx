'use client';

import { forwardRef } from 'react';
import ChapterWrapper from './ChapterWrapper';
import HeartUnlock from '@/components/animations/HeartUnlock';
import { CHAPTERS } from '@/lib/constants/storyData';

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
        >
            <HeartUnlock />
        </ChapterWrapper>
    );
});

Chapter06.displayName = 'Chapter06';

export default Chapter06;
