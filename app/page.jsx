import MainPage from "../components/MainPage";

import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";
import Especialistas from "@/components/Especialistas";
import Suplementos from "@/components/Suplementos";
// á, é, í, ó, ú, ü, ñ, ¿, ¡

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

export default async function Home() {
  const mainPage = await client.fetch(mainPageQuery);
  const mainPagee = mainPage[0];
  const profiles = await client.fetch(profilesQuery);

  return (
    <div
      className="h-[850px] snap-y snap-mandatory overflow-y-scroll overflow-x-hidden
      scrollbar scrollbar-track-[#f7cad0] scrollbar-thumb-[#f28482] z-0 "
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
        <Suplementos />
      </section>

      {/* Comentarios */}
      <section id="commentarios" className="snap-start"></section>

      {/* Contacto */}
      <section id="contacto" className="snap-start"></section>
    </div>
  );
}
