import Image from "next/image";

export default function Home() {
  return (
    <>
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: "url('/hero-bg.avif')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl text-white space-y-6">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-wide">
            Welcome to Devjourney Blog
          </h1>
          <p className="text-lg sm:text-xl font-medium leading-relaxed">
            Discover the ultimate platform for tech insights, meaningful
            connections, and groundbreaking collaborations. Share your stories,
            ideas, and expertise with a vibrant community of innovators.
          </p>
          <button className="mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-md shadow-lg transition duration-300">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
}
