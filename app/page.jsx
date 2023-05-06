import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";

import MainPage from "./[components]/MainPage/MainPage";
import Especialistas from "./[components]/Especialistas/Especialistas";
import Comentarios from "@/app/[components]/Comentarios/Comentarios";
import Productos from "@/app/[components]/Productos/Productos";
import Contacto from "@/app/[components]/Contacto/Contacto";
// á, é, í, ó, ú, ü, ñ, ¿, ¡

// sm: 640px and up
// md: 768px and up
// lg: 1024px and up
// xl: 1280px and up
// 2xl: 1536px and up
export const revalidate = 30; // revalidate this page every 60 seconds

const mainPageQuery = groq`
*[_type == "mainPage"]{
...,
}`;
const profilesQuery = groq`
*[_type == "profile"]{
...,
servicios[]->,
especialidades[]->,
} | order(_updatedAt desc)`;
const comentariosQuery = groq`
*[_type == "comentarios"]{
...,
} | order(_createdAt desc)`;
const productosQuery = groq`
*[_type == "productosAriix"]{
...,
} | order(_createdAt desc)`;

export default async function Home() {
  const mainPage = await client.fetch(mainPageQuery);
  const mainPagee = mainPage[0];
  const profiles = await client.fetch(profilesQuery);
  const comentarios = await client.fetch(comentariosQuery);
  const productos = await client.fetch(productosQuery);

  return (
    <>
      {/* mainPage */}
      <section id="mainPage">
        <MainPage mainPagee={mainPagee} />
      </section>

      {/* Especialistas y Servicios*/}
      <section id="especialistas">
        <Especialistas profiles={profiles} />
      </section>

      {/* Nutraceúticos y Suplementos */}
      <section id="suplementos">
        <Productos productos={productos} />
      </section>

      {/* Comentarios */}
      <section id="comentarios">
        <Comentarios comentarios={comentarios} />
      </section>

      {/* Contacto */}
      <section id="contacto">
        <Contacto />
      </section>
    </>
  );
}
