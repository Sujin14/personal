'use client';

import { forwardRef } from 'react';
import ChapterWrapper from './ChapterWrapper';
import { CHAPTERS } from '@/lib/constants/storyData';

const Chapter08 = forwardRef<HTMLDivElement, any>((props, ref) => {
    const chapter = CHAPTERS[7];

    return (
        <ChapterWrapper
            ref={ref}
            {...props}
            title={chapter.title}
            narration={chapter.narration}
            image={chapter.image}
            colorTheme={chapter.colorTheme}
        />
    );
});

Chapter08.displayName = 'Chapter08';

export default Chapter08;
