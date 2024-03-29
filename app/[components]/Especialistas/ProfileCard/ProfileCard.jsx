"use client";

// react
import { useState } from "react";

import CertificationCard from "./CertificationCard";
import ServicioCard from "./ServicioCard";
import Cita from "./Cita";
import MotionImg from "../../Motion/MotionImg";
import MotionDiv from "../../Motion/MotionDIv";

function BackgroundSmall() {
  return (
    <div className=" relative flex justify-center items-center ">
      <div className=" absolute border border-[#f28482] md:h-[150px] md:w-[250px] mt-52 opacity-80 animate-pulse " />
      <div className=" absolute border border-[#f28482] md:h-[175px] md:w-[275px] mt-52 opacity-80 animate-pulse" />
    </div>
  );
}

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
        className="relative rounded-lg h-[650px] md:h-[600px] flex-shrink-0 w-full lg:w-3/4 2xl:w-2/5
    bg-[#f4a261]/40 p-4 md:p-8 md:hover:opacity-100 md:opacity-40 md:transition-opacity md:duration-200 overflow-hidden"
      >
        {/* normal */}
        {normal && (
          <div className="h-[490px] ">
            <div className=" flex justify-center md:space-x-[80px] mb-3 md:mb-10">
              <div className="flex items-center h-[200px]">
                <MotionImg
                  x={-25}
                  y={0}
                  opacity={0}
                  className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full object-cover object-center"
                  url={profile.secondImage}
                  alt="Especialistas"
                  duration={1.2}
                />
              </div>

              <div className="flex items-center text-center h-[200px] w-[200px]">
                <MotionDiv x={25} y={0} opacity={0} duration={1.2}>
                  <h2 className="font-bold text-2xl text-[#f28482]">
                    {profile.nombre}
                  </h2>
                  <p className="text-[#f28482]">{profile.title}</p>
                  <p className="text-[#f28482]">{profile.cp}</p>
                  <h2 className="mt-4 font-bold text-[16px] md:text-[20px] text-[#f28482]/80">
                    {profile.quote}
                  </h2>
                </MotionDiv>
              </div>
            </div>

            <p
              className="md:text-[16px] px-10 text-center h-[275px] sm:h-[200px] overflow-y-auto
  md:scrollbar scrollbar-track-[#d0e7d5] scrollbar-thumb-[#ef8eb2]"
            >
              {profile.description}
            </p>
          </div>
        )}

        {/* Servicios/Reserva Ahora */}
        {serviciosPage && (
          <div className="h-[490px]">
            <div className="flex flex-row sm:space-x-10 justify-evenly">
              <div className="hidden md:flex flex-col justify-center">
                <MotionImg
                  x={-25}
                  y={0}
                  opacity={0}
                  className="relative w-[200px] h-[275px] rounded-md object-cover object-center"
                  url={profile.mainImage}
                  alt="Especialista"
                  duration={1.2}
                />

                <div className=" relative">
                  <BackgroundSmall />
                  <MotionDiv
                    x={25}
                    y={0}
                    opacity={0}
                    duration={1.2}
                    className="h-[200px] w-[200px]"
                  >
                    <h2 className="flex h-[200px] justify-center items-center  mx-auto font-bold text-[16px] md:text-[20px] text-[#f28482]/80">
                      {profile.quote2}
                    </h2>
                  </MotionDiv>
                </div>
              </div>

              <div
                className=" space-y-4 mt-3 md:mt-0 h-[450px] overflow-y-auto
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

        {/* Certificaciones */}
        {certPage && (
          <div
            className=" flex justify-center text-center h-[490px]
          "
          >
            <div className="h-[450px] overflow-y-auto md:scrollbar scrollbar-track-[#d0e7d5] scrollbar-thumb-[#ef8eb2] ">
              {profile.certificaciones.map((certificacion) => (
                <CertificationCard
                  key={certificacion._key}
                  certificacion={certificacion}
                />
              ))}
            </div>
          </div>
        )}

        {/* Reserva ahora*/}
        {reservaAhoraPage && (
          <div className="flex justify-center h-[490px] ">
            <Cita stripePriceID={stripePriceID} profile={profile} />
          </div>
        )}

        {/* Buttons Normal */}
        <div className="flex justify-center mt-5">
          <div className=" md:space-x-6 flex flex-col md:flex-row">
            <div className="relative">
              {normal && (
                <button
                  onClick={serviciosPageChangeHandler}
                  className=" text-[#f28482] text-[20px] hover:headerButton"
                >
                  Servicios/Reserva ahora
                </button>
              )}
              {serviciosPage && (
                <button
                  onClick={normalPageChangeHandler}
                  className=" text-[#f28482] text-[20px] hover:headerButton"
                >
                  Regresa
                </button>
              )}
              {certPage && (
                <button
                  onClick={serviciosPageChangeHandler}
                  className=" text-[#f28482] text-[20px] hover:headerButton"
                >
                  Servicios/Reserva ahora
                </button>
              )}
              {reservaAhoraPage && (
                <button
                  onClick={serviciosPageChangeHandler}
                  className=" text-[#f28482] text-[20px] hover:headerButton"
                >
                  Regresa
                </button>
              )}

              <MotionDiv
                y={-20}
                rotate={25}
                duration={1.5}
                useAnimate={true}
                className="absolute bottom-4 -left-[8px] w-[2px] h-[13px] bg-[#f28482]"
              />
              <MotionDiv
                y={20}
                rotate={-25}
                duration={1.5}
                useAnimate={true}
                className="absolute top-4 -left-[8px] w-[2px] h-[13px] bg-[#f28482]"
              />
            </div>

            <div className="relative">
              {normal && (
                <button
                  onClick={certPageChangeHandler}
                  className=" text-[#f28482] text-[20px] hover:headerButton"
                >
                  Certificaciones
                </button>
              )}
              {serviciosPage && (
                <button
                  onClick={certPageChangeHandler}
                  className=" text-[#f28482] text-[20px] hover:headerButton"
                >
                  Certificaciones
                </button>
              )}
              {certPage && (
                <button
                  onClick={normalPageChangeHandler}
                  className=" text-[#f28482] text-[20px] hover:headerButton"
                >
                  Regresa
                </button>
              )}
              {reservaAhoraPage && (
                <button
                  onClick={normalPageChangeHandler}
                  className=" text-[#f28482] text-[20px] hover:headerButton"
                >
                  Inicio
                </button>
              )}

              <MotionDiv
                y={-20}
                rotate={25}
                duration={1.5}
                useAnimate={true}
                className="absolute bottom-4 -left-[8px] w-[2px] h-[13px] bg-[#f28482]"
              />
              <MotionDiv
                y={20}
                rotate={-25}
                duration={1.5}
                useAnimate={true}
                className="absolute top-4 -left-[8px] w-[2px] h-[13px] bg-[#f28482]"
              />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
