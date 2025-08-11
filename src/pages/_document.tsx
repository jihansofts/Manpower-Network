import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.className} antialiased`}>
      <Component {...pageProps} />
    </main>
  );
}
