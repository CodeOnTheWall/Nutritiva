import { defineField, defineType } from "sanity";

export default defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({
      name: "nombre",
      title: "Nombre",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "secondImage",
      title: "Second Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "string",
    }),
    defineField({
      name: "quote2",
      title: "Quote2",
      type: "string",
    }),
    defineField({
      name: "cp",
      title: "CP",
      type: "string",
    }),
    defineField({
      name: "certificaciones",
      title: "Certificaciones",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "servicios",
      title: "Servicios",
      type: "array",
      of: [{ type: "reference", to: { type: "servicio" } }],
    }),
    defineField({
      name: "especialidades",
      title: "Especialidades",
      type: "array",
      of: [{ type: "reference", to: { type: "especialidad" } }],
    }),
  ],
});
