"use server";

import { auth } from "@/auth";
import { parseServerActionResponse } from "@/lib/utils";
import { writeClient } from "@/sanity/lib/write-client";
import slugify from "slugify";

interface ActionState {
    error: string;
    status: "INITIAL" | "ERROR" | "SUCCESS";
}
  

export const createPitch = async (state: ActionState, form: FormData, pitch: string) => {   
    const session = await auth();

    if(!session) {
        return parseServerActionResponse({ error: "Not Signed in", status: "ERROR" });
    }

    const { title, excerpt, category, link } = Object.fromEntries(
        Array.from(form).filter(([key]) => key !== "pitch"),  
    );

    const slug = slugify(title as string, { lower: true, strict: true });
    
    try {

        const post = {
            title, 
            excerpt, 
            category, 
            image: link, 
            pitch, 
            slug: {
                _type: "slug",
                current: slug,
            },

            author: {
                _type: "reference",
                _ref: session?.id,
            },
            
        };

        const result = await writeClient.create({ _type: "devpost", ...post });

        return parseServerActionResponse({ 
            ...result, 
            error: '', 
            status: "SUCCESS" 
        });
        
    } catch (error) {
        console.error(error);

        return parseServerActionResponse({ error: JSON.stringify(error), status: "ERROR" });
 
    }
}; 
