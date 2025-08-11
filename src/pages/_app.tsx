// src/pages/_app.tsx
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-inter", // sets the font in a CSS variable
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={` ${inter.className} antialiased`}>
      <Component {...pageProps} />
    </main>
  );
}
