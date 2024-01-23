import React from 'react';
import Image from 'next/image';
import {  Slide,Fade } from 'react-awesome-reveal';
import NumberCounter from 'number-counter';
import { useInView } from 'react-intersection-observer';

const Counter = ({ value, label }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="sm:flex sm:flex-col md:block md:w-auto" ref={ref}>
      <div className={`flex flex-col items-center justify-center py-2 sm:w-full md:w-auto ${inView ? 'animate-counter' : ''}`}>
        <dt className="mb-1 text-3xl md:text-4xl font-bold">
          <NumberCounter end={value} delay={8} />
        </dt>
        <dd className="mb-4 font-light text-black">{label}</dd>
      </div>
    </div>
  );
};

const CommunitySection = () => {
  return (
    <section className="bg-gray-50 community-section">
      <div className="py-0 pb-0 px-4 mx-auto max-w-screen-xl pt-20">
        <div className="max-w-screen-md mb-2 lg:mb-16 mx-auto text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-black newtext-1">Join our ADHD <br /> Study Buddy Community</h2>
          <p className="mb-0 text-black">Access our exclusive community, find fellow ADHDers, learn effective study tools, and stay in the loop with updates and tutorials.</p>
        </div>

        {/* Image Container with Centering Classes */}
        <Slide direction='down'>
          <div className="flex justify-center w-full">
            <Image
              src={`https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/community_demo.webp?v=${new Date().getTime()}`}
              alt="Join Our Community Mockup"
              width={600}
              height={400}
              className="mx-auto"
            />
          </div>
        </Slide>

        <Fade>
          <div className="max-w-screen-xl px-4 py-1 mt-2 text-center lg:py-5 lg:px-6">
            <div className="max-w-screen-xl px-4 py-1 mt-2 text-center lg:py-5 lg:px-6">
              <dl className="grid max-w-screen-md text-gray-900 sm:grid-cols-e md:grid-cols-3 gap-4 mx-auto justify-items-center newclass-1">
                <Counter value={1354} label="Fellow study buddies" delay={8} />
                <Counter value={27245} label="Notes created" delay={8} />
                <Counter value={51} label="Countries" delay={8} />
              </dl>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default CommunitySection;
