import MotionImg from "../Motion/MotionImg";
import MotionDiv from "../Motion/MotionDiv";
import TypeWriter from "./TypeWriter";

// lets make my image merge in from the left, and the squares (instead of circles merge in from right side of screen)
// then my typewriter will write from the right side of the screen
// á, é, í, ó, ú, ü, ñ, ¿, ¡

export default function MainPage({ mainPagee }) {
  return (
    <div className=" h-screen flex flex-col space-y-10 justify-center items-center text-center overflow-hidden">
      <MotionImg
        opacity={0}
        y={0}
        x={-25}
        duration={2}
        delay={2}
        className=" relative bottom-[45px] rounded-full h-[200px] w-[200px] xl:h-[300px] xl:w-[300px] object-cover"
        url={mainPagee.logo}
        alt="Nutritiva Logo"
      />

      <MotionDiv
        x={-25}
        duration={2}
        delay={2}
        className="  relative bottom-[45px]"
        useAnimate={false}
      >
        <h1 className=" text-base md:text-3xl font-semibold px-10 mr-3 text-[#f28482]/90 ">
          <TypeWriter />
        </h1>
      </MotionDiv>
      <MotionDiv
        x={-25}
        duration={2}
        delay={2}
        className="  relative bottom-[45px] w-[400px] h-[300px] md:w-[800px] md:h-[300px]"
        useAnimate={false}
      >
        <h1 className="text-sm md:text-2xl text-[#f28482]/80  font-semibold px-10">
          {mainPagee.description}
        </h1>
      </MotionDiv>
    </div>
  );
}
