import { Geist, Geist_Mono, Roboto } from "next/font/google";
import localFont from "next/font/local";



export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const roboto = Roboto({
  variable:"--font-roboto",
  subsets:["latin"],
  weight:["400","500"]
})

export const arimo = localFont({
  src:"../public/fonts/Arimo-Regular.ttf",
  variable:"--font-arimo"
});

export const nic = localFont({
  src:"../public/fonts/new/Honk-Regular.ttf",
  variable:"--font-nic"
});