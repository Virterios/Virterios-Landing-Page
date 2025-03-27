import React from "react";
import Header from "../../components/header/index.jsx";
import ServiceSection from "@/app/components/ServiceSection";
import FirstSection from "@/app/components/FirstSection/index.jsx"
import QuemSomos from '../../components/QuemSomos/index.jsx'

export default function page() {
  return (
    <>
        <Header />
        <FirstSection/>
        <ServiceSection />
        <QuemSomos />


    </>
  );
}
