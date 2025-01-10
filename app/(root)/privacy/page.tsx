import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container py-12 mx-auto px-6 md:px-12 lg:px-20">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          At DevJourney, we prioritize your privacy. This policy explains how we
          collect, use, and protect your personal information.
        </p>

        {/* Section 1: Information We Collect */}
        <section className="mb-8">
          <p className="text-base text-gray-600 my-4">
            Last updated: January 10, 2025
          </p>
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            1. Information We Collect
          </h2>
          <p className="text-gray-600">
            When you register using GitHub OAuth, we collect the following
            information:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Your GitHub username and profile picture.</li>
            <li>Your email address (if provided).</li>
            <li>Other public profile data from GitHub.</li>
          </ul>
        </section>

        {/* Section 2: How We Use Your Information */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-600">We use the information collected to:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Provide and improve the platform.</li>
            <li>Personalize your experience.</li>
            <li>Communicate with you about updates and features.</li>
          </ul>
        </section>

        {/* Section 3: Data Security */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            3. Data Security
          </h2>
          <p className="text-gray-600">
            We implement robust security measures to protect your data. However,
            no system is completely secure, and we cannot guarantee absolute
            security.
          </p>
        </section>

        {/* Section 4: Sharing Your Information */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            4. Sharing Your Information
          </h2>
          <p className="text-gray-600">
            We do not sell or share your personal information with third
            parties, except as required by law or to provide essential services.
          </p>
        </section>

        {/* Section 5: Your Rights */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            5. Your Rights
          </h2>
          <p className="text-gray-600">
            You have the right to access, modify, or delete your data. To
            exercise these rights, contact us at{" "}
            <a
              href="mailto:support@devjourney.com"
              className="text-blue-500 hover:underline"
            >
              support@sixtusdev.net
            </a>
            .
          </p>
          <a
            href="/terms"
            className="py-3 text-base text-blue-500 hover:underline"
          >
            Read our Terms and Conditions
          </a>
        </section>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
