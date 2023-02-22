"use client";

import ProductoCard from "./ProductoCard";
import { motion } from "framer-motion";

export default function Productos({ productos }) {
  return (
    // need relative here with h-screen
    <div className=" h-screen flex flex-col relative mx-auto items-center  md:flex-row max-w-7xl px-8 md:justify-center">
      <div className="absolute text-center top-[10px] md:top-[25px] md:flex md:flex-row flex-col">
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
          className="uppercase tracking-[10px] md:tracking-[20px] text-[#fb6107]  text-[12px] md:text-[16px]"
        >
          Nuetraceúticos y
        </motion.h3>

        <motion.h3
          initial={{
            y: 25,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          className=" md:ml-3 uppercase tracking-[10px] md:tracking-[20px] text-[#fb6107]  text-[12px] md:text-[16px]"
          //
        >
          Suplementos
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
          className=" absolute right-[820px] md:w-[2px] md:h-[32px] bg-[#fbb02d]"
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
          className=" absolute right-0 md:w-[2px] md:h-[32px] bg-[#fbb02d]"
        />
      </div>

      <h2 className="absolute text-center top-[50px] md:top-[60px] text-[#fb6107] text-[18px]">
        Productos Ariix
      </h2>
      <div
        className="absolute top-[80px] md:top-[100px] flex flex-col h-[550px] md:h-[650px] overflow-x-scroll snap-x snap-mandatory
        md:scrollbar scrollbar-track-[#f7cad0] scrollbar-thumb-[#f28482]"
      >
        <div className="md:grid gap-4 grid-cols-4 space-y-3 md:space-y-0">
          {productos?.map((producto) => (
            <ProductoCard key={producto._id} producto={producto} />
          ))}
        </div>
      </div>
    </div>
  );
}
