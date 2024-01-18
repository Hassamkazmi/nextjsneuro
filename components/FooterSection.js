import React from 'react';
import Image from 'next/image';
import { FaArrowUp } from 'react-icons/fa';

const FooterSection = () => {
  const scrollToTop = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="p-4 bg-black md:p-8 lg:p-10">
      <div className="mx-auto max-w-screen-xl text-center">
        <a href="#!" onClick={scrollToTop} className="flex justify-center items-center text-2xl font-semibold text-white cursor-pointer">
          <Image width={36} height={36} className="mr-3 sm:h-9" src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/logo.webp" alt="NeuroNotes Logo" />
          Neuro Notion ©
        </a>
        <p className="my-6 text-white">The Ultimate Notion Template for Silencing the ADHD Chaos.</p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-400">
          <li>
            <a href="#about" className="mr-4 hover:underline md:mr-6 ">About</a>
          </li>
          <li>
            <a href="#faqs" className="mr-4 hover:underline md:mr-6">FAQs</a>
          </li>
          <li>
            <a href="mailto:josh@neuro-notion.com" className="mr-4 hover:underline md:mr-6">Contact</a>
          </li>
        </ul>
        <span className="text-sm text-white sm:text-center dark:text-gray-400">
          Neuro Notion © 2023<a href="#hero" className="hover:underline"></a>. All Rights Reserved.
        </span>
      </div>
      <a
        href="#!"
        onClick={scrollToTop}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-500 text-black rounded-full p-2 cursor-pointer new121"
        title="Scroll to Top"
      >
        <FaArrowUp size={24} />
      </a>
    </footer>
  );
};

export default FooterSection;
