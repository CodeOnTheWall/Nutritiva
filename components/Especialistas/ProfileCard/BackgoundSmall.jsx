import { motion } from "framer-motion";

export default function BackgroundSmall() {
  return (
    <motion.div
      initial={{
        x: 0,
        y: 0,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 2.5,
      }}
      className=" relative flex justify-center items-center "
    >
      <div className=" absolute border border-[#f28482] md:h-[150px] md:w-[250px] mt-52 opacity-80 animate-pulse " />
      <div className=" absolute border border-[#f28482] md:h-[175px] md:w-[275px] mt-52 opacity-80 animate-pulse" />
    </motion.div>
  );
}
