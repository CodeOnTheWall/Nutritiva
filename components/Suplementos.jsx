"use client";

import urlFor from "@/lib/urlFor";
import ProfileCard from "./ProfileCard";
import { motion } from "framer-motion";

export default function Suplementos({ profiles }) {
  return (
    // need relative here with h-screen
    <div className=" h-screen flex flex-col relative mx-auto items-center  md:flex-row max-w-7xl px-8 md:justify-center">
      <div className="absolute text-center md:top-[25px] md:flex md:flex-row flex-col">
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
          className="uppercase tracking-[20px] text-[#fb6107] md:text-2xl"
        >
          Nuestras
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
          className=" ml-3 uppercase tracking-[20px] text-[#fb6107] md:text-2xl"
          //
        >
          Especialistas
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
          className=" absolute right-[720px] md:w-[2px] md:h-[32px] bg-[#fbb02d]"
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

      <div
        className=" w-full flex overflow-x-scroll snap-x snap-mandatory
        scrollbar scrollbar-track-[#f7cad0] scrollbar-thumb-[#f28482]"
      >
        {profiles?.map((profile) => (
          <ProfileCard key={profile._id} profile={profile} />
        ))}
      </div>
    </div>
  );
}
