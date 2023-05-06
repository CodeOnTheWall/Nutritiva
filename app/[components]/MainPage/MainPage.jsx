import MotionImg from "../Motion/MotionImg";
import MotionDiv from "../Motion/MotionDIv";
import TypeWriter from "./[components]/TypeWriter";
import Layout from "../Layout/Layout";

// lets make my image merge in from the left, and the squares (instead of circles merge in from right side of screen)
// then my typewriter will write from the right side of the screen
// á, é, í, ó, ú, ü, ñ, ¿, ¡

export default function MainPage({ mainPagee }) {
  return (
    <Layout className="justify-start items-start">
      <div className="flex flex-col w-full space-y-10 items-center justify-start text-center">
        <MotionImg
          x={-25}
          duration={2}
          delay={2}
          className="rounded-full w-1/2 lg:w-1/5  h-auto"
          useAnimate={true}
          url={mainPagee.logo}
          alt="Nutritiva Logo"
        />

        <MotionDiv x={-25} duration={2} delay={2} useAnimate={true}>
          <h1 className=" text-base md:text-3xl font-semibold text-[#f28482]/90 ">
            <TypeWriter />
          </h1>
        </MotionDiv>
        <MotionDiv
          x={-25}
          duration={2}
          delay={2}
          useAnimate={true}
          className=" lg:w-1/2"
        >
          <h1 className="text-sm md:text-2xl text-[#f28482]/80 font-semibold">
            {mainPagee.description}
          </h1>
        </MotionDiv>
      </div>
    </Layout>
  );
}
