import React from "react";
import Image from "next/image";

const PricingSection = () => {
  const logBasicPackageEvent = () => {
    // Log event to Facebook Pixel for Basic package
    fbq("trackCustom", "BasicBuyNowClick");
  };

  const logStandardPackageEvent = () => {
    // Log event to Facebook Pixel for Standard package
    fbq("trackCustom", "StandardBuyNowClick");
  };

  return (
    <section id="pricing" className="bg-white payment_section mt-20 mb-20">
      <div className="py-8 px-4 md:px-52">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-black newtext-1">
            One Payment, Unlimited Usage.
          </h2>
          <p className="mb-5 font-light text-gray-800 sm:text-xl">
            Lifetime access, technical support, no subscription fees.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Pricing Card for Basic */}
          <div className="flex flex-col p-6 w-80 md:w-72 text-center text-black bg-white rounded-2xl border border-gray-200 mb-5 shadow-xl">
            <h3 className="mb-4 text-2xl font-semibold">Basic</h3>
            <p className="font-light text-black sm:text-lg">
              One-time payment.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-bold">$9.99</span>
            </div>
            <hr className="border-1 border-gray-300 mb-8" />
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li>
                <Image
                  className="inline-block h-6 w-6 mr-2"
                  src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/icon/dark/check.svg"
                  width={800} // Set the width of the image (you can adjust as needed)
                  height={566} // Set the height of the image (adjust for the aspect ratio of your image)
                  alt="Tick Icon"
                />{" "}
                All-in-one study system.
              </li>
              <li>
                <Image
                  className="inline-block h-6 w-6 mr-2"
                  src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/icon/dark/check.svg"
                  width={800} // Set the width of the image (you can adjust as needed)
                  height={566} // Set the height of the image (adjust for the aspect ratio of your image)
                  alt="Tick Icon"
                />{" "}
                Built-in focus sounds.
              </li>
              <li>
              ❌
                Access to community.
              </li>
              <li>
              ❌
                Tutorials included.
              </li>
              <li className="text-black-700">
              ❌
                Access to updates.
              </li>
            </ul>
            <a
              href="https://buy.stripe.com/4gwaGP9vF9F84zmcMM"
              className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={logBasicPackageEvent}
            >
              Buy Now
            </a>
          </div>
          {/* Pricing Card for Standard */}
          <div className="relative flex flex-col p-6 w-80 md:w-86 text-center text-white bg-black rounded-2xl border border-gray-200 shadow-xl mt-8  md:mt-0">
            
          
          <div
      className="absolute top-0 right-0 px-3 py-1 bg-blue-600 rounded-bl rounded-tr text-white text-xs uppercase font-bold shimmer-effect"
      style={{ transform: "translate(25%, -50%)" }}
    >
      Most Popular
    </div>
            <h3 className="mb-4 text-2xl font-semibold text-white">Standard</h3>
            <p className="font-light text-white sm:text-lg">
              One-time payment.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-bold">$19.99</span>
            </div>
            <hr className="border-1 border-gray-300 mb-8" />
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li>
                <Image
                  className="inline-block h-6 w-6 mr-2"
                  src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/icon/light/check.svg"
                  width={800} // Set the width of the image (you can adjust as needed)
                  height={566} // Set the height of the image (adjust for the aspect ratio of your image)
                  alt="Tick Icon"
                />{" "}
                All-in-one study system.
              </li>
              <li>
                <Image
                  className="inline-block h-6 w-6 mr-2"
                  src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/icon/light/check.svg"
                  width={800} // Set the width of the image (you can adjust as needed)
                  height={566} // Set the height of the image (adjust for the aspect ratio of your image)
                  alt="Tick Icon"
                />{" "}
                Built-in focus sounds.
              </li>
              <li>
                <Image
                  className="inline-block h-6 w-6 mr-2"
                  src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/icon/light/check.svg"
                  width={800} // Set the width of the image (you can adjust as needed)
                  height={566} // Set the height of the image (adjust for the aspect ratio of your image)
                  alt="Tick Icon"
                />{" "}
                AI-generation tutorials.
              </li>
              <li>
                <Image
                  className="inline-block h-6 w-6 mr-2"
                  src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/icon/light/check.svg"
                  width={800} // Set the width of the image (you can adjust as needed)
                  height={566} // Set the height of the image (adjust for the aspect ratio of your image)
                  alt="Tick Icon"
                />{" "}
                Tutorials included.
              </li>
              <li>
                <Image
                  className="inline-block h-6 w-6 mr-2"
                  src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/icon/light/check.svg"
                  width={800} // Set the width of the image (you can adjust as needed)
                  height={566} // Set the height of the image (adjust for the aspect ratio of your image)
                  alt="Tick Icon"
                />{" "}
                Community & Updates.
              </li>
            </ul>
            <a
              href="https://buy.stripe.com/fZe2ajdLVbNg3vifZ1"
              className="StripeStandardPlan text-black bg-white hover:bg-gray-200 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={logStandardPackageEvent}
            >
              Buy Now
            </a>
          </div>

          <div className="flex flex-col p-6 w-80 md:w-72 text-center text-black bg-gray-200 rounded-2xl border border-gray-200 mb-5 shadow-xl">
            <h3 className="mb-4 text-2xl font-semibold">Premium</h3>
            <p className="font-light text-black sm:text-lg">
              One-time payment.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-bold">$44.99</span>
            </div>
            <hr className="border-1 border-gray-300 mb-8" />
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li>
                <Image
                  className="inline-block h-6 w-6 mr-2"
                  src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/icon/dark/check.svg"
                  width={800} // Set the width of the image (you can adjust as needed)
                  height={566} // Set the height of the image (adjust for the aspect ratio of your image)
                  alt="Tick Icon"
                />{" "}
                All benefits of Standard.
              </li>
              <li>
                <Image
                  className="inline-block h-6 w-6 mr-2"
                  src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/icon/dark/check.svg"
                  width={800} // Set the width of the image (you can adjust as needed)
                  height={566} // Set the height of the image (adjust for the aspect ratio of your image)
                  alt="Tick Icon"
                />{" "}
                Access to exclusive ADHD Study Tips Newsletter.
              </li>
              <li>
                <Image
                  className="inline-block h-6 w-6 mr-2"
                  src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/icon/dark/check.svg"
                  width={800} // Set the width of the image (you can adjust as needed)
                  height={566} // Set the height of the image (adjust for the aspect ratio of your image)
                  alt="Tick Icon"
                />{" "}
                1:1 15-minutes intro call with the founder.
              </li>
              <li>
                <Image
                  className="inline-block h-6 w-6 mr-2"
                  src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/icon/dark/check.svg"
                  width={800} // Set the width of the image (you can adjust as needed)
                  height={566} // Set the height of the image (adjust for the aspect ratio of your image)
                  alt="Tick Icon"
                />{" "}
                Early access to future tools and templates.
              </li>
             
            </ul>
            <a
              href="https://buy.stripe.com/4gwaGP9vF9F84zmcMM"
              className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={logBasicPackageEvent}
            >
              Buy Now
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
