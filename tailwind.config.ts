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
  },
  plugins: [],
}
export default config