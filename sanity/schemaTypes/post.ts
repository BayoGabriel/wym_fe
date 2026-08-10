import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Post / Article",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (r: any) => r.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title", maxLength: 120 },
      validation: (r: any) => r.required(),
    }),
    defineField({ name: "excerpt", type: "text", title: "Excerpt", rows: 3 }),
    defineField({
      name: "mainImage",
      type: "image",
      title: "Hero Image",
      options: { hotspot: true },
    }),
    defineField({
      name: "imageAlt",
      type: "string",
      title: "Hero Image Alt Text",
      validation: (r: any) => r.required(),
    }),
    defineField({
      name: "author",
      type: "reference",
      to: [{ type: "author" }],
      validation: (r: any) => r.required(),
    }),
    defineField({
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (r: any) => r.required(),
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      title: "Published At",
      validation: (r: any) => r.required(),
    }),
    defineField({ name: "updatedAt", type: "datetime", title: "Updated At" }),
    defineField({ name: "featured", type: "boolean", title: "Featured" }),
    defineField({
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
        {
          type: "code",
          title: "Code Block",
          options: {
            withFilename: true,
          },
        },
      ],
      validation: (r: any) => r.required(),
    }),
    defineField({ name: "seoTitle", type: "string", title: "SEO Title" }),
    defineField({
      name: "seoDescription",
      type: "text",
      title: "SEO Description",
      rows: 3,
    }),
    defineField({
      name: "seoImage",
      type: "image",
      title: "SEO Image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "publishedAt",
      media: "mainImage",
    },
  },
  orderings: [
    {
      title: "Publish Date, New",
      name: "publishDateDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Publish Date, Old",
      name: "publishDateAsc",
      by: [{ field: "publishedAt", direction: "asc" }],
    },
  ],
});
