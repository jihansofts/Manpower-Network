import CareersForm from "@/components/Careers/CareersForm";
import CareersHero from "@/components/Careers/CareersHero";
import Layout from "@/components/layout";
import React from "react";

export default function careers() {
  return (
    <Layout>
      <CareersHero />
      <CareersForm/>
    </Layout>
  );
}
