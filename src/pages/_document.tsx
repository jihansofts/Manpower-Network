import { Html, Head, Main, NextScript } from "next/document";
import { Inter } from "next/font/google";

// Load the Inter font
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-inter",
});

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={` ${inter.variable} antialiased`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
