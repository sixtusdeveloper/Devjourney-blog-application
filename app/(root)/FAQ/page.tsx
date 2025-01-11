// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { faqs } from "@/data/faq-data"; // Import FAQs data

// const FAQPage = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const toggleAccordion = (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   // Inline CSS for background image
//   const backgroundStyle: React.CSSProperties = {
//     backgroundImage: 'url("/faq-bg.webp")',
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     height: "100vh",
//     overflowY: "scroll",
//     scrollbarWidth: "none", // Firefox
//     msOverflowStyle: "none", // IE and Edge
//   };

//   return (
//     <section style={backgroundStyle} className="min-h-screen w-full pt-20">
//       <div className="px-4 md:px-10 max-w-4xl mx-auto py-10">
//         <h1 className="text-4xl lg:text-5xl font-bold text-white my-8 tracking-wide text-center">
//           Frequently Asked Questions (FAQ)
//         </h1>
//         <p className="text-lg lg:text-xl text-gray-300 mb-8 sm:text-start text-center">
//           Welcome to my FAQ page! Here you can find answers to the most common
//           questions about my platform.
//         </p>
//         <div className="bg-[rgba(0,0,0,0.5)] rounded-xl border border-gray-800 p-6 shadow-lg">
//           {faqs.map((faq, index) => (
//             <div key={index} className="border-b border-gray-700">
//               <div
//                 className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-700 transition-all duration-300"
//                 onClick={() => toggleAccordion(index)}
//               >
//                 <h2 className="text-white text-xl">{faq.question}</h2>
//                 <span className="text-2xl text-blue-500">
//                   {activeIndex === index ? "−" : "+"}
//                 </span>
//               </div>
//               {activeIndex === index && (
//                 <div className="p-4 text-gray-300">
//                   <p>{faq.answer}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="py-4 text-center mt-8">
//           <h2 className="text-center text-slate-100">
//             Did you find these Questions and Answers helpful?
//           </h2>
//           <div className="flex py-4 justify-center items-center gap-2">
//             <button className="ring-1 text-slate-200 text-base px-4 py-2 rounded-lg hover:bg-blue-600">
//               Yes they were
//             </button>
//             <button className="ring-1 text-slate-200 text-base px-4 py-2 rounded-lg hover:bg-red-600">
//               No, they weren't
//             </button>
//           </div>
//         </div>

//         <div className="py-4 text-center mt-10">
//           <p className="text-gray-300">
//             Could not find what you're looking for?{" "}
//             <a href="/contact" className="text-green-500 hover:underline ml-2">
//               Message me
//             </a>
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQPage;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { faqs } from "@/data/faq-data"; // Import FAQs data

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleFeedback = (response: string) => {
    setFeedback(response);
    setShowModal(true);
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

        <div className="py-4 text-center mt-8">
          <h2 className="text-center text-slate-100">
            Did you find these Questions and Answers helpful?
          </h2>
          <div className="flex py-4 justify-center items-center gap-2">
            <button
              className="ring-1 text-slate-200 text-base px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={() => handleFeedback("yes")}
            >
              Yes, they were
            </button>
            <button
              className="ring-1 text-slate-200 text-base px-4 py-2 rounded-lg hover:bg-red-600"
              onClick={() => handleFeedback("no")}
            >
              No, they weren't
            </button>
          </div>
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

      {/* Modal for Feedback */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full text-center">
            {feedback === "yes" ? (
              <>
                <div className="text-4xl text-green-500 mb-4">👍</div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Glad you find it helpful!
                </h3>
                <p className="text-gray-600 mt-4">
                  If you need any other questions, kindly reach out using the
                  message link below this page.
                </p>
                <a
                  href="/contact"
                  className="text-green-500 hover:underline mt-4 block"
                >
                  Message me
                </a>
              </>
            ) : (
              <>
                <div className="text-4xl text-red-500 mb-4">👎</div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Sorry to hear that!
                </h3>
                <p className="text-gray-600 mt-4">
                  If you need further assistance, feel free to reach out using
                  the message link below.
                </p>
                <a
                  href="/contact"
                  className="text-green-500 hover:underline mt-4 block"
                >
                  Message me
                </a>
              </>
            )}
            <button
              className="mt-6 px-6 py-2 bg-gray-700 text-white rounded-full"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default FAQPage;
