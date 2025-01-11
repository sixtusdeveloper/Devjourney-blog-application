import { Suspense } from "react";
import { client } from "@/sanity/lib/client";
import { PLAYLIST_BY_SLUG_QUERY, POST_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import markdownit from "markdown-it";
import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/View";
import PostCard, { PostTypeCard } from "@/components/PostCard";

// export const experimental_ppr = true;  I commented it out here
const md = markdownit();

// Utility function to calculate reading time
const calculateReadingTime = (title: string, excerpt: string): string => {
  const words = (title + " " + excerpt).split(/\s+/).length;
  const totalSeconds = Math.ceil((words / 200) * 60); // Calculate total reading time in seconds

  // Calculate minutes and seconds
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // Show at least "1 min" if total reading time is very short
  if (minutes === 0 && seconds > 0) {
    return `${seconds} sec read`;
  }

  return `${minutes} min ${seconds} sec read`;
};

// Utility function to truncate text
const truncateText = (text: string, limit: number): string => {
  if (!text) return "";
  return text.length > limit ? text.substring(0, limit) + "..." : text;
};

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const [post, { select: editorPosts }] = await Promise.all([
    client.fetch(POST_BY_ID_QUERY, { id }),
    client.fetch(PLAYLIST_BY_SLUG_QUERY, { slug: "editor-picks" }),
  ]);

  if (!post) return notFound();

  const parsedContent = md.render(post?.pitch || "");
  const readingTime = calculateReadingTime(post.title, post.excerpt);

  return (
    <>
      <section
        className="relative md:mt-12 mt-10 md:py-8 md:px-6 min-h-screen lg:min-h-[430px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-white text-center py-8 px-4 space-y-6 max-w-3xl">
          <p className="inline-block bg-white/10 text-sm font-medium px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all">
            {formatDate(post?._createdAt)}
          </p>

          {/* Display Reading Time */}
          <p className="inline-block ml-4 bg-white/10 text-sm font-medium px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all">
            {readingTime}
          </p>

          <h1 className="text-4xl sm:text-5xl text-center font-bold tracking-wide">
            {truncateText(post.title, 52)}{" "}
            {/* Truncate title to 60 characters */}
          </h1>
          <p className="text-base sm:text-lg leading-relaxed sub-heading !max-w-2xl mx-auto">
            {truncateText(post.excerpt, 120)}{" "}
            {/* Truncate excerpt to 120 characters */}
          </p>

          <Link href="/post/create" className="text-center">
            <button className="mt-6 px-6 py-3 mx-auto bg-gradient-to-r from-green-600 via-indigo-500 to-purple-700 hover:scale-95 text-white flex items-center cursor-pointer tracking-wide text-lg font-semibold rounded-full shadow-lg transition duration-300">
              Share Your Thoughts
            </button>
          </Link>
        </div>
      </section>

      <section className="section_container">
        <div className="space-y-5 mt-8 max-w-6xl md:px-8 mx-auto">
          <div className="flex-between gap-5">
            <Link
              href={`/user/${post.author?._id}`}
              className="flex gap-2 items-center mb-3"
            >
              <Image
                src={post.author.image}
                alt="author avatar"
                width={64}
                height={64}
                className="detail-post-avatar rounded-full drop-shadow-lg object-cover border-1 border-purple-500"
              />

              <div className="flex flex-col gap-1">
                <p className="text-gray-700 font-medium">{post.author.name}</p>
                <p className="text-gray-500">@{post.author.username}</p>
              </div>
            </Link>

            <p className="inline-block bg-white/10 text-sm font-medium tracking-wide px-4 py-2 sm:px-8 sm:py-3 rounded-full shadow-md hover:shadow-lg transition-all">
              {post.category}
            </p>
          </div>

          <div>
            <h1 className="text-30-bold">Post Details</h1>

            {parsedContent ? (
              <article
                className="prose prose-lg max-w-5xl font-work-sans break-all"
                dangerouslySetInnerHTML={{ __html: parsedContent }}
              />
            ) : (
              <p className="no-result">No details provided!</p>
            )}
          </div>
        </div>

        <hr className="divider my-4" />

        {editorPosts?.length > 0 && (
          <div className="space-y-5 mt-8 max-w-7xl px-2 sm:px-4 mx-auto">
            <p className="text-30-semibold">Related Posts</p>

            <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {editorPosts.map((post: PostTypeCard, i: number) => (
                <PostCard key={i} post={post} />
              ))}
            </ul>
          </div>
        )}

        <Suspense fallback={<Skeleton className="view_skeleton" />}>
          <View id={id} />
        </Suspense>
      </section>
    </>
  );
};

export default page;
