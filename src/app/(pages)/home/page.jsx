import React from "react";
import Header from "../../components/header/index.jsx";
import ServiceSection from "@/app/components/ServiceSection";
import FirstSection from "@/app/components/FirstSection/index.jsx";
import WhoWeAre from "@/app/components/whoWeAre/index.jsx";
import SectionCreateWebSite from "@/app/components/SectionCreateWebSite";

export default function page() {
  return (
    <>
      <Header />
      <FirstSection />
      <ServiceSection />
      <SectionCreateWebSite />
      <WhoWeAre />
    </>
  );
}
