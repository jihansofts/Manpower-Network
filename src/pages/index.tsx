import Banner from "@/components/Homepages/Banner";
import AwardsAccreditations from "@/components/Homepages/HappyWorker";
import Hero from "@/components/Homepages/Hero";
import BrandCarousel from "@/components/Homepages/OurBrand";
import Specialisms from "@/components/Homepages/Specialisms";
import SuccessStory from "@/components/Homepages/SuccessStory";
import WhyOurCustomers from "@/components/Homepages/WhyOurCustomers";
import Work from "@/components/Homepages/Work";

import Layout from "@/components/layout";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"], // 400=Regular, 500=Medium, 700=Bold
});

export default function Home() {
  return (
    <div className={` ${inter.className}  `}>
      <Layout>
        <Hero />
        <Banner />
        <Specialisms />
        <Work />
        <WhyOurCustomers />
        <BrandCarousel />
        <SuccessStory />
        <AwardsAccreditations />
      </Layout>
    </div>
  );
}
