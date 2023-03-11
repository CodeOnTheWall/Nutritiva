"use client";
import MotionTitle from "../Motion/MotionTitle";
import MotionDiv from "../Motion/MotionDiv";

import ProductoCard from "./ProductoCard";
import { motion } from "framer-motion";

export default function Productos({ productos }) {
  return (
    // need relative here with h-screen
    <div className=" h-screen flex flex-col relative mx-auto items-center max-w-7xl px-8 md:justify-center">
      <div className="absolute flex md:top-[10px]  ">
        <div className="flex flex-col md:flex-row items-center">
          <MotionDiv
            x={25}
            y={25}
            duration={1.2}
            useAnimate={false}
            className=" md:w-[2px] md:h-[32px] bg-[#f28482] mr-[15px]"
          />
          <MotionTitle
            y={-25}
            duration={1.2}
            className="uppercase tracking-[10px] md:tracking-[20px] text-[#f28482]  text-[12px] md:text-[16px]"
          >
            Nuetraceúticos y
          </MotionTitle>
          <MotionTitle
            y={25}
            duration={1.2}
            className=" md:ml-3 uppercase tracking-[10px] md:tracking-[20px] text-[#f28482]  text-[12px] md:text-[16px]"
          >
            Suplementos
          </MotionTitle>
          <MotionDiv
            x={-25}
            y={-25}
            duration={1.2}
            useAnimate={false}
            className="  md:w-[2px] md:h-[32px] bg-[#f28482] "
          />
        </div>
      </div>

      <h2 className="relative md:-top-[150px]  flex text-[#f28482] text-[18px]">
        Productos Ariix
      </h2>
      <div
        className="relative md:-top-[120px] flex flex-col h-[475px] overflow-x-scroll snap-x snap-mandatory
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
