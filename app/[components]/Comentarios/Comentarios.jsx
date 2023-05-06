import ComentarioCard from "./ComentarioCard";

import MotionTitle from "../Motion/MotionTitle";
import MotionDiv from "../Motion/MotionDIv";
import Layout from "../Layout/Layout";

export default function Comentarios({ comentarios }) {
  return (
    <Layout className=" flex-col justify-center items-center ">
      <div className="flex flex-col md:flex-row items-center mb-14">
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

      <div
        className="flex flex-col h-[475px] overflow-x-scroll 
        scrollbar scrollbar-track-[#f7cad0] scrollbar-thumb-[#f28482]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-3 md:space-y-0">
          {comentarios?.map((comentario) => (
            <ComentarioCard key={comentario._id} comentario={comentario} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
