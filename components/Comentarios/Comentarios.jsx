import ComentarioCard from "./ComentarioCard";

import MotionTitle from "../Motion/MotionTitle";
import MotionDiv from "../Motion/MotionDiv";

export default function Comentarios({ comentarios }) {
  return (
    // need relative here with h-screen
    <div className=" h-screen flex flex-col relative mx-auto items-center  md:flex-row max-w-7xl px-8 md:justify-center">
      <div className="absolute flex top-[15px] md:top-[10px]  ">
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
            className="uppercase tracking-[15px] md:tracking-[20px] text-[#f28482] md:text-2xl"
          >
            Comentarios
          </MotionTitle>

          <MotionDiv
            x={-25}
            y={-25}
            duration={1.2}
            useAnimate={false}
            className=" md:w-[2px] md:h-[32px] bg-[#f28482] mr-[15px]"
          />
        </div>
      </div>

      <div
        className="relative top-[50px] md:-top-[120px] flex flex-col h-[475px] overflow-x-scroll snap-x snap-mandatory
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
