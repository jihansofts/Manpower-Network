import ContactCountry from "@/components/Contactpages/ContactConutry";
import ContactHero from "@/components/Contactpages/ContactHero";
import Layout from "@/components/layout";
import React from "react";

export default function contact() {
  return (
    <Layout>
      <ContactHero />
      <ContactCountry/>
    </Layout>
  );
}
