import React from "react";
import Image from "next/image";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { TiTick } from "react-icons/ti";

const BenefitsSection = () => {
  return (
    <section id="features" className="bg-white benefits-section">
      <div className="py-8 pb-12 px-4 mx-auto max-w-screen-xl sm:pt-4 lg:px-56">
        <div className="max-w-screen-md mx-auto text-center mb-2 mt-2">
          <h2 className="text-4xl tracking-tight font-bold text-gray-900 newtext-1">
            💤 Silence the chaos <br /> Channel the flow state ✨
          </h2>
          <p className="mt-8 text-gray-600 sm:text-xl text-gray-700">
            Silence the chaos. asdfsdafasdf
            <br />
            Channel the flow state. asdfsdafasdf
          </p>
        </div>

        <Fade>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-0 bg-gray-100 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* Image Container on Large Screens */}
            <div className="hidden lg:block">
              <Image
                width={2432}
                height={1442}
                src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/quickadd_ben.webp"
                alt="Flashcards Demo"
                style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
              />
            </div>

            {/* Content Container */}
            <div className="lg:pr-3 lg:pt-4">
              <div className="lg:max-w-lg p-3">
                <dl className="mt-1 max-w-xl space-y-2 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-0">
                    <dt className="flex inline font-semibold text-gray-900 mt-2 text-1xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                      <div className="flex-12">
                        <FaArrowUp
                          style={{ color: "#1AAE9F", fontSize: "40px" }}
                        />
                        <p className="mt-0 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                          More Hyper-focus,
                        </p>
                      </div>
                    </dt>
                  </div>
                  <div className="relative pl-0">
                    <dt className="flex inline font-semibold text-gray-900 mt-1 text-1xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                      <div className="flex-12">
                        <FaArrowDown
                          style={{ color: "#D3455B", fontSize: "40px" }}
                        />
                        <p className="mt-0 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                          Less Distractions
                        </p>
                      </div>
                    </dt>
                  </div>
                </dl>
                <p className="mt-3 text-lg leading-5 text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
                <dl className="mt-2 max-w-xl space-y-4 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-1">
                    <dt className="flex flex inline font-semibold text-gray-900">
                    <TiTick style={{color:"#1AAE9F" , fontSize:"28px"}}/> Bespoke ADHD Tools
                    </dt>
                  </div>
                  <div className="relative pl-1">
                    <dt className="flex flex inline font-semibold text-gray-900">
                    <TiTick style={{color:"#1AAE9F" , fontSize:"28px"}}/> Distraction-free-Zone.
                    </dt>
                  </div>
                  <div className="relative pl-1">
                    <dt className="flex inline font-semibold text-gray-900">
                      <TiTick style={{color:"#1AAE9F" , fontSize:"28px"}}/> Quickly Capture Ideas.
                    </dt>
                  </div>
                </dl>
              </div>
            </div>

            {/* Image Container on Mobile Screens */}
            <div className="block lg:hidden">
              <Image
                width={2432}
                height={1442}
                src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/quickadd_ben.webp"
                alt="Flashcards Demo"
                style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
              />
            </div>
          </div>
        </Fade>
        <hr />

        <Fade>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-0 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg p-3">
                <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Finally, no more <br />
                  forgotten deadline 😅
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
                <dl className="mt-10 max-w-xl space-y-4 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-1">
                    <dt className="flex inline font-semibold text-gray-900">
                      <TiTick style={{color:"#1AAE9F" , fontSize:"28px"}}/>Build in Reminder & Deadline
                    </dt>
                  </div>
                  <div className="relative pl-1">
                    <dt className="flex inline font-semibold text-gray-900">
                      <TiTick style={{color:"#1AAE9F" , fontSize:"28px"}}/> Prioritise Important Tasks.
                    </dt>
                  </div>

                  <div className="relative pl-1">
                    <dt className="flex inline font-semibold text-gray-900">
                      <TiTick style={{color:"#1AAE9F" , fontSize:"28px"}}/> Connect Favourite Apps.
                    </dt>
                  </div>
                </dl>
              </div>
            </div>
            <Image
              width={2432}
              height={1442}
              src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/flashcards_ben.webp"
              alt="Flashcards Demo"
              style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
            />
            <div></div>
          </div>
        </Fade>
        <hr />

        <Fade>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-0 bg-gray-100 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* Image Container on Large Screens */}
            <Image
              width={2432}
              height={1442}
              src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/focus_tools_ben.webp"
              alt="Focus Tools Demo"
              style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
              className="hidden lg:block"
            />

            {/* Content Container */}
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg p-3">
                <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Built around ADHD
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
                <dl className="mt-10 max-w-xl space-y-4 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-1">
                    <dt className="flex inline font-semibold text-gray-900">
                      <TiTick style={{color:"#1AAE9F" , fontSize:"28px"}}/> Custom-built, sounds, and tools
                    </dt>
                  </div>
                  <div className="relative pl-1">
                    <dt className="flex inline font-semibold text-gray-900">
                      <TiTick style={{color:"#1AAE9F" , fontSize:"28px"}}/> ADHD focus timers
                    </dt>
                  </div>
                  <div className="relative pl-1">
                    <dt className="flex inline font-semibold text-gray-900">
                      <TiTick style={{color:"#1AAE9F" , fontSize:"28px"}}/> Sounds, and Tools
                    </dt>
                  </div>
                </dl>
              </div>
            </div>

            {/* Image Container on Mobile Screens */}
            <Image
              width={2432}
              height={1442}
              src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/focus_tools_ben.webp"
              alt="Focus Tools Demo"
              style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
              className="block lg:hidden"
            />
          </div>
        </Fade>
        <hr />

        <Fade>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-0 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg p-3">
                <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Work Smarter. Much Smarter.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
                <dl className="mt-10 max-w-xl space-y-4 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-1">
                    <dt className="flex inline font-semibold text-gray-900">
                      <TiTick style={{color:"#1AAE9F" , fontSize:"28px"}}/> Bespoke ADHD Tools
                    </dt>
                  </div>
                  <div className="relative pl-1">
                    <dt className="flex inline font-semibold text-gray-900">
                      <TiTick style={{color:"#1AAE9F" , fontSize:"28px"}}/> Distraction-free-Zone.
                    </dt>
                  </div>

                  <div className="relative pl-1">
                    <dt className="flex inline font-semibold text-gray-900">
                      <TiTick style={{color:"#1AAE9F" , fontSize:"28px"}}/> Quickly Capture Ideas.
                    </dt>
                  </div>
                </dl>
              </div>
            </div>
            <Image
              width={2432}
              height={1442}
              src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/essayplans_ben.webp"
              alt="Flashcards Demo"
              style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
            />
            <div></div>
          </div>
        </Fade>
        <hr />

        {/* <div className="md:grid md:grid-cols-2 gap-x-16 gap-y-4 items-center">
          <div className="flex flex-col items-center text-center mb-2 mt-2">
            <Image
              width={320}
              height={320}
              src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/quickadd_ben.webp"
              alt="Quick Add Demo"
            />
                    <h3 className="text-xl font-bold text-black">More Hyper-focus, Less Distractions </h3>
            <p className="text-gray-700">Capture ideas rapidly, block out noise, maintain flow.</p>
          </div>

          <div className="flex flex-col items-center text-center mb-2 mt-2">
            <Image
              width={320}
              height={320}
              src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/flashcards_ben.webp"
              alt="Flashcards Demo"
            />
            <h3 className="text-xl font-bold text-black">Save Time & Effort</h3>
            <p className="text-gray-700">Create, Revise, Test. All in one place.</p>
          </div>
                
          <div className="flex flex-col items-center text-center mb-2 mt-2">
            <Image
              width={320}
              height={320}
              src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/focus_tools_ben.webp"
              alt="Focus Tools Demo"
            />
            <h3 className="text-xl font-bold text-black">Built around ADHD</h3>
            <p className="text-gray-700">Custom-built ADHD focus timers, sounds, and tools</p>
          </div>

          <div className="flex flex-col items-center text-center mb-2 mt-2">
            <Image
              width={320}
              height={320}
              src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/essayplans_ben.webp"
              alt="Essay plans demo"
            />
            <h3 className="text-xl font-bold text-black">Work Smarter. Much Smarter.</h3>
            <p className="text-gray-500">Let AI generate Essay Plans, Summaries & more!</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default BenefitsSection;
