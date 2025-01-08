"use client";

import React, { useActionState, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MDEditor from "@uiw/react-md-editor";
import { Send } from "lucide-react";
import { formSchema } from "@/lib/validation";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const PostForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState("");

  const { toast } = useToast();
  const router = useRouter();

  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      const formValues = {
        title: formData.get("title") as string,
        excerpt: formData.get("excerpt") as string,
        category: formData.get("category") as string,
        link: formData.get("link") as string,
        pitch,
      };
      await formSchema.parseAsync(formValues);
      console.log(formValues);

      // const result = await createIdea(prevState, formValues, pitch);
      // console.log(result);

      //   if (result.status === "SUCCESS") {
      //     toast({
      //       title: "SUCCESS",
      //       description: "Your post has been created successfully!",
      //     });
      //     router.push(`/post/${result._id}`);
      //   }

      //   return result;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;

        setErrors(fieldErrors as unknown as Record<string, string>);

        toast({
          title: "ERROR",
          description: "Please check your inputs and try again!",
          variant: "destructive",
        });

        return { ...prevState, error: "Validation failed", status: "RROR" };
      }

      toast({
        title: "ERROR",
        description: "An unexpected error occurred",
        variant: "destructive",
      });

      return {
        ...prevState,
        error: "An unexpected error occurred",
        status: "ERROR",
      };
    } finally {
      return { ...prevState, status: "SUCCESS" };
    }
  };

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });

  return (
    <form action={formAction} className="startup-form flex flex-col space-y-4">
      <div>
        <label
          htmlFor="title"
          className="mb-2 text-base text-gray-600 font-medium"
        >
          Title
        </label>
        <Input
          id="title"
          name="title"
          className="rounded-md h-12 px-3 py-4 border border-gray-300"
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
          id="category"
          name="category"
          className="px-3 h-12 py-4 border border-gray-300 rounded-md"
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
          name="link"
          className="px-3 h-12 py-4 border border-gray-300 rounded-md"
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
          name="excerpt"
          className="h-32 resize-none rounded-md px-3 py-4 border border-gray-300"
          required
          placeholder="Enter a short description of the post"
        />
        {errors.excerpt && (
          <p className="text-red-500 text-sm">{errors.excerpt}</p>
        )}
      </div>

      <div data-color-mode="green">
        <label
          htmlFor="pitch"
          className="mb-2 text-base text-gray-600 font-medium"
        >
          Pitch or Full post content
        </label>
        <MDEditor
          value={pitch}
          onChange={(value) => setPitch(value as string)}
          id="pitch"
          preview="edit"
          height="300px"
          style={{ borderRadius: 8, overflow: "hidden" }}
          textareaProps={{
            placeholder:
              "Write your full post content here about anything you wish to share with the world!",
          }}
          previewOptions={{
            disallowedElements: ["style"],
          }}
        />
        {errors.pitch && <p className="text-red-500 text-sm">{errors.pitch}</p>}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="flex items-center w-full justify-center mx-auto py-3 px-6 bg-gradient-to-r from-indigo-600 via-green-500 to-purple-600 hover:scale-95 text-white text-lg font-semibold rounded-md shadow-lg transition duration-300"
      >
        {isPending ? "Creating Post..." : "Create Your Post"}
        <Send className="size-4 ml-2" />
      </button>
    </form>
  );
};

export default PostForm;
