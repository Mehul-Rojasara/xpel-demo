import localFont from "next/font/local";

export const futura = localFont({
  src: "../assets/fonts/FuturaPT-Demi.woff2",
  display: "swap",
  preload: true,
  variable: "--font-futura",
});

export const jost = localFont({
  src: "../assets/fonts/Jost-Regular.woff2",
  display: "swap",
  preload: true,
  variable: "--font-jost",
}); 