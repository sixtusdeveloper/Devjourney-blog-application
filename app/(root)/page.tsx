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
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const query = (await searchParams).query;
  const page = parseInt((await searchParams).page || "1", 10);
  const postsPerPage = 6;

  const params = {
    search: query || null,
    limit: postsPerPage,
    offset: (page - 1) * postsPerPage,
  };

  const session = await auth();
  console.log(session?.id);

  const { data, sourceMap, tags } = await sanityFetch({
    query: POSTS_QUERY,
    params,
  });
  const posts = data.posts;
  const total = data.total;

  const totalPages = Math.ceil(total / postsPerPage);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen lg:min-h-[430px] bg-cover bg-center flex items-center justify-center text-center md:mt-12 mt-10 md:py-8 md:px-6"
        style={{
          backgroundImage: "url('/hero-bg.avif')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-3xl text-white mx-auto space-y-6 px-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-wide">
            Welcome to Devjourney Blog
          </h1>
          <p className="sub-heading !max-w-2xl mx-auto">
            Discover the ultimate platform for tech insights, meaningful
            connections, and groundbreaking collaborations. Share your stories,
            ideas, and expertise with a vibrant community of innovators.
          </p>
          <Link href="/post/create">
            <button className="mx-auto mt-4 px-6 py-3 bg-gradient-to-r from-indigo-600 via-green-500 to-purple-600 hover:scale-95 text-white flex items-center cursor-pointer tracking-wide text-lg font-semibold rounded-full shadow-lg transition duration-300">
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

        {/* Pagination */}
        <div className="pagination mt-8 flex items-center justify-center space-x-4">
          {/* Previous Button */}
          <Link
            href={`/?page=${page - 1}${query ? `&query=${query}` : ""}`}
            className={`px-4 py-2 rounded-md ${
              page > 1
                ? "bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-700 hover:scale-95 text-white flex items-center cursor-pointer tracking-wide text-base font-semibold rounded-full shadow-lg transition duration-300"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
            aria-disabled={page <= 1}
          >
            Previous
          </Link>

          {/* Page Indicator */}
          <span className="text-gray-600">
            Page {page} of {totalPages}
          </span>

          {/* Next Button */}
          <Link
            href={`/?page=${page + 1}${query ? `&query=${query}` : ""}`}
            className={`px-4 py-2 rounded-md ${
              page < totalPages
                ? "bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-700 hover:scale-95 text-white flex items-center cursor-pointer tracking-wide text-base font-semibold rounded-full shadow-lg transition duration-300"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
            aria-disabled={page >= totalPages}
          >
            Next
          </Link>
        </div>
      </section>

      <SanityLive />
    </>
  );
}

// THis code is without pagination but the above is with pagination
// The original code
// import Image from "next/image";
// import SearchForm from "@/components/SearchForm";
// import PostCard, { PostTypeCard } from "@/components/PostCard";
// import { POSTS_QUERY } from "@/sanity/lib/queries";
// import { sanityFetch, SanityLive } from "@/sanity/lib/live";
// import { auth } from "@/auth";
// import Link from "next/link";

// export default async function Home({
//   searchParams,
// }: {
//   searchParams: Promise<{ query?: string }>;
// }) {
//   const query = (await searchParams).query;
//   const params = { search: query || null };

//   const session = await auth();
//   console.log(session?.id);

//   const { data: posts } = await sanityFetch({ query: POSTS_QUERY, params });

//   return (
//     <>
//       {/* Hero Section */}
//       <section
//         className="relative w-full min-h-screen lg:min-h-[430px] bg-cover bg-center flex items-center justify-center text-center md:mt-12 mt-10 md:py-8 md:px-6"
//         style={{
//           backgroundImage: "url('/hero-bg.avif')",
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//         {/* Content */}
//         <div className="relative z-10 max-w-3xl text-white mx-auto space-y-6 px-4">
//           <h1 className="text-4xl sm:text-5xl font-bold tracking-wide">
//             Welcome to Devjourney Blog
//           </h1>
//           <p className="sub-heading !max-w-2xl mx-auto">
//             Discover the ultimate platform for tech insights, meaningful
//             connections, and groundbreaking collaborations. Share your stories,
//             ideas, and expertise with a vibrant community of innovators.
//           </p>
//           <Link href="/post/create">
//             <button className="mx-auto mt-4 px-6 py-3 bg-gradient-to-r from-indigo-600 via-green-500 to-purple-600 hover:scale-95 text-white flex items-center cursor-pointer tracking-wide text-lg font-semibold rounded-full shadow-lg transition duration-300">
//               Get Started
//             </button>
//           </Link>
//         </div>
//       </section>

//       {/* Search form Section */}
//       <section className="py-12 px-6">
//         <SearchForm query={query} />
//       </section>

//       {/* Search results */}
//       <section className="section_container py-12 px-6">
//         <p className="text-2xl font-bold text-gray-700">
//           {query ? `Search results for "${query}"` : "All Posts"}
//         </p>

//         <ul className="card_grid">
//           {posts?.length > 0 ? (
//             posts.map((post: PostTypeCard) => (
//               <PostCard key={post?._id} post={post} />
//             ))
//           ) : (
//             <p className="no-results">No posts found</p>
//           )}
//         </ul>
//       </section>

//       <SanityLive />
//     </>
//   );
// }
