"use client";

import React, { useState } from "react";
import Image from "next/image";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="min-h-screen w-full bg-gray-900 bg-cover bg-center relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Container */}
      <div className="relative px-4 md:px-10 py-20 max-w-7xl mx-auto text-white">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-4">Get in Touch</h1>
          <p className="text-xl mb-10">
            We'd love to hear from you. Fill out the form below or reach out to
            us through other contact methods.
          </p>
        </div>

        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-lg mb-6">
              We are available to help you with any inquiries you might have.
            </p>
            <div className="flex items-center mb-4">
              <Image
                src="/email-icon.svg"
                alt="Email"
                width={30}
                height={30}
                className="mr-4"
              />
              <a
                href="mailto:contact@yourdomain.com"
                className="text-xl hover:text-green-400"
              >
                contact@yourdomain.com
              </a>
            </div>
            <div className="flex items-center mb-4">
              <Image
                src="/phone-icon.svg"
                alt="Phone"
                width={30}
                height={30}
                className="mr-4"
              />
              <span className="text-xl">+1 234 567 890</span>
            </div>
            <div className="flex items-center mb-4">
              <Image
                src="/location-icon.svg"
                alt="Location"
                width={30}
                height={30}
                className="mr-4"
              />
              <span className="text-xl">123 Street, City, Country</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white text-gray-900 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-lg font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  rows={4}
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
