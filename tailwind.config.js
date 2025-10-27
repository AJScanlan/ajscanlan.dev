/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
        './content/**/*.{md,mdx}',
    ],
    theme: {
        container: { center: true, padding: '1rem' },
        extend: {
            colors: {
                ink: {
                    50: '#f8fafc',
                    100: '#eef2f6',
                    200: '#e3e8ef',
                    300: '#cfd8e3',
                    400: '#97a3b6',
                    500: '#667085',
                    600: '#475467',
                    700: '#344054',
                    800: '#1d2939',
                    900: '#101828',
                },
                paper: {
                    50: '#fcfcfa',
                    100: '#faf9f6',
                    200: '#f5f2ea',
                },
                accent: '#0ea5e9',
            },
            fontFamily: {
                sans: [
                    'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Inter',
                    'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji'
                ],
                serif: ['ui-serif', 'Georgia', 'Iowan Old Style', 'Times New Roman', 'serif'],
                mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
            },
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.ink.800'),
                        maxWidth: '70ch',
                        a: { color: theme('colors.accent'), textDecoration: 'none', fontWeight: 500 },
                        'a:hover': { textDecoration: 'underline' },
                        h1: { letterSpacing: '-0.02em' },
                        h2: { letterSpacing: '-0.01em' },
                        h3: { letterSpacing: '-0.005em' },
                        blockquote: {
                            fontStyle: 'normal',
                            borderLeftColor: theme('colors.ink.300'),
                            color: theme('colors.ink.700'),
                        },
                        code: { backgroundColor: theme('colors.paper.200'), padding: '0.15rem 0.35rem', borderRadius: '0.25rem' },
                        pre: { backgroundColor: theme('colors.paper.200') },
                        hr: { borderColor: theme('colors.ink.200') },
                    },
                },
                invert: {
                    css: {
                        color: theme('colors.ink.100'),
                        a: { color: theme('colors.accent') },
                        blockquote: { borderLeftColor: theme('colors.ink.600'), color: theme('colors.ink.200') },
                        code: { backgroundColor: theme('colors.ink.800') },
                        pre: { backgroundColor: theme('colors.ink.900') },
                    }
                }
            }),
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
