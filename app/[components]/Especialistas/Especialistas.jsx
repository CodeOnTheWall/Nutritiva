import ProfileCard from "./ProfileCard/ProfileCard";

import Layout from "../Layout/Layout";

import MotionDiv from "../Motion/MotionDIv";
import MotionTitle from "../Motion/MotionTitle";

export default function Especialistas({ profiles }) {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row mb-14 items-center">
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

      <div
        className="w-full flex overflow-x-scroll space-x-3 lg:space-x-10
        scrollbar scrollbar-track-[#f7cad0] scrollbar-thumb-[#f28482]"
      >
        {profiles?.map((profile) => (
          <ProfileCard key={profile._id} profile={profile} />
        ))}
      </div>
    </Layout>
  );
}
