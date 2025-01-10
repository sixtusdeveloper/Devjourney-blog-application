import React from "react";

const Documentation = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div
        className="w-full min-h-screen lg:min-h-[280px] bg-cover bg-center flex items-center justify-center text-center relative md:mt-8 mt-10 md:py-8 md:px-6"
        style={{
          backgroundImage: "url('/docs-bg.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-4xl text-white mx-auto space-y-6 px-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-wide">
            DevJourney Documentation
          </h1>
          <p className="sub-heading !max-w-2xl mx-auto text-slate-200">
            A comprehensive guide to get started, explore features, and make the
            most out of your journey as a developer on DevJourney.
          </p>
        </div>
      </div>

      <div className="container mx-auto py-8 px-6 md:px-12 lg:px-20">
        {/* Getting Started */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            Getting Started
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            DevJourney is designed to provide developers with a platform to
            document their coding experiences, share insights, and collaborate
            with peers. Follow these steps to get started:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Sign up for an account using your email or social login.</li>
            <li>
              Complete your profile to showcase your skills and interests.
            </li>
            <li>
              Explore posts from other developers or create your first blog
              post.
            </li>
          </ul>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Interactive Blog Editor
              </h3>
              <p className="text-gray-600">
                Create and edit posts using our intuitive markdown editor,
                complete with live preview and collaborative tools.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Developer Community
              </h3>
              <p className="text-gray-600">
                Connect with other developers to share knowledge, offer
                feedback, and grow together.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Personal Dashboard
              </h3>
              <p className="text-gray-600">
                Keep track of your posts, analytics, and interactions all in one
                place.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Resource Library
              </h3>
              <p className="text-gray-600">
                Access curated resources, including coding tutorials, guides,
                and tools to boost your learning.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            DevJourney makes documenting your journey easy and impactful:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-2">
            <li>Sign in and navigate to your dashboard.</li>
            <li>Create posts using the markdown editor.</li>
            <li>
              Engage with others by liking, commenting, or sharing their posts.
            </li>
            <li>Track your progress and interactions from your dashboard.</li>
          </ol>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="text-gray-600 mb-4">
            Have questions? Check out our FAQ section or contact support for
            assistance.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Can I edit my posts after publishing?</li>
            <li>How do I connect with other developers?</li>
            <li>Is my data secure on DevJourney?</li>
          </ul>
          <a className="py-2 text-blue-500 hover:underline" href="/FAQ">
            See more related questions
          </a>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-3xl font-bold text-gray-700 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            For support or further information, feel free to reach out at{" "}
            <a
              href="mailto:support@sixtusdev.net"
              className="text-blue-500 hover:underline"
            >
              support@sixtusdev.net
            </a>
            .
          </p>
          <a href="/contact" className="py-2 text-blue-500 hover:underline">
            You may as well react out through the contact page{" "}
          </a>
        </section>
      </div>
    </section>
  );
};

export default Documentation;
