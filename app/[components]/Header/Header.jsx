import { SocialIcon } from "react-social-icons";

import MotionDiv from "../Motion/MotionDIv";
import { handleClick } from "../Header/IconLink";

function AnimatedLink({ href, children }) {
  return (
    <div className="relative">
      <MotionDiv
        x={-500}
        duration={1.5}
        useAnimate={true}
        className="hover:headerButton"
      >
        <a href={href} className=" lg:text-[20px]">
          {children}
        </a>
      </MotionDiv>
      <MotionDiv
        x={0}
        y={-20}
        rotate={25}
        duration={1.5}
        delay={1.5}
        useAnimate={true}
        className="absolute bottom-3 lg:bottom-4 -left-[8px] w-[2px] h-[15px] bg-[#f28482]"
      />
      <MotionDiv
        x={0}
        y={20}
        rotate={-25}
        duration={1.5}
        delay={1.5}
        useAnimate={true}
        className="absolute top-3 lg:top-4 -left-[8px] w-[2px] h-[15px] bg-[#f28482]"
      />
    </div>
  );
}

export default function Header() {
  return (
    <header
      className="text-[#f28482] bg-[#f7ede2] sticky top-0 z-20 flex items-center justify-between
      lg:px-32 px-6 py-5 mx-auto "
    >
      <div class="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
        <AnimatedLink
          children={"Especialistas y Servicios"}
          href={"#especialistas"}
        />
        <AnimatedLink
          children={"Nutraceúticos y Suplementos"}
          href={"#suplementos"}
        />
        <AnimatedLink children={"Comentarios"} href={"#comentarios"} />
      </div>

      {/* Contact */}
      <div className=" flex relative md:space-x-1">
        <MotionDiv
          x={500}
          duration={1.5}
          useAnimate={true}
          className=" text-[#f77f00] cursor-pointer"
        >
          <SocialIcon
            className=" cursor-pointer md:mr-4 flex"
            network="email"
            fgColor="grey"
            bgColor="#f28482"
            onClick={handleClick}
          />
        </MotionDiv>

        <div className=" relative">
          <MotionDiv
            x={500}
            duration={1.5}
            useAnimate={true}
            className=" relative top-2 "
          >
            <a
              href="#contacto"
              className=" uppercase hidden top-5 md:inline-flex text-sm text-[#f28482] animate-bounce"
            >
              Contacto
            </a>
          </MotionDiv>
          <MotionDiv
            useAnimate={true}
            duration={1.5}
            delay={1.5}
            className=" relative hidden md:flex w-[70px] h-[2px] bg-[#f28482] top-1"
          />
        </div>
      </div>
    </header>
  );
}
