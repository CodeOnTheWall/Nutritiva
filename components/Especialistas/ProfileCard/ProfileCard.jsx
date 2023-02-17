"use client";

// react
import { useState } from "react";

// custom hook to handle img from sanity
import urlFor from "@/lib/urlFor";

// framer motion
import { motion } from "framer-motion";

import BackgroundSmall from "./BackgoundSmall";
import CertificationCard from "./CertificationCard";
import ServicioCard from "./ServicioCard";
import Cita from "./Cita";

export default function ProfileCard({ profile }) {
  const [normal, setNormalPage] = useState(true);
  const [certPage, setCertPage] = useState(false);
  const [serviciosPage, setServiciosPage] = useState(false);
  const [reservaAhoraPage, setReservaAhoraPage] = useState(false);
  const [stripePriceID, setStripePriceID] = useState();

  const certPageChangeHandler = () => {
    setCertPage(true);
    setNormalPage(false);
    setServiciosPage(false);
  };
  const normalPageChangeHandler = () => {
    setCertPage(false);
    setServiciosPage(false);
    setReservaAhoraPage(false);
    setNormalPage(true);
  };
  const serviciosPageChangeHandler = () => {
    setCertPage(false);
    setNormalPage(false);
    setReservaAhoraPage(false);
    setServiciosPage(true);
  };
  const reservaAhoraPageChangeHandler = (id) => {
    setCertPage(false);
    setNormalPage(false);
    setServiciosPage(false);
    setReservaAhoraPage(true);
    setStripePriceID(id);
  };

  return (
    <>
      <article
        className="relative rounded-lg w-[400px] h-[650px] md:h-[700px] md:w-[700px] items-center flex-shrink-0
    snap-center bg-[#f4a261]/40 pt-14 md:p-10 md:hover:opacity-100 md:opacity-40 md:transition-opacity md:duration-200 overflow-hidden"
      >
        {/* normal */}
        {normal && (
          <div className="h-[490px] md:h-[575px]">
            <div className=" flex justify-center md:space-x-[80px] mb-3 md:mb-10">
              <div className="flex items-center h-[200px]">
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
                  className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full object-cover object-center"
                  src={urlFor(profile.secondImage).url()}
                  alt="Especialista"
                />
              </div>

              <div className="flex items-center text-center h-[200px] w-[200px]">
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
                >
                  <h2 className="font-bold text-2xl text-[#fb6107]">
                    {profile.nombre}
                  </h2>
                  <p className="text-[#fb6107]">{profile.title}</p>
                  <p className="text-[#fb6107]">{profile.cp}</p>

                  <h2 className="mt-4 font-bold text-[16px] md:text-[20px] text-[#fb6107]/80">
                    {profile.quote}
                  </h2>
                </motion.div>
              </div>
            </div>

            <p
              className="md:text-[16px] px-10 text-center h-[250px] md:h-[300px] overflow-y-auto
  md:scrollbar scrollbar-track-[#d0e7d5] scrollbar-thumb-[#ef8eb2]"
            >
              {profile.description}
            </p>
          </div>
        )}

        {/* Servicios/Reserva Ahora */}
        {serviciosPage && (
          <div className="h-[490px] md:h-[575px]">
            <div className="flex flex-row sm:space-x-10 justify-evenly">
              <div className="hidden md:flex flex-col justify-center">
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
                  className="relative w-[200px] h-[275px] rounded-md object-cover object-center"
                  src={urlFor(profile.mainImage).url()}
                  alt="Especialista"
                />
                <div className=" relative">
                  <BackgroundSmall />
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
                    className="h-[200px] w-[200px]"
                  >
                    <h2 className="flex h-[200px] justify-center items-center  mx-auto font-bold text-[16px] md:text-[20px] text-[#fb6107]/80">
                      {profile.quote2}
                    </h2>
                  </motion.div>
                </div>
              </div>

              <div
                className=" space-y-4 mt-3 md:mt-0 h-[450px] md:h-[550px] overflow-y-auto
      md:scrollbar scrollbar-track-[#d0e7d5] scrollbar-thumb-[#ef8eb2]
   text-center "
              >
                {profile.servicios.map((servicio) => (
                  <ServicioCard
                    reserva={reservaAhoraPageChangeHandler}
                    key={servicio._id}
                    servicio={servicio}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Reserva ahora*/}
        {reservaAhoraPage && (
          <div className="flex justify-center h-[490px] md:h-[575px]">
            <Cita stripePriceID={stripePriceID} />
          </div>
        )}

        {/* Certificaciones */}
        {certPage && (
          <div className=" flex justify-center text-center h-[490px] md:h-[575px]">
            <CertificationCard profile={profile} />
          </div>
        )}

        {/* Buttons Normal */}
        <div className="flex justify-center">
          <div className=" md:space-x-6 flex flex-col md:flex-row">
            <div className="relative">
              {normal && (
                <button
                  onClick={serviciosPageChangeHandler}
                  className=" text-[#f77f00] text-[20px] hover:headerButton"
                >
                  Servicios/Reserva ahora
                </button>
              )}
              {serviciosPage && (
                <button
                  onClick={normalPageChangeHandler}
                  className=" text-[#f77f00] text-[20px] hover:headerButton"
                >
                  Regresa
                </button>
              )}
              {certPage && (
                <button
                  onClick={serviciosPageChangeHandler}
                  className=" text-[#f77f00] text-[20px] hover:headerButton"
                >
                  Servicios/Reserva ahora
                </button>
              )}
              {reservaAhoraPage && (
                <button
                  onClick={serviciosPageChangeHandler}
                  className=" text-[#f77f00] text-[20px] hover:headerButton"
                >
                  Regresa
                </button>
              )}

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
              {normal && (
                <button
                  onClick={certPageChangeHandler}
                  className=" text-[#f77f00] text-[20px] hover:headerButton"
                >
                  Certificaciones
                </button>
              )}
              {serviciosPage && (
                <button
                  onClick={certPageChangeHandler}
                  className=" text-[#f77f00] text-[20px] hover:headerButton"
                >
                  Certificaciones
                </button>
              )}
              {certPage && (
                <button
                  onClick={normalPageChangeHandler}
                  className=" text-[#f77f00] text-[20px] hover:headerButton"
                >
                  Regresa
                </button>
              )}
              {reservaAhoraPage && (
                <button
                  onClick={normalPageChangeHandler}
                  className=" text-[#f77f00] text-[20px] hover:headerButton"
                >
                  Inicio
                </button>
              )}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 0,
                  y: -20,
                }}
                animate={{
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
    </>
  );
}
