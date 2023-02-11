"use client";

import { useState } from "react";
import urlFor from "@/lib/urlFor";
import { motion } from "framer-motion";
import CertificationCard from "./CertificationCard";

export default function ProfileCard({ profile }) {
  const [normal, setNormalPage] = useState(true);
  const [certPage, setCertPage] = useState(false);
  const [serviciosPage, setServiciosPage] = useState(false);

  const certPageChangeHandler = () => {
    setCertPage(true);
    setNormalPage(false);
    setServiciosPage(false);
  };
  const normalPageChangeHandler = () => {
    setCertPage(false);
    setNormalPage(true);
    setServiciosPage(false);
  };
  const serviciosPageChangeHandler = () => {
    setCertPage(false);
    setNormalPage(false);
    setServiciosPage(true);
  };

  return (
    <>
      {normal && (
        <article
          className="relative rounded-lg w-[400px] h-[650px] md:h-[700px] md:w-[700px] items-center flex-shrink-0
    snap-center bg-[#f4a261]/40 pt-12 md:p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden"
        >
          <div className=" flex justify-center text-center md:space-x-[80px] h-[200px] md:h-[250px]">
            <motion.img
              initial={{
                x: -25,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              // viewport={{ once: true }}
              className="relative top-11 md:top-0 w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full object-cover object-center"
              src={urlFor(profile.secondImage).url()}
              alt="Especialista"
            />

            <motion.div
              initial={{
                x: 25,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              className="mt-1 h-[200px] w-[200px]"
            >
              <h2 className="font-bold text-2xl text-[#fb6107]">
                {profile.nombre}
              </h2>
              <div>
                <p className="text-[#fb6107] flex justify-center">
                  {profile.title}
                </p>
              </div>
              <div>
                <p className="text-[#fb6107] flex justify-center">
                  {profile.cp}
                </p>
              </div>

              <h2 className="flex justify-center mt-4 mx-auto font-bold text-[16px] md:text-[20px] text-[#fb6107]/80">
                {profile.quote}
              </h2>
            </motion.div>
          </div>

          <div
            className=" px-10 h-[250px] md:h-[300px] overflow-y-auto mt-5
            md:scrollbar scrollbar-track-[#d0e7d5] scrollbar-thumb-[#ef8eb2]
     "
          >
            <p className="md:text-[16px] text-center">{profile.description}</p>
          </div>

          <div className="flex justify-center mt-5">
            <div className=" md:space-x-6 flex flex-col md:flex-row">
              <div className="relative">
                <button
                  onClick={serviciosPageChangeHandler}
                  className=" text-[#f77f00] text-[20px] hover:headerButton"
                >
                  Servicios/Reserva ahora
                </button>
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
                  transition={{ duration: 1.5 }}
                  className="absolute bottom-4 -left-[8px] w-[2px] h-[13px] bg-[#f28482]"
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
                  transition={{ duration: 1.5 }}
                  className="absolute top-4 -left-[8px] w-[2px] h-[13px] bg-[#f28482]"
                />
              </div>

              <div className="relative">
                <button
                  onClick={certPageChangeHandler}
                  className=" text-[#f77f00] text-[20px] hover:headerButton"
                >
                  Certificaciones
                </button>
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
                  transition={{ duration: 1.5 }}
                  className="absolute bottom-4 -left-[8px] w-[2px] h-[13px] bg-[#f28482]"
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
                  transition={{ duration: 1.5 }}
                  className="absolute top-4 -left-[8px] w-[2px] h-[13px] bg-[#f28482]"
                />
              </div>
            </div>
          </div>
        </article>
      )}

      {/* certificaciones */}
      {certPage && (
        <article
          className="relative rounded-lg w-[400px] h-[650px] md:h-[700px] md:w-[700px] items-center space-y-7 flex-shrink-0 
     snap-center bg-[#f4a261]/40  md:p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden"
        >
          <div className=" flex justify-center text-center">
            <CertificationCard profile={profile} />
          </div>

          {/* buttons */}
          <div className="flex justify-center mt-7">
            <div className=" md:space-x-6  flex flex-col md:flex-row">
              <div className="relative">
                <button
                  onClick={serviciosPageChangeHandler}
                  className=" text-[#f77f00] text-[20px] hover:headerButton"
                >
                  Servicios/Reserva ahora
                </button>
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
                  transition={{ duration: 1.5 }}
                  className="absolute bottom-4 -left-[8px] w-[2px] h-[13px] bg-[#f28482]"
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
                  transition={{ duration: 1.5 }}
                  className="absolute top-4 -left-[8px] w-[2px] h-[13px] bg-[#f28482]"
                />
              </div>

              <div className="relative">
                <button
                  onClick={normalPageChangeHandler}
                  className=" text-[#f77f00] text-[20px] hover:headerButton"
                >
                  Regresa
                </button>
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
                  transition={{ duration: 1.5 }}
                  className="absolute bottom-4 -left-[8px] w-[2px] h-[13px] bg-[#f28482]"
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
                  transition={{ duration: 1.5 }}
                  className="absolute top-4 -left-[8px] w-[2px] h-[13px] bg-[#f28482]"
                />
              </div>
            </div>
          </div>
        </article>
      )}

      {/* servicios */}
      {serviciosPage && (
        <article
          className="relative rounded-lg w-[400px] h-[650px] md:h-[700px] md:w-[700px] items-center space-y-7 flex-shrink-0 
     snap-center bg-[#f4a261]/40 pt-12 md:p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden"
        >
          <div className=" flex justify-center text-center md:space-x-[80px] h-[200px] md:h-[250px]">
            <motion.img
              initial={{
                x: -25,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              // viewport={{ once: true }}
              className="relative top-11 md:top-0 w-[100px] h-[100px] md:w-[200px] md:h-[300px] rounded-md object-cover object-center"
              src={urlFor(profile.mainImage).url()}
              alt="Especialista"
            />
          </div>

          {/* buttons */}
          <div className="flex justify-center mt-7">
            <div className=" md:space-x-6  flex flex-col md:flex-row">
              <div className="relative">
                <button
                  onClick={normalPageChangeHandler}
                  className=" text-[#f77f00] text-[20px] hover:headerButton"
                >
                  Regresa
                </button>
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
                  transition={{ duration: 1.5 }}
                  className="absolute bottom-4 -left-[8px] w-[2px] h-[13px] bg-[#f28482]"
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
                  transition={{ duration: 1.5 }}
                  className="absolute top-4 -left-[8px] w-[2px] h-[13px] bg-[#f28482]"
                />
              </div>

              <div className="relative">
                <button
                  onClick={certPageChangeHandler}
                  className=" text-[#f77f00] text-[20px] hover:headerButton"
                >
                  Certificaciones
                </button>
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
                  transition={{ duration: 1.5 }}
                  className="absolute bottom-4 -left-[8px] w-[2px] h-[13px] bg-[#f28482]"
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
                  transition={{ duration: 1.5 }}
                  className="absolute top-4 -left-[8px] w-[2px] h-[13px] bg-[#f28482]"
                />
              </div>
            </div>
          </div>
        </article>
      )}
    </>
  );
}
