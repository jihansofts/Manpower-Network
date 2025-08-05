// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

// Load the Inter font
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
