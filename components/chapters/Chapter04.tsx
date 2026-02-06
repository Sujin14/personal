'use client';

import { forwardRef } from 'react';
import ChapterWrapper from './ChapterWrapper';
import { CHAPTERS } from '@/lib/constants/storyData';

const Chapter04 = forwardRef<HTMLDivElement, any>((props, ref) => {
    const chapter = CHAPTERS[3];

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

Chapter04.displayName = 'Chapter04';

export default Chapter04;
