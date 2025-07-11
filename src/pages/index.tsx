import Hero from "@/components/Homepages/Hero";
import OurIndustries from "@/components/Homepages/OurIndustries";
import OurProcess from "@/components/Homepages/OurProcess";
import Services from "@/components/Homepages/Services";
import Solutions from "@/components/Homepages/Solutions";
import Whoweare from "@/components/Homepages/Whoweare";
import Layout from "@/components/layout";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.className} ${geistMono.className}  `}>
      <Layout>
        <Hero />
        <Whoweare />
        <Solutions />
        <Services />
        <OurIndustries />
        <OurProcess />
      </Layout>
    </div>
  );
}
