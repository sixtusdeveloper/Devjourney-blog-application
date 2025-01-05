"use client";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".searchform") as HTMLFormElement;
    if (form) form.reset();
  };

  return (
    <button
      type="reset"
      onClick={reset}
      className="absolute right-[4.2rem] top-0 bottom-0 text-center"
    >
      <Link href="/" className="flex items-center p-2">
        <FaTimes size={18} className="text-purple-400 rounded-full" />
      </Link>
    </button>
  );
};

export default SearchFormReset;
