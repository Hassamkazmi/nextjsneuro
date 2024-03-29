import React from 'react';
import { Fade} from "react-awesome-reveal";
import { IoStar } from "react-icons/io5";

const FinalCTA = () => {

  const handleBottomBuyNowClick = (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    logBottomBuyNowEvent(); // Log the BottomBuyNowClick event

    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      const topPosition = pricingSection.offsetTop + (pricingSection.offsetHeight / 2) - (window.innerHeight / 2);
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
      });
    }
  };

  const logBottomBuyNowEvent = () => {
    // Log event to Facebook Pixel for Bottom Buy Now click
    fbq('trackCustom', 'BottomBuyNowClick');
  };


  return (
    <section className="pt-10 pb-28 bg-gray-50 Final_CTA">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">

        <Fade duration={1000}>
        <h1 className="mb-6 text-4xl font-bold leading-none tracking-tight text-black md:text-5xl lg:text-6xl newtext-1">Silence the ADHD Chaos. <br /> Make Studying Easy.</h1>

        <p className="mb-6 text-lg font-normal text-black sm:px-16 lg:text-xl xl:px-48">The second brain for studying. Bring revision notes, flashcards, projects, <br />deadlines and ADHD focus tools into one place.</p>

        {/* Get NeuroNotes Button (Below "Must-have focus tools" text and above stars) */}
        <div className="mt-4"> {/* Increased margin-top for spacing */}
          <a href="#pricing" onClick={handleBottomBuyNowClick} className="StandardCheckoutButton inline-block rounded-lg bg-black px-8 py-4 text-lg font-bold text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300">
            Buy Now</a>
        </div>

        {/* Star Rating */}
        <div className="mb-2 flex justify-center">
          <span className="flex mt-4 mb-0 text-3xl leading-none text-black"><IoStar style={{color:"#FB8C00"}}/><IoStar style={{color:"#FB8C00"}}/><IoStar style={{color:"#FB8C00"}}/><IoStar style={{color:"#FB8C00"}}/><IoStar style={{color:"#FB8C00"}}/></span>
        </div>
        <span className="mt-0 mb-0 text-md text-gray-800">4.89/5 from 500+ ADHDers.</span>
        </Fade>
      </div>
      
    </section>
  );
};

export default FinalCTA;
