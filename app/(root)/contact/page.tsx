"use client";
import React from "react";

const Contact = () => {
  return (
    <>
      <section className="w-full mx-auto">
        <div
          className="w-full min-h-screen lg:min-h-[430px] bg-cover bg-center flex items-center justify-center text-center relative md:mt-12 mt-10 md:py-8 md:px-6"
          style={{
            backgroundImage: "url('/about-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="text-center relative z-10 max-w-4xl mx-auto space-y-6 px-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-100 tracking-wide-34-bold">
              Let's Discuss About Your Career!
            </h1>
            <p className="text-base font-semibold !max-w-2xl mx-auto text-slate-200 py-2 leading-6">
              Have questions? We’re here to help you with all your housing
              needs. Whether you’re buying, renting, or investing, feel free to
              reach out to us.
            </p>
            <button></button>
          </div>
        </div>
      </section>

      <section className="contact-details w-full py-12 px-6">
        <div className="contact-section max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-700 py-2">
            Our Contact Information
          </h2>
          <p className="text-base font-sans font-semibold text-gray-600">
            If you would like to connect with us or need assistance navigating
            your development journey, here’s how you can get in touch:
          </p>

          <div className="contact-info">
            <div className="info-item p-4 border rounded-lg bg-slate-100 shadow-md">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 py-2">
                Email Us
              </h3>
              <p className="text-base font-medium text-gray-600">
                <a href="mailto:contact@sixtusdev.net">contact@sixtusdev.net</a>
              </p>
            </div>

            <div className="info-item p-4 border rounded-lg bg-slate-100 shadow-md">
              <h3 className="text-xl sm:text-2xl font-smeibold text-gray-700 py-2">
                Call Us
              </h3>
              <p className="text-base font-medium text-gray-600">
                <a href="tel:+1234567890">+ (234) 902 2048 105</a>
              </p>
            </div>

            <div className="info-item bg-slate-100 p-4 border rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 py-2">
                Visit Our Office
              </h3>
              <p className="text-base font-semibold text-gray-600">
                96 Housing St, Suite 400
                <br />
                Lagos State, Nigeria
              </p>
            </div>
          </div>
        </div>

        <div className="contact-section contact-section max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 py-2">
            Our Location
          </h2>
          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
