import Link from "next/link";
import PostForm from "@/components/PostForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();

  if (!session) redirect("/");

  return (
    <>
      <section
        className="relative md:mt-12 mt-10 md:py-10 md:px-6 min-h-screen lg:min-h-[430px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/create-bg.avif')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Content */}
        <div className="relative z-10 text-white text-center px-4 space-y-6 max-w-3xl">
          <h4 className="mt-8 inline-block bg-white/10 text-base sm:text-lg font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all">
            👋 Hi, {session?.user?.name || "Hi there!"}
          </h4>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-wide">
            Share Your Thoughts and ideas with the World!
          </h1>
          <p className="sub-heading !max-w-2xl mx-auto">
            Craft compelling stories, insightful articles, or creative ideas and
            let your voice be heard. Start your journey to inspire, connect, and
            engage with a vibrant audience.
          </p>

          <Link href="/">
            <button className="mt-4 px-6 py-3 mx-auto bg-gradient-to-r from-green-600 via-indigo-500 to-purple-700 hover:scale-95 text-white flex items-center cursor-pointer tracking-wide text-lg font-semibold rounded-full shadow-lg transition duration-300">
              Explore Posts
            </button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-2 md:px-0">
        <h2 className="text-3xl text-gray-700 font-bold text-center mt-10">
          Create a New Post
        </h2>

        <PostForm />
      </section>
    </>
  );
};

export default page;
