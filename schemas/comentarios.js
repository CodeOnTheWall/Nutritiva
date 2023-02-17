import { defineField, defineType } from "sanity";

export default defineType({
  name: "comentarios",
  title: "Comentarios",
  type: "document",
  fields: [
    defineField({
      name: "comentario",
      title: "Comentario",
      type: "string",
    }),
    defineField({
      name: "ubicacion",
      title: "Ubicacion",
      type: "string",
    }),
    defineField({
      name: "nombre",
      title: "Nombre",
      type: "string",
    }),
  ],
});
