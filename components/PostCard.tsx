import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
// import { PostTypeCard } from "../types"; // Adjust the import path as necessary
import Image from "next/image";

const PostCard = ({ post }: { post: PostTypeCard }) => {
  const {
    _id,
    _createdAt,
    views,
    image,
    author: { _id: authorId, name },
    excerpt,
    category,
    title,
  } = post;
  return (
    <li className="border border-gray-300 rounded-lg p-4 gap-4 group">
      <div className="flex-between">
        <p className="text-gray-500 text-sm">{formatDate(_createdAt)}</p>

        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-blue-500" />
          <span className="text-gray-500 font-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-gray-700 font-medium line-clamp-1">{name}</p>
          </Link>

          <Link href={`/post/${_id}`}>
            <h3 className="text-lg font-bold text-gray-700 md:text-xl line-clamp-2">
              {title}
            </h3>
          </Link>
        </div>

        <Link href={`/user/${authorId}`}>
          <Image
            src="https://placehold.co/48x48"
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full cursor-pointer"
          />
        </Link>
      </div>

      <Link href={`/post/${_id}`}>
        <p className="startup-card_desc">{excerpt}</p>
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="rounded-lg mt-5 cursor-pointer"
        />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category.toLowerCase()}`}>
          <button className="py-2 px-3 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 rounded-md text-white text-sm tracking-wide block">
            {category}
          </button>
        </Link>

        <Link href={`/post/${_id}`}>
          <button
            type="button"
            className="py-2 px-3 bg-gradient-to-r from-indigo-600 via-green-500 to-pink-800 rounded-md text-white flex items-center cursor-pointer text-sm tracking-wide"
          >
            Read More
          </button>
        </Link>
      </div>
    </li>
  );
};

export default PostCard;
