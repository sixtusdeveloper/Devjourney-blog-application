import { auth } from "@/auth";
import { AUTHOR_BY_ID_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import Image from "next/image";
import UserPosts from "@/components/UserPosts";
import { Suspense } from "react";

export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  //   const { id } = await params;
  const session = await auth();

  const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id });

  if (!user) return notFound();

  return (
    <>
      <section className="mt-12 lg:mt-14 w-full">
        <div className="bg-blue-100 w-full py-10">
          <div className="flex justify-center pt-14 items-center mx-auto max-w-7xl">
            <div className="profile_card mt-12">
              <div className="profile_title">
                <h3 className="text-24-black uppercase text-center line-clamp-1">
                  {user.name}
                </h3>
              </div>

              <Image
                src={user.image}
                alt={user.name}
                width={220}
                height={220}
                className="user_profile_image rounded-full border-2 border-indigo-400"
              />

              <p className="text-30-extrabold mt-6 text-center">
                @{user?.username}
              </p>
              <p className="mt-1 text-center text-14-normal">{user?.bio}</p>
            </div>
          </div>
        </div>
        <div className="space-y-5 mt-8 py-8 max-w-7xl px-2 md:px-8 mx-auto">
          <p className="text-30-bold">
            {session?.id === id ? "Your" : "All"} Posts
          </p>

          <ul className="card_grid-sm my-2">
            <Suspense fallback={<p className="">Loading...</p>}>
              <UserPosts id={id} />
            </Suspense>
          </ul>
        </div>
      </section>
    </>
  );
};

export default page;
