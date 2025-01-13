import { cn, formatDate } from "@/lib/utils";
import { ClockIcon, EyeIcon } from "lucide-react";
import Link from "next/link";
import { Devpost, Author } from "@/sanity/types";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

export type PostTypeCard = Omit<Devpost, "author"> & { author?: Author };

// Updated reading time calculation
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

const PostCard = ({ post }: { post: PostTypeCard }) => {
  const { _id, _createdAt, views, image, author, excerpt, category, title } =
    post;

  // Calculate reading time with updated logic
  const readingTime = calculateReadingTime(title || "", excerpt || "");

  return (
    <li className="devpost-card group">
      <div className="flex-between">
        <p className="text-gray-500 text-sm">{formatDate(_createdAt)}</p>

        <div className="flex gap-1.5 items-center">
          <ClockIcon className="size-5 text-gray-500" />
          <span className="text-gray-500 text-sm">{readingTime}</span>
        </div>

        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-blue-500" />
          <span className="text-gray-500 font-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="text-gray-700 font-medium line-clamp-1">
              {author?.name}
            </p>
          </Link>

          <Link href={`/post/${_id}`}>
            <h3 className="text-lg font-bold text-gray-700 md:text-xl line-clamp-2">
              {title}
            </h3>
          </Link>
        </div>

        <Link href={`/user/${author?._id}`}>
          <Image
            src={author?.image?.trim() || "/avatar.png"}
            alt="author avatar"
            width={48}
            height={48}
            className="card-avatar rounded-full cursor-pointer object-cover border-1 border-gray-200"
          />
        </Link>
      </div>

      <Link href={`/post/${_id}`}>
        <p className="startup-card_desc">{excerpt}</p>
        <Image
          src={image?.trim() || "/default-img.webp"}
          alt={title || "Post image"}
          width={400}
          height={200}
          className="post-img rounded-lg mt-5 cursor-pointer"
        />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <button className="py-2 px-3 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 rounded-lg text-white text-sm tracking-wide block">
            {category}
          </button>
        </Link>

        <Link href={`/post/${_id}`}>
          <button
            type="button"
            className="py-2 px-3 bg-gradient-to-r from-indigo-600 via-green-500 to-pink-800 rounded-lg text-white flex items-center cursor-pointer text-sm tracking-wide"
          >
            Read More
          </button>
        </Link>
      </div>
    </li>
  );
};

export const PostCardSkeleton = () => {
  return (
    <>
      {[1, 2, 3, 4].map((i) => (
        <li key={cn("skeleton", i)}>
          <Skeleton className="post-card_skeleton" />
        </li>
      ))}
    </>
  );
};

export default PostCard;
