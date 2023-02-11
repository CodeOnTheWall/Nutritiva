import { defineField, defineType } from "sanity";

export default defineType({
  name: "mainPage",
  title: "Main Page",
  type: "document",
  fields: [
    defineField({
      name: "compania",
      title: "Compania",
      type: "string",
    }),
    defineField({
      name: "quote",
      title: "Qoute",
      type: "string",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "logo2",
      title: "Logo2",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "description",
      title: "description",
      type: "string",
    }),
  ],
});
