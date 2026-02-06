'use client';

import { forwardRef } from 'react';
import ChapterWrapper from './ChapterWrapper';
import { CHAPTERS } from '@/lib/constants/storyData';

const Chapter02 = forwardRef<HTMLDivElement, any>((props, ref) => {
    const chapter = CHAPTERS[1];

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

Chapter02.displayName = 'Chapter02';

export default Chapter02;
