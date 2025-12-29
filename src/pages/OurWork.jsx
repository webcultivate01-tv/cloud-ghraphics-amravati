import React from "react";
import HeroSection from "../components/OurWork/HeroSection";
import PortfolioGrid from "../components/OurWork/PortfolioGrid";
import CreativeProcess from "../components/OurWork/CreativeProcess";
import CallToAction from "../components/OurWork/CallToAction";

const OurWork = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <HeroSection />
      <PortfolioGrid />
      <CreativeProcess />
      <CallToAction />
    </div>
  );
};

export default OurWork;
