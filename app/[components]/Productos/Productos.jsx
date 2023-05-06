import MotionTitle from "../Motion/MotionTitle";
import MotionDiv from "../Motion/MotionDIv";

import ProductoCard from "./ProductoCard";
import Layout from "../Layout/Layout";

export default function Productos({ productos }) {
  return (
    <Layout className="space-y-4 ">
      <div className="flex flex-col lg:flex-row items-center">
        <MotionDiv
          x={25}
          y={25}
          duration={1.2}
          useAnimate={false}
          className=" lg:w-[2px] lg:h-[32px] bg-[#f28482] mr-[15px]"
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
          className="  lg:w-[2px] lg:h-[32px] bg-[#f28482] "
        />
      </div>

      <h2 className="flex text-[#f28482] text-[18px]">Productos Ariix</h2>
      <div
        className="flex flex-col h-[475px] overflow-x-scroll 
        scrollbar scrollbar-track-[#f7cad0] scrollbar-thumb-[#f28482]"
      >
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-3 md:space-y-0">
          {productos?.map((producto) => (
            <ProductoCard key={producto._id} producto={producto} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
