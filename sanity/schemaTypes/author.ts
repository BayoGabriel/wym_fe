import { defineField, defineType } from "sanity";

export default defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      validation: (r: any) => r.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "name", maxLength: 96 },
      validation: (r: any) => r.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Avatar",
      options: { hotspot: true },
    }),
    defineField({ name: "role", type: "string", title: "Role/Position" }),
    defineField({ name: "bio", type: "text", title: "Short Bio" }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        defineField({ name: "linkedin", type: "url", title: "LinkedIn" }),
        defineField({ name: "twitter", type: "url", title: "X / Twitter" }),
        defineField({ name: "website", type: "url", title: "Website" }),
      ],
    }),
    defineField({ name: "featured", type: "boolean", title: "Featured" }),
  ],
  preview: {
    select: { title: "name", media: "image", subtitle: "role" },
  },
});
