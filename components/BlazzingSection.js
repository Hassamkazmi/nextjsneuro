import React from "react";
import Image from "next/image";
import { Bounce, Slide } from "react-awesome-reveal";
import { TiTick } from "react-icons/ti";

const DarkModeSection = () => {
  return (
    <section className="bg-white darkmode-section">
      <Slide>
          <div className="py-8 pb-20 px-4 mx-auto max-w-screen-xl sm:pt-16 lg:px-56">
        <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-bold text-gray-900">
           Blazing fast set-up. <br />
            Get up and running within 5 mins 🔥
          </h2>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              
              <p className="mt-6 text-lg leading-6 text-gray-600">
                
              </p>
              <dl className="mt-10 max-w-xl space-y-4 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                  
                    <p className="mt-2 text-2xl flex font-bold tracking-tight text-gray-900 sm:text-1xl">
                    <TiTick  style={{color:"orange" , fontSize:"35px"}}/> Everything in one place.
              </p>
                    
                  </dt>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                  <p className="mt-2 text-2xl flex font-bold tracking-tight text-gray-900 sm:text-1xl">
                    <TiTick  style={{color:"orange" , fontSize:"35px"}}/> Fully customisable.
              </p>
                   
                   
                  </dt>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                  <p className="mt-2 text-2xl flex font-bold tracking-tight text-gray-900 sm:text-1xl">
                    <TiTick  style={{color:"orange" , fontSize:"35px"}}/> Quickly Capture Ideas.
              </p>
                    
                    
                  </dt>
                </div>
              </dl>
            </div>
          </div>
          <Image
            width={2432}
            height={1442}
            src="https://res.cloudinary.com/dc143mtxk/image/upload/v1705354011/jsnvus7ysm6uhencdf5a.png"
            alt="Flashcards Demo"
          />
          <div></div>
        </div>

        <hr />
      </div>
      </Slide>    
    </section>
  );
};

export default DarkModeSection;
