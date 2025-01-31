"use client";

import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function CallToAction() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row p-2 md:p-6 border border-green-300 justify-center items-center rounded-tl-3xl rounded-br-3xl bg-gray-100 dark:bg-gray-900 shadow-lg">
        <div className="flex-1 flex flex-col justify-center p-4">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-3">
            Ready to Elevate Your Coding Skills?
          </h2>
          <p className="text-gray-500 dark:text-gray-300 mb-5">
            Join me on my journey at <strong>DevJourney</strong>, where I share
            insights, tutorials, and projects from my experience as a software
            engineer. Whether you're exploring new tools, diving into complex
            concepts, or seeking inspiration for your next project, there's
            something here for everyone. Let's learn, create, and grow together,
            one step at a time!
          </p>

          <button
            type="button"
            onClick={openModal}
            className="rounded-tl-xl text-base rounded-bl-none px-6 py-3 mx-auto bg-gradient-to-r from-green-600 via-indigo-500 to-purple-700 hover:scale-95 text-white w-full rounded-md"
          >
            Share your experience
          </button>
        </div>
        <div className="p-4 flex-1">
          <img
            src="https://cdn.sanity.io/images/tlr8oxjg/production/1ca7b34a8d5308a03ae186dfe72caabce0327fe2-1456x816.png?w=3840&q=100&fit=clip&auto=format"
            alt="DevJourney - Sixtusdev Blog"
            className="rounded-3xl"
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">
            {/* Close Icon */}
            <button onClick={closeModal} className="absolute top-3 right-3">
              <FaTimes
                className="text-gray-600 dark:text-gray-300 hover:text-red-500"
                size={20}
              />
            </button>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Sign in with GitHub to Share Your Experience
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You need to be signed in with your GitHub account to access the
              create post page and other awesome features of the blog.
            </p>

            <div className="flex justify-between">
              {/* "I've Logged in" Button */}
              <a
                href="/post/create"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md w-[48%] text-center"
              >
                I've Logged in
              </a>
              {/* "Let me log in" Button */}
              <button
                onClick={closeModal}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md w-[48%]"
              >
                Let me log in
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
