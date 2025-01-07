import { defineQuery } from "next-sanity";

export const POSTS_QUERY = 
defineQuery(`
    *[_type == "devpost" && defined(slug.current) && !defined($search) || title match $search || category match $search || author -> name match $search] | order(_createdAt desc) {
        _id, title, _createdAt, slug,
    image, views, excerpt, category, author -> {
      _id, name, slug, image, bio
    }
      }`);

export const POST_BY_ID_QUERY = defineQuery(`
  *[_type == "devpost" && _id == $id][0]{
  _id, title, _createdAt, slug,
  image, views, excerpt, category, pitch,
    author -> {
    _id, name, username, image, bio
  }
}`);

export const POST_VIEWS_QUERY = defineQuery(`
  *[_type == "devpost" && _id == $id][0]{
  _id, views
}`);

export const AUTHOR_BY_GITHUB_ID_QUERY = defineQuery(`
  *[_type == "author" && id == $id][0]{
  _id, id, name, username, email, image, bio
}`);