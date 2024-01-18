import React from 'react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import { FaGraduationCap } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { LiaBrushSolid } from "react-icons/lia";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { RiFileList2Fill } from "react-icons/ri";

const FeaturesSection = () => {
  return (
    <section className="bg-white features_section mb-16">
      <div className="bg-white pt-20 pb-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl leading-10 font-bold text-gray-900 newtext-1">
              Finally, everything in<br /> one place.
            </h2>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-700 pb-8">
              The all-in-one system your brain has been crying out for. No more juggling 15 tabs, no more distractions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Task Card 1 */}

            <Fade duration={2000}>
            <div className="p-7 max-w-sm mx-auto bg-gray-50 rounded-lg shadow-md flex flex-col items-center">
              <div className="flex-shrink-0">
                          
                              <BsFillCalendarEventFill style={{ fontSize: '2.5em' , color:"#f55423" }}/>
              </div>
              <div className="pt-5 text-lg font-semibold text-black">Seamless Organisation</div>
              <p className="pt-1 text-gray-700 text-center">No more distractions. Set tasks, reminders, deadlines, schedules all in one place.</p>
            </div>
            </Fade>
            

            {/* Task Card 2 */}
            <Fade duration={2000}>
            <div className="p-7 max-w-sm mx-auto bg-gray-50 rounded-lg shadow-md flex flex-col items-center">
              <div className="flex-shrink-0">
                              
                              <GiArtificialIntelligence style={{ fontSize: '2.5em' , color:"#f55423" }}/>
              </div>
              <div className="pt-5 text-lg font-medium text-black">Built-in AI</div>
              <p className="pt-1 text-gray-700 text-center">Transform notes into essay plans, summarise lecture topics, and more with Notion AI!</p>
            </div>
            </Fade>
           

            {/* Task Card 3 */}
            <Fade  duration={2000}>
            <div className="p-7 max-w-sm mx-auto bg-gray-50 rounded-lg shadow-md flex flex-col items-center">
              <div className="flex-shrink-0">
              <FaGraduationCap style={{ fontSize: '2.5em' , color:"#f55423" }}/>
              </div>
              <div className="pt-5 text-lg font-medium text-black">Easy Tutorials</div>
              <p className="pt-1 text-gray-700 text-center"> Notion beginners can ease into this system with full how-to videos on every page.</p>
            </div>
            </Fade>
           

            {/* Task Card 4 */}
            <Fade  duration={2000}>
            <div className="p-7 max-w-sm mx-auto bg-gray-50 rounded-lg shadow-md flex flex-col items-center">
              <div className="flex-shrink-0">

                      <LiaBrushSolid style={{ fontSize: '2.5em' , color:"#f55423" }}/>      
              </div>
              <div className="pt-5 text-lg font-medium text-black">Full Customization</div>
              <p className="pt-1 text-gray-700 text-center">Like Notion, customization is easy. Change colors, icons, and layout however you like!</p>
            </div>
            </Fade>
            

            {/* Task Card 5 */}
            <Fade  duration={2000}>
            <div className="p-7 max-w-sm mx-auto bg-gray-50 rounded-lg shadow-md flex flex-col items-center">
              <div className="flex-shrink-0">
                              <FaArrowRightArrowLeft style={{ fontSize: '2.5em' , color:"#f55423" }}/>
              </div>
              <div className="pt-5 text-lg font-medium text-black">Easy Migration</div>
              <p className="pt-1 text-gray-700 text-center">Moving from another platform is as easy as 1,2, CTRL + V ... Just Copy, Paste, and Go!</p>
            </div>
            </Fade>
            {/* Task Card 6 */}
            <Fade duration={2000}>
            <div className="p-7 max-w-sm mx-auto bg-gray-50 rounded-lg shadow-md flex flex-col items-center">
              <div className="flex-shrink-0">
                             <RiFileList2Fill style={{ fontSize: '2.5em' , color:"#f55423" }}/>
              </div>
              <div className="pt-5 text-lg font-medium text-black">Centralized Storage</div>
              <p className="pt-1 text-gray-700 text-center">Revision Notes, Flashcards, Essay plans, and Extra Reading - all just one click away.</p>
            </div>
            </Fade>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

