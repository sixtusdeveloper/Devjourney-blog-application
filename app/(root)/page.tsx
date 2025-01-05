import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import PostCard from "@/components/PostCard";
import { PostTypeCard } from "@/types";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      _id: 1,
      views: 40,
      author: { _id: 1, name: "John Doe" },
      image: "/post-one.avif",
      excerpt:
        "Learn how to build a blog with Next.js, the React framework that provides a great developer experience with a powerful feature set.",
      category: "React",
      title: "How to build a blog with Next.js",
    },
    {
      _createdAt: new Date(),
      _id: 2,
      views: 23,
      author: { _id: 2, name: "Jackson Ben" },
      image: "/post-two.avif",
      excerpt:
        "Learn how to setup your node server with Express.js, the most popular Node.js framework.",
      category: "Node.js",
      title: "How to setup your node server",
    },
    {
      _createdAt: new Date(),
      _id: 3,
      views: 100,
      author: { _id: 3, name: "Stephen Smith" },
      image: "/post-three.avif",
      excerpt:
        "Learn how to build an e-commerce site with Next.js, the React framework that provides a great developer experience with a powerful feature set.",
      category: "Next.js",
      title: "How to build an e-commerce site with Next.js",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: "url('/hero-bg.avif')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl text-white mx-auto space-y-6">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-wide">
            Welcome to Devjourney Blog
          </h1>
          <p className="sub-heading !max-w-3xl mx-auto">
            Discover the ultimate platform for tech insights, meaningful
            connections, and groundbreaking collaborations. Share your stories,
            ideas, and expertise with a vibrant community of innovators.
          </p>
          <button className="mx-auto mt-4 px-6 py-3 bg-gradient-to-r from-indigo-600 via-green-500 to-purple-600 text-white flex items-center cursor-pointer tracking-wide text-lg font-semibold rounded-md shadow-lg transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Search form Section */}
      <section className="py-12 px-6">
        <SearchForm query={query} />
      </section>

      {/* Search results */}
      <section className="section_container py-12 px-6">
        <p className="text-2xl font-bold text-gray-700">
          {query ? `Search results for "${query}"` : "All Posts"}
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {posts?.length > 0 ? (
            posts.map((post: PostTypeCard, index: number) => (
              <PostCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No posts found</p>
          )}
        </ul>
      </section>
    </>
  );
}
