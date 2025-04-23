import { defineField, defineType } from "sanity"

export default defineType({
  name: "game",
  title: "Game",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "developer",
      title: "Developer",
      type: "string",
    }),
    defineField({
      name: "publisher",
      title: "Publisher",
      type: "string",
    }),
    defineField({
      name: "platforms",
      title: "Platforms",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "releaseDate",
      title: "Release Date",
      type: "object",
      fields: [
        { name: "japan", title: "Japan", type: "date" },
        { name: "global", title: "Global", type: "date" },
      ],
    }),
    defineField({
      name: "plot",
      title: "Plot",
      type: "blockContent",
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      developer: "developer",
      media: "mainImage",
    },
    prepare(selection) {
      const { developer } = selection
      return { ...selection, subtitle: developer }
    },
  },
})
