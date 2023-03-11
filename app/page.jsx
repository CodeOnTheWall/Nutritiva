import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";

// put stripe into real not test

import MainPage from "../components/MainPage/MainPage";
import Especialistas from "@/components/Especialistas/Especialistas";
import Comentarios from "@/components/Comentarios/Comentarios";
import Productos from "@/components/Productos/Productos";
import Contacto from "@/components/Contacto/Contacto";
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
    <div
      className="h-[700px] md:h-[850px] snap-y snap-mandatory overflow-y-scroll overflow-x-hidden
      scrollbar scrollbar-track-[#f7cad0] scrollbar-thumb-[#f28482]"
    >
      {/* Header in Layout */}
      {/* Header */}

      {/* Inicio */}
      <section id="inicio" className="snap-start">
        <MainPage mainPagee={mainPagee} />
      </section>

      {/* Especialistas y Servicios*/}
      <section id="especialistas" className="snap-start">
        <Especialistas profiles={profiles} />
      </section>

      {/* Nutraceúticos y Suplementos */}
      <section id="nut" className="snap-start">
        <Productos productos={productos} />
      </section>

      {/* Comentarios */}
      <section id="comentarios" className="snap-start">
        <Comentarios comentarios={comentarios} />
      </section>

      {/* Contacto */}
      <section id="contacto" className="snap-start">
        <Contacto />
      </section>
    </div>
  );
}
