import { defineField, defineType } from "sanity";

export default defineType({
  name: "servicio",
  title: "Servicio",
  type: "document",
  fields: [
    defineField({
      name: "unServicio",
      title: "unServicio",
      type: "string",
    }),
    defineField({
      name: "costo",
      title: "Costo",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "priceID",
      title: "PriceID",
      type: "string",
    }),
  ],
});
