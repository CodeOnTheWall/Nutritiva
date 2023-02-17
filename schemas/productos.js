import { defineField, defineType } from "sanity";

export default defineType({
  name: "productosAriix",
  title: "ProductosAriix",
  type: "document",
  fields: [
    defineField({
      name: "nombre",
      title: "Nombre",
      type: "string",
    }),
    defineField({
      name: "imagen",
      title: "Imagen",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "descripcion",
      title: "Descripcion",
      type: "string",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "string",
    }),
  ],
});
