// export default Courses;
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/components/Modal";
import { courses } from "@/data/course-data"; // Import the course data

const Courses = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  const handleCardClick = (course: any) => {
    setSelectedCourse(course);
    setModalOpen(true);
  };

  return (
    <section className="mt-16 bg-gray-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-20 z-10">
        <div className="container mx-auto flex flex-col items-center text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold">
            Unlock Your Potential with Our Courses
          </h1>
          <p className="mt-4 max-w-2xl text-lg">
            Empower your journey with cutting-edge courses designed to enhance
            your skills and accelerate your growth in technology, creativity,
            and innovation.
          </p>
          <Link href="#course-list">
            <button className="mt-6 px-6 py-4 bg-gradient-to-r from-green-500 via-indigo-600 to-purple-800 font-semibold rounded-full shadow-lg hover:scale-95">
              Explore Courses
            </button>
          </Link>
        </div>
        <Image
          src="/courses-hero.avif"
          alt="Courses Hero"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="opacity-20 absolute inset-0"
        />
      </div>

      {/* Courses Section */}
      <div id="course-list" className="py-16 w-full bg-white">
        <div className="container relative max-w-6xl px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-10">
            Featured Courses
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm">{course.description}</p>
                  <button
                    onClick={() => handleCardClick(course)}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-100">
          Ready to Start Your Learning Journey?
        </h3>
        <p className="text-lg text-slate-200 max-w-2xl mx-auto mb-6">
          Join thousands of learners who have advanced their careers with our
          expertly crafted courses.
        </p>
        <Link href="/">
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100">
            Get Started
          </button>
        </Link>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title={selectedCourse?.title}
        content={selectedCourse?.fullDetails}
        image={selectedCourse?.image} // Pass image as prop to the modal
      />
    </section>
  );
};

export default Courses;
