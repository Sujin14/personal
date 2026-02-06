import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'rose-soft': '#FFB6C1',
                'lavender': '#E6E6FA',
                'rose-deep': '#C41E3A',
                'blush': '#FFC0CB',
                'gold-sparkle': '#FFD700',
                'white-ethereal': '#FFFAFA',
                'baby-blue': '#E0F7FF',
                'light-yellow': '#FFF9E3',
                'sky-blue': '#87CEEB',
                'sunny-yellow': '#FFD700',
                'dusty-blue': '#6B8E9E',
                'gray-lavender': '#B8A9C9',
                'charcoal': '#36454F',
                'steel-gray': '#71797E',
                'coral': '#FF7F50',
                'soft-orange': '#FFB347',
            },
            fontFamily: {
                playfair: ['"Playfair Display"', 'serif'],
                lato: ['Lato', 'sans-serif'],
                dancing: ['"Dancing Script"', 'cursive'],
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
};

export default config;
