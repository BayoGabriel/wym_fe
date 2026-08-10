import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Category",
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
      options: { source: "title", maxLength: 96 },
      validation: (r: any) => r.required(),
    }),
    defineField({ name: "description", type: "text", title: "Description" }),
    defineField({
      name: "color",
      type: "string",
      title: "Color (hex or token)",
    }),
    defineField({ name: "featured", type: "boolean", title: "Featured" }),
  ],
  preview: { select: { title: "title" } },
});
