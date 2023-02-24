"use client";

import ComentarioCard from "./ComentarioCard";
import { motion } from "framer-motion";

export default function Comentarios({ comentarios }) {
  return (
    // need relative here with h-screen
    <div className=" h-screen flex flex-col relative mx-auto items-center  md:flex-row max-w-7xl px-8 md:justify-center">
      <div className="absolute text-center top-[10px] md:top-[25px] flex flex-row">
        <motion.h3
          initial={{
            y: -25,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          className="uppercase tracking-[15px] md:tracking-[20px] text-[#f28482] md:text-2xl"
        >
          Comentarios
        </motion.h3>

        <motion.div
          initial={{
            opacity: 0,
            x: 25,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          className=" absolute right-[400px] md:w-[2px] md:h-[32px] bg-[#f28482]"
        />
        <motion.div
          initial={{
            opacity: 0,
            x: -25,
            y: -25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          className=" absolute right-0 md:w-[2px] md:h-[32px] bg-[#f28482]"
        />
      </div>

      <div
        className="absolute top-[50px] md:top-[100px] flex flex-col h-[550px] md:h-[650px] overflow-x-scroll snap-x snap-mandatory
        md:scrollbar scrollbar-track-[#f7cad0] scrollbar-thumb-[#f28482]"
      >
        <div className="md:grid grid-cols-4 gap-4 md:grid-cols-3 space-y-3 md:space-y-0">
          {comentarios?.map((comentario) => (
            <ComentarioCard key={comentario._id} comentario={comentario} />
          ))}
        </div>
      </div>
    </div>
  );
}
