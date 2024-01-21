import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import NumberCounter from 'number-counter';
import { useInView } from 'react-intersection-observer';

const CommunitySection = () => {
  const [counterVisible, setCounterVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0% 0% -70% 0%', // Adjust the rootMargin to trigger when scrolled more than 70%
  });

  useEffect(() => {
    if (inView) {
      setCounterVisible(true);
    }
  }, [inView]);

  return (
    <section className="bg-gray-50 community-section">
      <div className="py-0 pb-0 px-4 mx-auto max-w-screen-xl pt-20">
        <div className="max-w-screen-md mb-2 lg:mb-16 mx-auto text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-black newtext-1">Join our ADHD <br /> Study Buddy Community</h2>
          <p className="mb-0 text-black">Access our exclusive community, find fellow ADHDers, learn effective study tools, and stay in the loop with updates and tutorials.</p>
        </div>

        {/* Image Container with Centering Classes */}
        <Fade>
          <div className="flex justify-center w-full">
            <Image
              src={`https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/community_demo.webp?v=${new Date().getTime()}`}
              alt="Join Our Community Mockup"
              width={600}
              height={400}
              className="mx-auto"
              ref={ref}
            />
          </div>
        </Fade>
        <div className="max-w-screen-xl px-4 py-1 mt-2 text-center lg:py-5 lg:px-6">
          <div className="max-w-screen-xl px-4 py-1 mt-2 text-center lg:py-5 lg:px-6">
            <dl className="grid max-w-screen-md text-gray-900 sm:grid-cols-e md:grid-cols-3 gap-4 mx-auto justify-items-center newclass-1">
              <div className="sm:flex sm:flex-col md:block md:w-auto">
                <div className={`flex flex-col items-center justify-center py-2 sm:w-full md:w-auto ${counterVisible ? 'animate-counter' : ''}`}>
                  <dt className="mb-1 text-3xl md:text-4xl font-bold"><NumberCounter end={1354} delay={4} /></dt>
                  <dd className="mb-4 font-light text-black">Fellow study buddies</dd>
                </div>
              </div>
              <div className="sm:flex sm:flex-col md:block md:w-auto">
                <div className={`flex flex-col items-center justify-center py-2 sm:w-full md:w-auto ${counterVisible ? 'animate-counter' : ''}`}>
                  <dt className="mb-1 text-3xl md:text-4xl font-bold"><NumberCounter end={27245} delay={4} /></dt>
                  <dd className="mb-4 font-light text-black">Notes created</dd>
                </div>
              </div>
              <div className="sm:flex sm:flex-col md:block md:w-auto">
                <div className={`flex flex-col items-center justify-center py-2 sm:w-full md:w-auto ${counterVisible ? 'animate-counter' : ''}`}>
                  <dt className="mb-1 text-3xl md:text-4xl font-bold"><NumberCounter end={51} delay={4} /></dt>
                  <dd className="mb-4 font-light text-black">Countries</dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
