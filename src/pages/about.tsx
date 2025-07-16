import AboutHero from "@/components/Aboutpages/AboutHero";
import AchieveMore from "@/components/Aboutpages/AchieveMore";
import Empowering from "@/components/Aboutpages/Empowering";
import SkilledTalent from "@/components/Aboutpages/SkilledTalent";
import Layout from "@/components/layout";
import React from "react";

export default function about() {
  return (
    <Layout>
      <AboutHero />
      <Empowering />
      <SkilledTalent />
      <AchieveMore />
    </Layout>
  );
}
