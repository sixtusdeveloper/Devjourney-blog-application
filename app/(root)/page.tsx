import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import PostCard, { PostTypeCard } from "@/components/PostCard";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";
import Link from "next/link";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };

  const session = await auth();
  console.log(session?.id);

  const { data: posts } = await sanityFetch({ query: POSTS_QUERY, params });

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen lg:min-h-[430px] bg-cover bg-center flex items-center justify-center text-center md:mt-12 mt-10 md:py-8 px-6"
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
          <Link href="/post/create">
            <button className="mx-auto mt-4 px-6 py-3 bg-gradient-to-r from-indigo-600 via-green-500 to-purple-600 text-white flex items-center cursor-pointer tracking-wide text-lg font-semibold rounded-md shadow-lg transition duration-300">
              Get Started
            </button>
          </Link>
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

        <ul className="card_grid">
          {posts?.length > 0 ? (
            posts.map((post: PostTypeCard) => (
              <PostCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No posts found</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
