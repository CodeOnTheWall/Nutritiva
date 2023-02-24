"use client";

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

export default function Header() {
  const handleClick = () => {
    window.location.hash = "contacto";
  };

  return (
    <header className="text-[#f28482] sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto">
      <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-4">
        <div className="relative">
          <motion.div
            initial={{
              x: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 1.5 }}
            className=" hover:headerButton"
          >
            <a href="#especialistas">Especialistas y Servicios</a>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 0,
              y: -20,
            }}
            animate={{
              // going to its normal position
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              rotate: 25,
            }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="absolute bottom-3 -left-[8px] w-[2px] h-[15px] bg-[#f28482]"
          />
          <motion.div
            initial={{
              opacity: 0,
              x: 0,
              y: 20,
            }}
            animate={{
              // going to its normal position
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              rotate: -25,
            }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="absolute top-3 -left-[8px] w-[2px] h-[15px] bg-[#f28482]"
          />
        </div>

        <div className=" flex relative">
          <motion.div
            initial={{
              x: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              // going to its normal position
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 1.5 }}
            className="flex flex-row items-center hover:headerButton"
          >
            <a href="#nut">Nutraceúticos y Suplementos</a>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 0,
              y: -20,
            }}
            animate={{
              // going to its normal position
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              rotate: 25,
            }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="absolute bottom-3 -left-[8px] w-[2px] h-[15px] bg-[#f28482]"
          />
          <motion.div
            initial={{
              opacity: 0,
              x: 0,
              y: 20,
            }}
            animate={{
              // going to its normal position
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              rotate: -25,
            }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="absolute top-3 -left-[8px] w-[2px] h-[15px] bg-[#f28482]"
          />
        </div>

        <div className=" flex relative">
          <motion.div
            initial={{
              x: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              // going to its normal position
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 1.5 }}
            className="flex flex-row items-center hover:headerButton"
          >
            <a href="#comentarios">Comentarios</a>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 0,
              y: -20,
            }}
            animate={{
              // going to its normal position
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              rotate: 25,
            }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="absolute bottom-3 -left-[8px] w-[2px] h-[15px] bg-[#f28482]"
          />
          <motion.div
            initial={{
              opacity: 0,
              x: 0,
              y: 20,
            }}
            animate={{
              // going to its normal position
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              rotate: -25,
            }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="absolute top-3 -left-[8px] w-[2px] h-[15px] bg-[#f28482]"
          />
        </div>
      </div>

      {/* Contact */}
      <div className=" flex relative md:space-x-1">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            // going to its normal position
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
          className=" text-[#f77f00] cursor-pointer"
        >
          <SocialIcon
            className=" cursor-pointer md:mr-4 flex"
            network="email"
            fgColor="grey"
            bgColor="#f28482"
            onClick={handleClick}
          />
        </motion.div>

        <div className=" relative">
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              // going to its normal position
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            className=" relative top-2 "
            transition={{ duration: 1.5 }}
          >
            <a
              href="#contacto"
              className=" uppercase hidden top-5 md:inline-flex text-sm text-[#f28482] animate-bounce"
            >
              Contacto
            </a>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 0,
              y: 5,
            }}
            animate={{
              // going to its normal position
              x: 0,
              y: 5,
              opacity: 1,
              scale: 1,
              // rotate: -25,
            }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className=" relative  hidden md:flex w-[70px] h-[2px] bg-[#f28482]"
          />
        </div>
      </div>
    </header>
  );
}
