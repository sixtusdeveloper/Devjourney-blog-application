import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section
        className="w-full min-h-screen lg:min-h-[430px] bg-cover bg-center flex items-center justify-center text-center relative md:mt-12 mt-10 md:py-8 md:px-6"
        style={{
          backgroundImage: "url('/about-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 max-w-3xl text-white mx-auto space-y-6 px-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-wide">
            Inspiring growth, sparking creativity, and connecting innovators
            worldwide
          </h1>
          <p className="sub-heading !max-w-2xl mx-auto">
            Discover the story behind our journey to empower developers and
            foster a collaborative community for innovation and growth.
          </p>
          <Link href="/career">
            <button className="mx-auto mt-4 px-6 py-3 bg-gradient-to-r from-indigo-600 via-green-500 to-purple-600 hover:scale-95 text-white flex items-center cursor-pointer tracking-wide text-lg font-semibold rounded-full shadow-lg transition duration-300">
              Check Our Courses
            </button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-16 text-gray-800">
        <h2 className="text-3xl md:text-4xl text-gray-700 font-bold text-center mb-12">
          Our Mission and Vision
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/about-mission.webp"
              alt="Our Mission"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-base md:text-lg text-gray-600 leading-8 mb-6">
              At DevJourney, our mission is to inspire, educate, and connect
              developers worldwide. We believe in creating opportunities for
              individuals to share their ideas, grow their skills, and turn
              their dreams into reality through the power of technology.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-8">
              Our vision is to be the leading platform where developers and
              innovators can collaborate, learn, and thrive together. Whether
              you’re a beginner taking your first steps or a seasoned
              professional, DevJourney is here to support your growth every step
              of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full mx-auto px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto ">
          <h2 className="text-3xl text-gray-700 md:text-4xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8 bg-white rounded-lg shadow-md">
              <Image
                src="/innovate.webp"
                alt="Innovation"
                className="value-img text-center mx-auto"
                width={150}
                height={150}
              />
              <h3 className="text-xl md:text-2xl text-gray-700 font-semibold mb-4">
                Innovation
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-7">
                We embrace creativity and forward-thinking solutions to shape
                the future of technology.
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg shadow-md">
              <Image
                src="/collaborate.webp"
                alt="Collaboration"
                className="value-img text-center mx-auto"
                width={150}
                height={150}
              />
              <h3 className="text-xl md:text-2xl text-gray-700 font-semibold mb-4">
                Collaboration
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-7">
                Together, we achieve more. We foster a community of shared ideas
                and mutual support.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-md">
              <Image
                src="/excellence.webp"
                alt="Excellence"
                className="value-img text-center mx-auto"
                width={150}
                height={150}
              />
              <h3 className="text-xl md:text-2xl text-gray-700 font-semibold mb-4">
                Excellence
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-7">
                We strive for the highest quality in everything we do, setting
                benchmarks for others to follow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl text-gray-700 font-bold text-center mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Example Team Member */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/team-member01.png"
              alt="Team Member"
              width={150}
              height={150}
              className="rounded-full shadow-md team-member-photo"
            />
            <h3 className="text-base md:text-lg text-gray-700 font-semibold mt-4">
              Sixtus Aondoakaa
            </h3>
            <p className="text-sm text-gray-600">Founder & CEO</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="/team-member02.jpg"
              alt="Team Member"
              width={150}
              height={150}
              className="rounded-full shadow-md team-member-photo"
            />
            <h3 className="text-base md:text-lg text-gray-700 font-semibold mt-4">
              Ben Anderson
            </h3>
            <p className="text-sm text-gray-600">Team Lead</p>
          </div>
          {/* Add more team members as needed */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/team-member03.jpg"
              alt="Team Member"
              width={150}
              height={150}
              className="rounded-full shadow-md team-member-photo"
            />
            <h3 className="text-base md:text-lg text-gray-700 font-semibold mt-4">
              Frank Kpile
            </h3>
            <p className="text-sm text-gray-600">Data Analyst</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>
    </div>
  );
};

export default About;
