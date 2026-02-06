'use client';

import { useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AudioController() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Create audio element only on client side
        if (typeof window !== 'undefined') {
            try {
                const audioElement = new Audio('/audio/bg-music.mp3');
                audioElement.loop = true;
                audioElement.volume = 0.3;
                setAudio(audioElement);

                // Cleanup
                return () => {
                    audioElement.pause();
                    audioElement.src = '';
                };
            } catch (error) {
                console.log('Audio not available:', error);
            }
        }
    }, []);

    const togglePlay = () => {
        if (!audio) return;

        try {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play().catch(err => console.log('Playback failed:', err));
            }
            setIsPlaying(!isPlaying);
        } catch (error) {
            console.log('Audio control error:', error);
        }
    };

    return (
        <motion.button
            onClick={togglePlay}
            className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isPlaying ? "Pause music" : "Play music"}
        >
            {isPlaying ? (
                <Volume2 className="w-6 h-6 text-rose-deep" />
            ) : (
                <VolumeX className="w-6 h-6 text-gray-400" />
            )}
        </motion.button>
    );
}
