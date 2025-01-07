// import React from "react";
// import Ping from "./Ping";
// import { client } from "@/sanity/lib/client";
// import { POST_VIEWS_QUERY } from "@/sanity/lib/queries";
// import { writeClient } from "@/sanity/lib/write-client";
// import { unstable_cache as after } from "next/cache";
// // import { unstable_after as after } from "next/server"; since the function is not available in the latest version of Next.js

// const View = async ({ id }: { id: string }) => {
//   const { views: totalViews } = await client
//     .withConfig({ useCdn: false })
//     .fetch(POST_VIEWS_QUERY, { id });

//   //  Function for updating the views count
//   after(
//     async () =>
//       await writeClient
//         .patch(id)
//         .set({ views: totalViews + 1 })
//         .commit()
//   );

//   return (
//     <div className="view-container">
//       <div className="-top-2 -right-1 absolute">
//         <Ping />
//       </div>

//       <p className="view-text">
//         <span className="text-gray-700 font-semibold">Views: {totalViews}</span>
//       </p>
//     </div>
//   );
// };

// export default View;

"use client";

import React, { useEffect, useState } from "react";
import Ping from "./Ping";
import { client } from "@/sanity/lib/client";
import { POST_VIEWS_QUERY } from "@/sanity/lib/queries";

const View = ({ id }: { id: string }) => {
  const [totalViews, setTotalViews] = useState<number | null>(null);

  useEffect(() => {
    const updateViews = async () => {
      // Fetch current views count
      const { views } = await client.fetch(POST_VIEWS_QUERY, { id });
      setTotalViews(views);

      // Increment views count via API route
      await fetch("/api/update-views", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
    };

    updateViews();
  }, [id]);

  return (
    <div className="view-container">
      <div className="-top-2 -right-1 absolute">
        <Ping />
      </div>

      <p className="view-text">
        <span className="text-gray-700 font-semibold">
          Views: {totalViews !== null ? totalViews : "Loading..."}
        </span>
      </p>
    </div>
  );
};

export default View;
