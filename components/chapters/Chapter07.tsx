'use client';

import { forwardRef } from 'react';
import ChapterWrapper from './ChapterWrapper';
import { CHAPTERS } from '@/lib/constants/storyData';

const Chapter07 = forwardRef<HTMLDivElement, any>((props, ref) => {
    const chapter = CHAPTERS[6];

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

Chapter07.displayName = 'Chapter07';

export default Chapter07;
