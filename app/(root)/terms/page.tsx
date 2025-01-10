import React from "react";

const TermCondition = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container py-12 mx-auto px-6 md:px-12 lg:px-20">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Terms and Conditions
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Welcome to DevJourney! By using our services, you agree to comply with
          the following terms and conditions. Please read them carefully.
        </p>

        {/* Section 1: Introduction */}
        <section className="mb-8">
          <p className="text-base text-gray-600 my-4">
            Last updated: January 10, 2025
          </p>
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            1. Introduction
          </h2>
          <p className="text-gray-600">
            DevJourney is a platform designed to help developers document their
            coding journey, share insights, and collaborate. By accessing our
            website, you agree to these terms and our privacy policy.
          </p>
        </section>

        {/* Section 2: Account Registration */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            2. Account Registration
          </h2>
          <p className="text-gray-600">
            To access certain features of the platform, you must register an
            account using GitHub OAuth. By doing so, you authorize us to access
            and use your GitHub profile information in accordance with our
            privacy policy.
          </p>
        </section>

        {/* Section 3: User Conduct */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            3. User Conduct
          </h2>
          <p className="text-gray-600">
            You agree to use DevJourney responsibly and to avoid activities
            that:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Violate any laws or regulations.</li>
            <li>Infringe on the intellectual property rights of others.</li>
            <li>Disrupt the functionality of the platform.</li>
            <li>Share harmful or inappropriate content.</li>
          </ul>
        </section>

        {/* Section 4: Intellectual Property */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            4. Intellectual Property
          </h2>
          <p className="text-gray-600">
            All content on DevJourney, including text, graphics, and logos, is
            the intellectual property of DevJourney or its users. You may not
            copy, distribute, or reproduce any content without proper
            authorization.
          </p>
        </section>

        {/* Section 5: Termination */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            5. Termination
          </h2>
          <p className="text-gray-600">
            We reserve the right to terminate your access to DevJourney at any
            time if you violate these terms or engage in harmful activities.
          </p>
        </section>

        {/* Section 6: Limitation of Liability */}
        <section>
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            6. Limitation of Liability
          </h2>
          <p className="text-gray-600">
            DevJourney is provided on an "as is" basis. We are not responsible
            for any losses or damages arising from your use of the platform.
          </p>

          <a
            href="/privacy"
            className="py-3 text-base text-blue-500 hover:underline"
          >
            Read our Privacy Policy
          </a>
        </section>
      </div>
    </section>
  );
};

export default TermCondition;
