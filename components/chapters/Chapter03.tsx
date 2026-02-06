'use client';

import { forwardRef } from 'react';
import ChapterWrapper from './ChapterWrapper';
import { CHAPTERS } from '@/lib/constants/storyData';

const Chapter03 = forwardRef<HTMLDivElement, any>((props, ref) => {
    const chapter = CHAPTERS[2];

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

Chapter03.displayName = 'Chapter03';

export default Chapter03;
