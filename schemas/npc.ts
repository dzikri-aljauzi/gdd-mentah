import { defineField, defineType } from "sanity"

export default defineType({
  name: "npc",
  title: "NPC",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Pejabat Desa", value: "officials" },
          { title: "Peternak", value: "farmers" },
          { title: "Pedagang", value: "merchants" },
          { title: "Penyedia Jasa", value: "services" },
        ],
      },
    }),
    defineField({
      name: "favoriteItem",
      title: "Favorite Item",
      type: "string",
    }),
    defineField({
      name: "likedItems",
      title: "Liked Items",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category",
      media: "image",
    },
  },
})
