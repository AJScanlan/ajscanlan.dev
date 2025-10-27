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
                // Body: 18-20px with responsive scaling
                base: ['1.125rem', { lineHeight: '1.7' }],  // 18px
                lg: ['1.25rem', { lineHeight: '1.7' }],    // 20px
                // Heading scale: 1.25-1.333
                'heading-sm': ['1.25rem', { lineHeight: '1.4' }],    // 20px, scale 1.25
                'heading-md': ['1.563rem', { lineHeight: '1.35' }],  // 25px, scale 1.25
                'heading-lg': ['1.953rem', { lineHeight: '1.3' }],   // 31px, scale 1.25
                'heading-xl': ['2.441rem', { lineHeight: '1.25' }],  // 39px, scale 1.25
                'heading-2xl': ['3.052rem', { lineHeight: '1.2' }],  // 49px, scale 1.25
            },
            maxWidth: {
                'prose': '70ch',   // 60-75ch range
                'prose-narrow': '60ch',
                'prose-wide': '75ch',
            },
            spacing: {
                // Rhythm units: 4/8/12px base
                'rhythm-1': '0.25rem',  // 4px
                'rhythm-2': '0.5rem',   // 8px
                'rhythm-3': '0.75rem',  // 12px
                'rhythm-4': '1rem',     // 16px
                'rhythm-6': '1.5rem',   // 24px
                'rhythm-8': '2rem',     // 32px
                'rhythm-12': '3rem',    // 48px
                'rhythm-16': '4rem',    // 64px
            },
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.ink.800'),
                        maxWidth: '70ch',
                        fontSize: '1.125rem',     // 18px body
                        lineHeight: '1.7',
                        
                        // Links
                        a: { 
                            color: theme('colors.accent'), 
                            textDecoration: 'none', 
                            fontWeight: '500',
                            '&:hover': { textDecoration: 'underline' }
                        },
                        
                        // Headings: scale 1.25, tight letter-spacing
                        h1: { 
                            fontSize: '2.441rem',      // ~39px
                            lineHeight: '1.25',
                            letterSpacing: '-0.02em',
                            fontWeight: '700',
                            marginTop: '0',
                            marginBottom: '1.5rem',
                        },
                        h2: { 
                            fontSize: '1.953rem',      // ~31px
                            lineHeight: '1.3',
                            letterSpacing: '-0.015em',
                            fontWeight: '700',
                            marginTop: '2rem',
                            marginBottom: '1rem',
                        },
                        h3: { 
                            fontSize: '1.563rem',      // ~25px
                            lineHeight: '1.35',
                            letterSpacing: '-0.01em',
                            fontWeight: '600',
                            marginTop: '1.5rem',
                            marginBottom: '0.75rem',
                        },
                        h4: { 
                            fontSize: '1.25rem',       // 20px
                            lineHeight: '1.4',
                            letterSpacing: '-0.005em',
                            fontWeight: '600',
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
                        
                        // Paragraphs: rhythm spacing
                        p: {
                            marginTop: '1.25rem',
                            marginBottom: '1.25rem',
                        },
                    },
                },
                invert: {
                    css: {
                        color: theme('colors.ink.100'),
                        a: { color: theme('colors.accent') },
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
