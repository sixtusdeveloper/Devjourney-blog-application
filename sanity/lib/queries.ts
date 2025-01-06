import { defineQuery } from "next-sanity";

export const POSTS_QUERY = 
defineQuery(`
    *[_type == "devpost" && defined(slug.current)] | order(_createdAt desc) {
        _id, title, _createdAt, slug,
    image, views, excerpt, category, author -> {
      _id, name, slug, image, bio
    }
      }`);

      