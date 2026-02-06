'use client';

import HTMLFlipBook from 'react-pageflip';
import { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import dynamic from 'next/dynamic';

// Import Chapter components dynamically but render them as children of FlipBook
const Chapter01 = dynamic(() => import('@/components/chapters/Chapter01'), { ssr: false });
const Chapter02 = dynamic(() => import('@/components/chapters/Chapter02'), { ssr: false });
const Chapter03 = dynamic(() => import('@/components/chapters/Chapter03'), { ssr: false });
const Chapter04 = dynamic(() => import('@/components/chapters/Chapter04'), { ssr: false });
const Chapter05 = dynamic(() => import('@/components/chapters/Chapter05'), { ssr: false });
const Chapter06 = dynamic(() => import('@/components/chapters/Chapter06'), { ssr: false });
const Chapter07 = dynamic(() => import('@/components/chapters/Chapter07'), { ssr: false });
const Chapter08 = dynamic(() => import('@/components/chapters/Chapter08'), { ssr: false });
const Chapter09 = dynamic(() => import('@/components/chapters/Chapter09'), { ssr: false });
const Chapter10 = dynamic(() => import('@/components/chapters/Chapter10'), { ssr: false });
const Chapter11 = dynamic(() => import('@/components/chapters/Chapter11'), { ssr: false });
const Chapter12 = dynamic(() => import('@/components/chapters/Chapter12'), { ssr: false });
const Chapter13 = dynamic(() => import('@/components/chapters/Chapter13'), { ssr: false });
const Chapter14 = dynamic(() => import('@/components/chapters/Chapter14'), { ssr: false });

const Cover = dynamic(() => import('@/components/chapters/BookCover'), { ssr: false });

export default function Book() {
    const bookRef = useRef<any>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const nextFlip = () => {
        if (bookRef.current) {
            bookRef.current.pageFlip().flipNext();
        }
    };

    const prevFlip = () => {
        if (bookRef.current) {
            bookRef.current.pageFlip().flipPrev();
        }
    };

    if (!mounted) return null;

    return (
        <div className="relative h-screen w-full flex items-center justify-center bg-wood-pattern overflow-hidden perspective-1000">
            <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none" />

            {/* Navigation Buttons for convenience */}
            <button
                onClick={prevFlip}
                className="absolute left-4 md:left-12 z-50 p-3 bg-white/80 rounded-full shadow-lg hover:bg-white transition-all transform hover:scale-110"
            >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>

            <button
                onClick={nextFlip}
                className="absolute right-4 md:right-12 z-50 p-3 bg-white/80 rounded-full shadow-lg hover:bg-white transition-all transform hover:scale-110"
            >
                <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            <div className="relative z-10 shadow-2xl skew-y-0">
                {/* @ts-ignore - Library types might behave weirdly with strict TS */}
                <HTMLFlipBook
                    width={400}
                    height={600}
                    size="stretch"
                    minWidth={300}
                    maxWidth={500}
                    minHeight={400}
                    maxHeight={800}
                    maxShadowOpacity={0.5}
                    showCover={true}
                    mobileScrollSupport={true}
                    ref={bookRef}
                    className="mx-auto"
                    style={{}}
                    startPage={0}
                    drawShadow={true}
                    flippingTime={1000}
                    usePortrait={true}
                    startZIndex={0}
                    autoSize={true}
                    clickEventForward={true}
                    useMouseEvents={true}
                    swipeDistance={30}
                    showPageCorners={true}
                    disableFlipByClick={false}
                >
                    {/* Cover Page */}
                    <Cover />

                    <Chapter01 />
                    <Chapter02 />
                    <Chapter03 />
                    <Chapter04 />
                    <Chapter05 />
                    <Chapter06 />
                    <Chapter07 />
                    <Chapter08 />
                    <Chapter09 />
                    <Chapter10 />
                    <Chapter11 />
                    <Chapter12 />
                    <Chapter13 />
                    <Chapter14 />

                    {/* End Cover */}
                    {/* @ts-ignore */}
                    <div className="bg-rose-900 flex flex-col items-center justify-center text-white border-l border-white/10">
                        <h2 className="text-3xl font-playfair">The Beginning...</h2>
                    </div>
                </HTMLFlipBook>
            </div>
        </div>
    );
}
