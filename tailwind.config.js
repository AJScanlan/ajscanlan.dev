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
                // Brand neutrals tuned around Mist, Graphite, and Ink swatches.
                ink: {
                    50: '#f7f7f8',
                    100: '#ededf0',
                    200: '#d9dadd',
                    300: '#b4b6bb',
                    400: '#8b8e94',
                    500: '#5b5e63',
                    600: '#44464a',
                    700: '#2f3033',
                    800: '#1a1b1e',
                    900: '#0b0b0e',
                },
                paper: {
                    50: '#f7f7f8',
                    100: '#f1f1f3',
                    200: '#e6e7ea',
                },
                accent: '#d0342c',
                success: '#1f7a5c',
            },
            fontFamily: {
                sans: [
                    'Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto',
                    'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji'
                ],
                serif: [
                    'Crimson Pro', 'ui-serif', 'Georgia', 'Iowan Old Style', 'Times New Roman', 'serif'
                ],
                mono: [
                    'JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'
                ],
            },
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.ink.900'),
                        maxWidth: '65ch',
                        lineHeight: 1.7,
                        fontFamily: theme('fontFamily.serif').join(', '),
                        p: {
                            marginTop: '1.6em',
                            marginBottom: '1.6em',
                        },
                        'h1, h2, h3, h4, h5, h6': {
                            fontFamily: theme('fontFamily.sans').join(', '),
                        },
                        a: {
                            color: theme('colors.ink.900'),
                            textDecoration: 'underline',
                            textDecorationColor: theme('colors.accent'),
                            textDecorationThickness: '0.1em',
                            textUnderlineOffset: '0.15em',
                            fontWeight: 500,
                        },
                        'a:hover': {
                            textDecoration: 'underline',
                            textDecorationColor: theme('colors.accent'),
                        },
                        h1: { letterSpacing: '-0.02em' },
                        h2: { letterSpacing: '-0.01em' },
                        h3: { letterSpacing: '-0.005em' },
                        blockquote: {
                            fontStyle: 'normal',
                            borderLeftColor: theme('colors.ink.300'),
                            color: theme('colors.ink.700'),
                        },
                        code: {
                            backgroundColor: theme('colors.paper.200'),
                            padding: '0.15rem 0.35rem',
                            borderRadius: '0.25rem',
                            fontFamily: theme('fontFamily.mono').join(', '),
                            fontSize: '0.95em',
                        },
                        pre: {
                            backgroundColor: theme('colors.paper.200'),
                            fontFamily: theme('fontFamily.mono').join(', '),
                            fontSize: '0.95em',
                            lineHeight: 1.55,
                        },
                        hr: { borderColor: theme('colors.ink.200') },
                    },
                },
                invert: {
                    css: {
                        color: theme('colors.ink.100'),
                        fontFamily: theme('fontFamily.serif').join(', '),
                        'h1, h2, h3, h4, h5, h6': {
                            fontFamily: theme('fontFamily.sans').join(', '),
                        },
                        a: {
                            color: theme('colors.ink.100'),
                            textDecoration: 'underline',
                            textDecorationColor: theme('colors.accent'),
                            textDecorationThickness: '0.1em',
                            textUnderlineOffset: '0.15em',
                        },
                        blockquote: { borderLeftColor: theme('colors.ink.600'), color: theme('colors.ink.200') },
                        code: {
                            backgroundColor: theme('colors.ink.800'),
                            fontFamily: theme('fontFamily.mono').join(', '),
                            fontSize: '0.95em',
                        },
                        pre: {
                            backgroundColor: theme('colors.ink.900'),
                            fontFamily: theme('fontFamily.mono').join(', '),
                            fontSize: '0.95em',
                            lineHeight: 1.55,
                        },
                    }
                }
            }),
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
