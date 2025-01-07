"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

const PostForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  return (
    <form action={() => {}} className="startup-form flex flex-col space-y-4">
      <div>
        <label
          htmlFor="title"
          className="mb-2 text-base text-gray-600 font-medium"
        >
          Title
        </label>
        <Input
          type="text"
          id="title"
          className="rounded-md px-3 py-4 border border-gray-300"
          required
          placeholder="Enter title"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      <div>
        <label
          htmlFor="category"
          className="mb-2 text-base text-gray-600 font-medium"
        >
          Category
        </label>
        <Input
          type="text"
          id="category"
          className="px-3 py-4 border border-gray-300 rounded-md"
          required
          placeholder="Enter category e.g. Tech, Business, Education etc."
        />
        {errors.category && (
          <p className="text-red-500 text-sm">{errors.category}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="link"
          className="mb-2 text-base text-gray-600 font-medium"
        >
          Image URL
        </label>
        <Input
          id="link"
          className="px-3 py-4 border border-gray-300 rounded-md"
          required
          placeholder="Enter post image URL"
        />
        {errors.link && <p className="text-red-500 text-sm">{errors.link}</p>}
      </div>

      <div>
        <label
          htmlFor="title"
          className="mb-2 text-base text-gray-600 font-medium"
        >
          Excerpt
        </label>
        <Textarea
          id="excerpt"
          className="h-26 resize-none rounded-md px-3 py-4 border border-gray-300"
          required
          placeholder="Enter a short description of the post"
        />
        {errors.excerpt && (
          <p className="text-red-500 text-sm">{errors.excerpt}</p>
        )}
      </div>
    </form>
  );
};

export default PostForm;
