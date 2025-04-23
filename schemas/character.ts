import { defineField, defineType } from "sanity"

export default defineType({
  name: "character",
  title: "Character",
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
    defineField({
      name: "isMainCharacter",
      title: "Is Main Character",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
})
