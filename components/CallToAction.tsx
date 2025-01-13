"use client";

export default function CallToAction() {
  return (
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
          className="rounded-tl-xl text-base rounded-bl-none px-6 py-3 mx-auto bg-gradient-to-r from-green-600 via-indigo-500 to-purple-700 hover:scale-95 text-white w-full rounded-md"
        >
          <a href="/post/create" className="text-white">
            Share your experience
          </a>
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
  );
}
