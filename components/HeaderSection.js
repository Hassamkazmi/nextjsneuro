// HeaderSection.jsx

import React, { useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Image from "next/image";
import Script from "next/script";
import { Fade } from "react-awesome-reveal";

const HeaderSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToMiddle = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const topPosition =
        section.offsetTop + section.offsetHeight / 2 - window.innerHeight / 2;
      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
    // Close the mobile menu after clicking a link
    setIsMobileMenuOpen(false);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    logCustomPixelEvent("HeaderBuyNowClick");

    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      const topPosition =
        pricingSection.offsetTop +
        pricingSection.offsetHeight / 2 -
        window.innerHeight / 2;
      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
    // Close the mobile menu after clicking the Buy Now button
    setIsMobileMenuOpen(false);
  };

  const logCustomPixelEvent = (eventName) => {
    // Log event to Facebook Pixel
    // fbq('trackCustom', 'HeaderBuyNowClick');
  };

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;

    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};

  return (
    <header>
      {/* ... (your Facebook Pixel and SpeedInsights components) */}
      <div
        className="full-header fixed top-0 left-0 right-0 bg-white lg:bg-opacity-30 lg:backdrop-blur-lg"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <nav className="px-8 py-5 lg:px-6">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
            <a href="#hero" className="flex items-center" onClick={scrollToTop}>
              <Image
                width={56}
                height={56}
                loading="eager"
                className="w-10 h-auto mr-3"
                src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/logo.webp"
                alt="NeuroNotes Logo"
              />
              <span className="self-center whitespace-nowrap text-xl sm:text-2xl lg:text-2xl font-semibold text-black">
                Neuro Notion
              </span>
            </a>
            {/* Hamburger Menu Button for Mobile */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-black focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
            {/* Mobile Menu */}
            <div
              className={`lg:hidden ${
                isMobileMenuOpen
                  ? "block transition-all duration-2000 ease-in"
                  : "hidden"
              }`}
            >
              <Fade duration={1000}>
                <div
                  className="flex flex-col items-center space-y-4 mt-4 add-class-head lg:bg-opacity-30 lg:backdrop-blur-lg"
                  style={{ backdropFilter: "blur(10px)" }}
                >
                  <a
                    onClick={() => scrollToMiddle("features")}
                    className="text-black cursor-pointer hover:underline mt-4"
                  >
                    Features
                  </a>
                  <a
                    onClick={() => scrollToMiddle("pricing")}
                    className="text-black cursor-pointer hover:underline"
                  >
                    Pricing
                  </a>
                  <a
                    onClick={() => scrollToMiddle("faqs")}
                    className="text-black cursor-pointer hover:underline"
                  >
                    FAQs
                  </a>
                  {/* <a href="#pricing" onClick={handleButtonClick} className="block rounded-lg bg-black px-4 py-2 text-lg font-bold text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 lg:px-8 lg:py-4">Buy Now</a> */}
                </div>
              </Fade>
            </div>
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                onClick={() => scrollToMiddle("features")}
                className="text-lg font-thin text-black hover:text-gray-600 cursor-pointer hover:underline"
              >
                Features
              </a>
              <a
                onClick={() => scrollToMiddle("pricing")}
                className="text-lg font-thin text-black hover:text-gray-600 cursor-pointer hover:underline"
              >
                Pricing
              </a>
              <a
                onClick={() => scrollToMiddle("faqs")}
                className="text-lg font-thin text-black hover:text-gray-600 cursor-pointer hover:underline"
              >
                FAQs
              </a>
            </div>
            {/* Buy Now Button for Desktop */}
            <a
              href="#pricing"
              onClick={handleButtonClick}
              className="hidden lg:inline-block rounded-lg bg-black px-4 py-2 text-lg font-bold text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 lg:px-8 lg:py-4"
            >
              Buy Now
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderSection;
