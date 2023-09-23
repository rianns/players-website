import { Comforter, Montserrat, Gloock } from "@next/font/google";

export const comforter = Comforter({
  weight: "400",
  subsets: ['latin'],
  display: "swap",
  variable: '--font-comforter',
});

export const montserrat = Montserrat({
    subsets: ['latin', 'latin-ext'],
    display: 'swap',
    variable: '--font-montserrat',
})

export const gloock = Gloock({
    weight: '400',
    subsets: ['latin', 'latin-ext'],
    display: 'swap',
    variable: '--font-gloock',
})