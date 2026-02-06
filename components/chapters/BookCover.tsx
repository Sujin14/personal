'use client';

import { forwardRef } from 'react';

// Using forwardRef as required by react-pageflip
const BookCover = forwardRef<HTMLDivElement, any>((props, ref) => {
    return (
        <div
            ref={ref}
            {...props}
            className="bg-rose-deep text-white flex items-center justify-center p-8 shadow-inner"
            style={props.style}
        >
            <div className="border-4 border-gold-sparkle h-full w-full flex flex-col items-center justify-center text-center p-4">
                <h1 className="text-5xl font-playfair mb-4">A Boy's Heart</h1>
                <p className="text-xl font-dancing">A 13 Year Love Story</p>
                <div className="mt-8 text-4xl animate-bounce">❤️</div>
            </div>
        </div>
    );
});

BookCover.displayName = 'BookCover';

export default BookCover;
