"use client";

// import BackgroundRectangles from "./BackgroundRectangles";
import { motion } from "framer-motion";
import urlFor from "@/lib/urlFor";
import { Cursor, useTypewriter } from "react-simple-typewriter";

// lets make my image merge in from the left, and the squares (instead of circles merge in from right side of screen)
// then my typewriter will write from the right side of the screen
// á, é, í, ó, ú, ü, ñ, ¿, ¡

export default function MainPage({ mainPagee }) {
  const [text, count] = useTypewriter({
    words: [
      `Tu Salud es lo más importante `,
      "Conocer a tus Especialistas hoy",
      "Nosotras estamos listas para ayudar",
    ],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <div className=" h-screen flex flex-col space-y-10 justify-center items-center text-center overflow-hidden">
      {/* <BackgroundRectangles /> */}

      <motion.div
        initial={{
          x: -25,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2,
          delay: 2,
        }}
        className=" relative bottom-[45px]"
      >
        <img
          className="relative rounded-full h-[300px] w-[300px] object-cover"
          // import me1 from "../public/me1.jpg";
          // src={me1}
          src={urlFor(mainPagee.logo).url()}
          alt="Nutritiva Logo"
        />
      </motion.div>

      <motion.div
        initial={{
          x: -25,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2,
          delay: 2,
        }}
        className=" relative bottom-[45px]"
      >
        <h1 className=" text-base md:text-3xl font-semibold px-10 ">
          <span className=" mr-3 text-[#f28482]/90">{text}</span>
          <Cursor cursorColor="#f28482" />
        </h1>
      </motion.div>

      <motion.div
        initial={{
          x: -25,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2,
          delay: 2,
        }}
        className="relative bottom-[45px] w-[400px] h-[300px] md:w-[800px] md:h-[300px]"
      >
        <h1 className="text-sm md:text-2xl text-[#f28482]/80  font-semibold px-10">
          {mainPagee.description}
        </h1>
      </motion.div>
    </div>
  );
}
