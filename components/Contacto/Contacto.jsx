"use client";

import { motion } from "framer-motion";
import ContactoCard from "./ContactoCard";

export default function Contacto() {
  return (
    <div className=" h-screen flex justify-center relative px-8 ">
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
          className="uppercase tracking-[15px] md:tracking-[20px] text-[#fb6107] text-[13px] md:text-2xl"
        >
          Contacto
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
          className=" absolute right-[300px] md:w-[2px] md:h-[32px] bg-[#fbb02d]"
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

      <div className=" w-full flex md:justify-center md:items-center">
        <ContactoCard />
      </div>
    </div>
  );
}
