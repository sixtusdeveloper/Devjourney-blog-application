import { client } from "@/sanity/lib/client";
import { POSTS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import PostCard, { PostTypeCard } from "@/components/PostCard";

const UserPosts = async ({ id }: { id: string }) => {
  const posts = await client.fetch(POSTS_BY_AUTHOR_QUERY, { id });

  return (
    <>
      {posts.length > 0 ? (
        posts.map((post: PostTypeCard) => (
          <PostCard key={post._id} post={post} />
        ))
      ) : (
        <p className="no-results">No posts found</p>
      )}
    </>
  );
};

export default UserPosts;
