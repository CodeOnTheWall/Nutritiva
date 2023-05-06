import Layout from "../Layout/Layout";
import MotionDiv from "../Motion/MotionDIv";
import MotionTitle from "../Motion/MotionTitle";
import ContactoCard from "./ContactoCard";

export default function Contacto() {
  return (
    <Layout>
      <div className="flex mb-14 items-center">
        <MotionDiv
          x={25}
          y={25}
          duration={1.2}
          useAnimate={false}
          className="bg-[#f28482] md:w-[2px] md:h-[32px] mr-[15px]"
        />
        <MotionTitle
          y={-25}
          duration={1.2}
          className="tracking-[15px] text-[13px]"
        >
          Contacto
        </MotionTitle>

        <MotionDiv
          x={-25}
          y={-25}
          duration={1.2}
          useAnimate={false}
          className="bg-[#f28482] md:w-[2px] md:h-[32px]"
        />
      </div>

      <div className=" w-full flex md:justify-center md:items-center">
        <ContactoCard />
      </div>
    </Layout>
  );
}
