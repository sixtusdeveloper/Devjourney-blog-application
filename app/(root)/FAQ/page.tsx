"use client";

import React, { useState } from "react";
import Image from "next/image";
import { faqs } from "@/data/faq-data"; // Import FAQs data

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Inline CSS for background image
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: 'url("/faq-bg.webp")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    overflowY: "scroll",
    scrollbarWidth: "none", // Firefox
    msOverflowStyle: "none", // IE and Edge
  };

  return (
    <section style={backgroundStyle} className="min-h-screen w-full pt-20">
      <div className="px-4 md:px-10 max-w-4xl mx-auto py-10">
        <h1 className="text-4xl lg:text-5xl font-bold text-white my-8 tracking-wide text-center">
          Frequently Asked Questions (FAQ)
        </h1>
        <p className="text-lg lg:text-xl text-gray-300 mb-8 sm:text-start text-center">
          Welcome to my FAQ page! Here you can find answers to the most common
          questions about my platform.
        </p>
        <div className="bg-[rgba(0,0,0,0.5)] rounded-xl border border-gray-800 p-6 shadow-lg">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700">
              <div
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-700 transition-all duration-300"
                onClick={() => toggleAccordion(index)}
              >
                <h2 className="text-white text-xl">{faq.question}</h2>
                <span className="text-2xl text-blue-500">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="p-4 text-gray-300">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="py-4 text-center mt-10">
          <p className="text-gray-300">
            Could not find what you're looking for?{" "}
            <a href="/contact" className="text-green-500 hover:underline ml-2">
              Message me
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
