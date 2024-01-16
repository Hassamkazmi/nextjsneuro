import React, { useEffect } from 'react';
import Script from 'next/script';
import HeaderSection from '../components/HeaderSection';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import BlazzingSection from '../components/BlazzingSection';
import FeaturesSection from '../components/FeaturesSection';
import DemoSection from '../components/DemoSection';
import DarkModeSection from '../components/DarkmodeSection';
import CommunitySection from '../components/CommunitySection';
import PricingSection from '../components/PricingSection';
import AboutSection from '../components/AboutSection';
import FAQSection from '../components/FAQSection';
import FinalCTA from '../components/FinalCTASection';
import FooterSection from '../components/FooterSection';
import { Fade } from "react-awesome-reveal";

const IndexPage = () => {
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <Fade duration={2000}><BenefitsSection /></Fade>
      <Fade duration={2000}><FeaturesSection /></Fade>
      <Fade duration={2000}><BlazzingSection /></Fade>
      <Fade duration={2000}> <DemoSection /></Fade>
      <DarkModeSection />
      
      <Fade duration={2000}><PricingSection /></Fade>
      <Fade duration={2000}><FAQSection /></Fade>

      <CommunitySection />
      <Fade duration={2000}><AboutSection /></Fade>
      <Fade duration={1000}><FinalCTA /></Fade>
      <FooterSection />
    </>
  );
};

export default IndexPage;
