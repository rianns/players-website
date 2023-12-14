import { Comforter, Montserrat, Gloock } from "next/font/google";

export const comforter = Comforter({
  weight: "400",
  subsets: ['latin'],
  display: "swap",
});

export const montserrat = Montserrat({
    subsets: ['latin', 'latin-ext'],
    display: 'swap',
})

export const gloock = Gloock({
    weight: '400',
    subsets: ['latin', 'latin-ext'],
    display: 'swap',
})
