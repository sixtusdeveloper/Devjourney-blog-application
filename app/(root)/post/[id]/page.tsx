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

export const experimental_ppr = true;
const md = markdownit();

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

  return (
    <>
      <section
        className="relative md:mt-12 mt-10 md:py-4 md:px-6 min-h-screen lg:min-h-[430px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-white text-center py-8 px-4 space-y-6 max-w-3xl">
          <p className="inline-block bg-white/10 text-sm font-medium px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all">
            {formatDate(post?._createdAt)}
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
        <div className="space-y-5 mt-8 max-w-5xl md:px-8 mx-auto">
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
                className="prose prose-lg max-w-4xl font-work-sans break-all"
                dangerouslySetInnerHTML={{ __html: parsedContent }}
              />
            ) : (
              <p className="no-result">No details provided!</p>
            )}
          </div>
        </div>

        <hr className="divider my-4" />

        {editorPosts?.length > 0 && (
          <div className="space-y-5 mt-8 max-w-6xl md:px-4 mx-auto">
            <p className="text-30-semibold">Editor Picks</p>

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

// import { Suspense } from "react";
// import { client } from "@/sanity/lib/client";
// import { POST_BY_ID_QUERY } from "@/sanity/lib/queries";
// import { notFound } from "next/navigation";
// import { formatDate } from "@/lib/utils";
// import Link from "next/link";
// import Image from "next/image";
// import markdownit from "markdown-it";
// import { Skeleton } from "@/components/ui/skeleton";
// import View from "@/components/View";

// export const experimental_ppr = true;
// const md = markdownit();

// const page = async ({ params }: { params: Promise<{ id: string }> }) => {
//   const id = (await params).id;

//   const post = await client.fetch(POST_BY_ID_QUERY, { id });
//   if (!post) return notFound();

//   const parsedContent = md.render(post?.pitch || "");

//   return (
//     <>
//       <section
//         className="relative md:mt-12 h-screen py-10 md:py-4  flex items-center justify-center bg-cover bg-center"
//         style={{ backgroundImage: `url(${post.image})` }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/60"></div>

//         {/* Content */}
//         <div className="relative z-10 text-white text-center px-4 space-y-6 max-w-4xl">
//           <p className="inline-block bg-white/10 text-sm font-medium px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all">
//             {formatDate(post?._createdAt)}
//           </p>
//           <h1 className="text-4xl sm:text-6xl font-bold tracking-wide">
//             {post.title}
//           </h1>
//           <p className="text-base sm:text-lg leading-relaxed sub-heading !max-w-3xl mx-auto">
//             {post.excerpt}
//           </p>

//           <Link href="/post/create">
//             <button className="mt-4 px-6 py-3 mx-auto bg-gradient-to-r from-green-600 via-indigo-500 to-purple-700 hover:scale-95 text-white flex items-center cursor-pointer tracking-wide text-lg font-semibold rounded-md shadow-lg transition duration-300">
//               Share Your Thoughts
//             </button>
//           </Link>
//         </div>
//       </section>

//       <section className="section_container">
//         <div className="space-y-5 mt-8 max-w-5xl md:px-8 mx-auto">
//           <div className="flex-between gap-5">
//             <Link
//               href={`/user/${post.author?._id}`}
//               className="flex gap-2 items-center mb-3"
//             >
//               <Image
//                 src={post.author.image}
//                 alt="author avatar"
//                 width={64}
//                 height={64}
//                 className="detail-post-avatar rounded-full drop-shadow-lg object-cover border-1 border-purple-500"
//               />

//               <div className="flex flex-col gap-1">
//                 <p className="text-gray-700 font-medium">{post.author.name}</p>
//                 <p className="text-gray-500">@{post.author.username}</p>
//               </div>
//             </Link>

//             <p className="inline-block bg-white/10 text-sm font-medium tracking-wide px-4 py-2 sm:px-8 sm:py-3 rounded-full shadow-md hover:shadow-lg transition-all">
//               {post.category}
//             </p>
//           </div>

//           <div>
//             <h1 className="text-30-bold">Post Details</h1>
//             {parsedContent ? (
//               <article
//                 className="prose prose-lg max-w-4xl font-work-sans break-all"
//                 dangerouslySetInnerHTML={{ __html: parsedContent }}
//               />
//             ) : (
//               <p className="no-result">No details provided!</p>
//             )}
//           </div>
//         </div>

//         <hr className="divider my-4" />

//         {/* TODO: EDITOR SELECTED POSTS */}

//         <Suspense fallback={<Skeleton className="view_skeleton" />}>
//           <View id={id} />
//         </Suspense>
//       </section>
//     </>
//   );
// };

// export default page;
