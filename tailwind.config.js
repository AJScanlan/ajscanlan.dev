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
                // Primary text scale - warm blacks for empathy & clarity
                ink: {
                    50: '#f7f7f8',   // Mist (lightest backgrounds)
                    100: '#e8e8e9',  // Subtle borders
                    200: '#c8c9cb',  // Disabled text
                    300: '#a0a2a6',  // Placeholder text
                    400: '#6d6f73',  // Captions, meta
                    500: '#44464a',  // Graphite (secondary text)
                    600: '#2d2e31',  // Body text (lighter option)
                    700: '#1a1b1d',  // Body text (default)
                    800: '#0f1011',  // Headings
                    900: '#0b0b0e',  // Maximum contrast
                },
                // Backgrounds - warm neutrals for visual calm
                paper: {
                    50: '#fcfcfc',   // Pure white (rare use)
                    100: '#faf9f6',  // Mist (primary background)
                    200: '#f3f1ec',  // Code blocks, subtle wells
                },
                // Brand accent - Fox Red (smart, alert, kind)
                fox: {
                    300: '#fca5a5',
                    400: '#f87171',
                    500: '#d0342c',  // Primary Fox Red
                    600: '#b82a23',
                    ink: '#8a221c',  // Text-grade burgundy
                },
                // Success state
                green: '#1f7a5c',   // Success states
            },
            fontFamily: {
                sans: [
                    'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont',
                    'Segoe UI', 'Roboto', 'Inter', 'Source Sans Pro', 'IBM Plex Sans',
                    'Helvetica Neue', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji'
                ],
                serif: ['ui-serif', 'Georgia', 'Iowan Old Style', 'Times New Roman', 'serif'],
                mono: [
                    'JetBrains Mono', 'Cascadia Code', 'ui-monospace', 'SFMono-Regular',
                    'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'
                ],
            },
            fontSize: {
                '2xs': ['0.6875rem', { lineHeight: '1.4'  }],  // 11px — uppercase mono micro-labels only
                xs:    ['0.75rem',   { lineHeight: '1.45' }],  // 12px
                sm:    ['0.8125rem', { lineHeight: '1.55' }],  // 13px
                base:  ['1.0625rem', { lineHeight: '1.6'  }],  // 17px — body
                lg:    ['1.1875rem', { lineHeight: '1.5'  }],  // 19px
                xl:    ['1.25rem',   { lineHeight: '1.3'  }],  // 20px
                '2xl': ['1.5625rem', { lineHeight: '1.5'  }],  // 25px
                '3xl': ['1.75rem',   { lineHeight: '1.22' }],  // 28px
                '4xl': ['2.25rem',   { lineHeight: '1.15' }],  // 36px
                '5xl': ['2.75rem',   { lineHeight: '1.1'  }],  // 44px
                '6xl': ['3.0625rem', { lineHeight: '1.05' }],  // 49px
            },
            letterSpacing: {
                eyebrow: '0.13em',  // uppercase JetBrains Mono eyebrows / micro-labels
            },
            maxWidth: {
                'prose': '70ch',   // 60-75ch range
                'prose-narrow': '60ch',
                'prose-wide': '75ch',
            },
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.ink.800'),
                        maxWidth: '70ch',          // Within 60-75ch spec
                        fontSize: theme('fontSize.base[0]'),              // 17px body
                        lineHeight: theme('fontSize.base[1].lineHeight'), // 1.6
                        
                        // Links - Fox Red accent
                        a: { 
                            color: theme('colors.fox.500'), 
                            textDecoration: 'none', 
                            fontWeight: '500',
                            '&:hover': { 
                                textDecoration: 'underline',
                                color: theme('colors.fox.600'),
                            }
                        },
                        
                        // Headings: standardized scale via theme() tokens
                        h1: {
                            fontSize: theme('fontSize.5xl[0]'),      // 44px
                            lineHeight: theme('fontSize.5xl[1].lineHeight'),
                            letterSpacing: '-0.02em',
                            fontWeight: '800',
                            marginTop: '0',
                            marginBottom: '1.5rem',
                        },
                        h2: {
                            fontSize: theme('fontSize.3xl[0]'),      // 28px
                            lineHeight: theme('fontSize.3xl[1].lineHeight'),
                            letterSpacing: '-0.015em',
                            fontWeight: '700',
                            marginTop: '3.5rem',
                            marginBottom: '0.75rem',
                            paddingLeft: '0',
                            borderLeftWidth: '0',
                        },
                        h3: {
                            fontSize: theme('fontSize.2xl[0]'),      // 25px
                            lineHeight: theme('fontSize.2xl[1].lineHeight'),
                            letterSpacing: '-0.005em',
                            fontWeight: '600',
                            marginTop: '2rem',
                            marginBottom: '0.5rem',
                            paddingLeft: '0',
                            borderLeftWidth: '0',
                        },
                        h4: {
                            fontSize: theme('fontSize.xl[0]'),       // 20px
                            lineHeight: theme('fontSize.xl[1].lineHeight'),
                            letterSpacing: '-0.005em',
                            fontWeight: '600',
                            marginTop: '1.75rem',
                            marginBottom: '0.5rem',
                        },
                        h5: {
                            fontSize: theme('fontSize.lg[0]'),       // 19px
                            lineHeight: theme('fontSize.lg[1].lineHeight'),
                            fontWeight: '500',
                            marginTop: '1.5rem',
                            marginBottom: '0.5rem',
                        },
                        // h5/h6 share the lg token — differentiated by weight/margin, not size
                        h6: {
                            fontSize: theme('fontSize.lg[0]'),       // 19px
                            lineHeight: theme('fontSize.lg[1].lineHeight'),
                            fontWeight: '500',
                            marginTop: '1.25rem',
                            marginBottom: '0.5rem',
                        },
                        
                        // Emphasis: italic for nuance, bold for anchors
                        strong: { fontWeight: '700' },
                        em: { fontStyle: 'italic', fontWeight: 'inherit' },
                        
                        // Code: 90-95% of body size
                        code: { 
                            fontSize: '0.95em',        // 95% of body
                            backgroundColor: theme('colors.paper.200'), 
                            padding: '0.15rem 0.35rem', 
                            borderRadius: '0.25rem',
                            fontFamily: theme('fontFamily.mono').join(', '),
                        },
                        'code::before': { content: '""' },
                        'code::after': { content: '""' },
                        
                        pre: { 
                            backgroundColor: theme('colors.paper.200'),
                            fontSize: '0.9em',         // 90% for code blocks
                            lineHeight: '1.6',
                        },
                        'pre code': {
                            backgroundColor: 'transparent',
                            padding: '0',
                        },
                        
                        // Blockquotes
                        blockquote: {
                            fontStyle: 'italic',
                            borderLeftWidth: '3px',
                            borderLeftColor: theme('colors.ink.300'),
                            color: theme('colors.ink.700'),
                            paddingLeft: '1.5rem',
                        },
                        
                        // Horizontal rules
                        hr: { 
                            borderColor: theme('colors.ink.200'),
                            marginTop: '3rem',
                            marginBottom: '3rem',
                        },
                        
                        // Lists: generous spacing
                        'ul, ol': {
                            paddingLeft: '1.5rem',
                        },
                        li: {
                            marginTop: '0.5rem',
                            marginBottom: '0.5rem',
                        },
                        
                        // Paragraphs
                        p: {
                            marginTop: '1.25rem',
                            marginBottom: '1.25rem',
                        },
                    },
                },
                invert: {
                    css: {
                        color: theme('colors.ink.100'),
                        a: { 
                            color: theme('colors.fox.400'),
                            '&:hover': { color: theme('colors.fox.300') }
                        },
                        blockquote: { borderLeftColor: theme('colors.ink.600'), color: theme('colors.ink.200') },
                        code: { backgroundColor: theme('colors.ink.800') },
                        pre: { backgroundColor: theme('colors.ink.900') },
                        hr: { borderColor: theme('colors.ink.700') },
                    }
                }
            }),
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
