import { defineField, defineType } from "sanity";

export default defineType({
  name: "especialidad",
  title: "Especialidad",
  type: "document",
  fields: [
    defineField({
      name: "unEspecialidad",
      title: "UnEspecialidad",
      type: "string",
    }),
  ],
});
