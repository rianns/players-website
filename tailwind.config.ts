import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // 'about-bg': "url('../../public/resources/images/bg-about.png')",
        // 'landing': "url('/resources/images/AdobeStock_218284763.jpeg')"
        'temp': "url('/resources/images/AdobeStock_303292479.jpeg)",
      },
      // fontFamily: {
      //   title: ['var(--font-comforter)'],
      //   nav: ['var(--font-gloock)'],
      //   text: ['var(--font-montserrat)'],
      // },
      colors: {
        dark: '#404040',
        dark50: 'rgba(64, 64, 64, 0.5)',
        maroon: '#943d42',
      },
      screens: {
        xs: '400px',
        '3x1': '1680px',
        '4x1': '2200px',
      },
      maxWidth: {
        '10x1': '1512px',
      },
      borderRadius: {
        '5x1': '40px',
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
export default config