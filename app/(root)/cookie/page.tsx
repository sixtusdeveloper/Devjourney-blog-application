import React from "react";

const CookiePolicy = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container py-12 mx-auto px-6 md:px-12 lg:px-20">
        <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
        <p className="text-lg mb-4">
          This Cookie Policy explains how DevJourney ("me", "our", or "us") uses
          cookies and similar technologies to recognize you when you visit my
          website at{" "}
          <span className="text-blue-600">
            <a href="https://www.sixtusdev.net" target="_blank">
              www.sixtusdev.net
            </a>
          </span>{" "}
          (the "Website"). It explains what these technologies are and why we
          use them, as well as your rights to control our use of them.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">What are cookies?</h2>
        <p className="text-base mb-4">
          Cookies are small data files that are placed on your computer or
          mobile device when you visit a website. Cookies are widely used by
          website owners to make their websites work more efficiently, as well
          as to provide reporting information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Why do we use cookies?
        </h2>
        <p className="text-base mb-4">
          We use cookies to improve your browsing experience, enable certain
          functionalities, analyze website performance, and offer personalized
          content and services. Specifically, we use cookies to:
        </p>
        <ul className="list-disc pl-6 text-base mb-4">
          <li>
            Authenticate users via GitHub OAuth and maintain secure sessions.
          </li>
          <li>Understand user preferences and improve user experience.</li>
          <li>Monitor website performance and gather analytics.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Types of cookies we use
        </h2>
        <p className="text-base mb-4">
          Our Website uses the following types of cookies:
        </p>
        <ul className="list-disc pl-6 text-base mb-4">
          <li>
            <strong>Essential Cookies:</strong> These cookies are necessary for
            the Website to function properly. For example, they help us manage
            your login sessions securely.
          </li>
          <li>
            <strong>Performance Cookies:</strong> These cookies collect
            information about how you interact with our Website, such as pages
            visited and any error messages encountered.
          </li>
          <li>
            <strong>Functional Cookies:</strong> These cookies enable enhanced
            functionality and personalization, such as remembering your
            preferences.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Managing your cookie preferences
        </h2>
        <p className="text-base mb-4">
          You have the right to decide whether to accept or reject cookies. You
          can exercise your cookie rights by setting your preferences in the
          cookie consent manager displayed on our Website. Additionally, most
          web browsers allow you to control cookies through their settings.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Third-party cookies
        </h2>
        <p className="text-base mb-4">
          We may use third-party services like analytics providers to help us
          understand how you interact with our Website. These third parties may
          set their own cookies on your device.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Updates to this policy
        </h2>
        <p className="text-base mb-4">
          We may update this Cookie Policy from time to time to reflect changes
          in our practices, legal requirements, or other reasons. We encourage
          you to review this page periodically to stay informed about our use of
          cookies.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact us</h2>
        <p className="text-base mb-4">
          If you have any questions or concerns about our use of cookies, please
          contact us at:
        </p>
        <ul className="list-none text-base mb-4">
          <li>
            Email:{" "}
            <a href="mailto:support@sixtusdev.net" className="text-blue-600">
              support@sixtusdev.net
            </a>
          </li>
          <li>
            Phone:{" "}
            <a href="tel:+2349022048105" className="text-blue-600">
              +234 (90) 2204 8105
            </a>
          </li>
        </ul>

        <p className="text-base text-gray-600 mt-8">
          By using our Website, you agree to the use of cookies as described in
          this policy.
        </p>

        <p className="text-base text-gray-600 mt-4">
          Last updated: January 10, 2025
        </p>
      </div>
    </section>
  );
};

export default CookiePolicy;
