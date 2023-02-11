import MainPage from "../components/MainPage";

import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";
import Especialistas from "@/components/Especialistas";
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
      className=" h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden
     z-0 scrollbar scrollbar-track-[#f7cad0] scrollbar-thumb-[#f28482]"
    >
      {/* Header in Layout */}
      {/* Header */}

      {/* Inicio */}
      <section id="inicio" className="snap-start">
        <MainPage mainPagee={mainPagee} />
      </section>

      {/* Especialistas*/}
      <section id="especialistas" className="snap-center">
        <Especialistas profiles={profiles} />
      </section>

      {/* Servicios */}
      <section id="servicios" className="snap-center"></section>

      {/* Nutraceúticos y Suplementos */}
      <section id="nut" className="snap-center"></section>

      {/* Comentarios */}
      <section id="nut" className="snap-center"></section>

      {/* Contacto */}
      <section id="contacto" className="snap-start"></section>
    </div>
  );
}
