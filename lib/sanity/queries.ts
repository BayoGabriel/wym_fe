import { groq } from 'next-sanity'

export const POSTS_LIST = groq`
*[_type == "post" && defined(slug.current) && !(_id in path('drafts.**'))]
  | order(featured desc, publishedAt desc){
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    imageAlt,
    featured,
    publishedAt,
    updatedAt,
    tags,
    "category": category->{ _id, title, slug },
    "author": author->{ _id, name, slug, image, role }
  }
`

export const FEATURED_POST = groq`
*[_type == "post" && featured == true && defined(slug.current) && !(_id in path('drafts.**'))]
  | order(publishedAt desc)[0]{
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    imageAlt,
    featured,
    publishedAt,
    updatedAt,
    tags,
    "category": category->{ _id, title, slug },
    "author": author->{ _id, name, slug, image, role }
  }
`

export const LATEST_POST = groq`
*[_type == "post" && defined(slug.current) && !(_id in path('drafts.**'))]
  | order(publishedAt desc)[0]{
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    imageAlt,
    featured,
    publishedAt,
    updatedAt,
    tags,
    "category": category->{ _id, title, slug },
    "author": author->{ _id, name, slug, image, role }
  }
`

export const POST_BY_SLUG = groq`
*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  imageAlt,
  featured,
  publishedAt,
  updatedAt,
  tags,
  body,
  seoTitle,
  seoDescription,
  seoImage,
  "category": category->{ _id, title, slug },
  "author": author->{ _id, name, slug, image, role, bio, socialLinks }
}
`

export const CATEGORIES = groq`
*[_type == "category"] | order(title asc){ _id, title, slug, description, color, featured }
`

export const AUTHORS = groq`
*[_type == "author"] | order(name asc){ _id, name, slug, image, role }
`

export const RELATED_POSTS = groq`
*[_type == "post" && defined(slug.current) && !(_id in path('drafts.**')) && slug.current != $slug && (
  category->_id == $categoryId || count(tags[@ in $tags]) > 0
)] | order(publishedAt desc)[0...3]{
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  imageAlt,
  publishedAt,
  "category": category->{ title, slug },
  "author": author->{ name, slug }
}
`

export const FILTERED_POSTS = groq`
*[_type == "post" && defined(slug.current) && !(_id in path('drafts.**'))
  && (!defined($category) || category->slug.current == $category)
  && (!defined($author) || author->slug.current == $author)
  && (!defined($search) || (
       title match $search || excerpt match $search || count(tags[@ match $search]) > 0
     ))
]
| order(publishedAt desc){
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  imageAlt,
  featured,
  publishedAt,
  updatedAt,
  tags,
  "category": category->{ _id, title, slug },
  "author": author->{ _id, name, slug, image, role }
}
`
