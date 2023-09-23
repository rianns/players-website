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
        'about-bg': "url('./resources/images/AdobeStock_244057912.jpeg')",
        'landing': "url('./resources/images/AdobeStock_218284763.jpeg')"
      },
      fontFamily: {
        title: ['var(--font-comforter)'],
        nav: ['var(--font-gloock)'],
        text: ['var(--font-montserrat)'],
      },
      colors: {
        dark: '#404040',
      },
    },
  },
  plugins: [],
}
export default config