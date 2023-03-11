import ProfileCard from "./ProfileCard/ProfileCard";

import MotionDiv from "../Motion/MotionDiv";
import MotionTitle from "../Motion/MotionTitle";

export default function Especialistas({ profiles }) {
  return (
    <div className=" h-screen flex flex-col relative mx-auto items-center  md:flex-row max-w-7xl px-8 md:justify-center">
      {/* // need relative here with h-screen */}

      <div className="absolute flex top-[10px]   ">
        <div className="flex flex-col md:flex-row items-center">
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
            Nuestras
          </MotionTitle>
          <MotionTitle
            y={-25}
            duration={1.2}
            className="tracking-[15px] text-[13px] ml-3"
          >
            Especialistas
          </MotionTitle>
          <MotionDiv
            x={-25}
            y={-25}
            duration={1.2}
            useAnimate={false}
            className="bg-[#f28482] md:w-[2px] md:h-[32px]"
          />
        </div>
      </div>

      <div
        className="relative md:-top-[90px] w-full flex overflow-x-scroll snap-x snap-mandatory
        scrollbar scrollbar-track-[#f7cad0] scrollbar-thumb-[#f28482]"
      >
        {profiles?.map((profile) => (
          <ProfileCard key={profile._id} profile={profile} />
        ))}
      </div>
    </div>
  );
}
