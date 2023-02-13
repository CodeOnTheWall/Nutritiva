import { motion } from "framer-motion";

function BackgroundRectangles() {
  return (
    <motion.div
      initial={{
        x: 0,
        y: 0,
        opacity: 0,
      }}
      animate={{
        x: 0,
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 2.5,
      }}
      className=" relative flex justify-center items-center top-[150px] md:top-[200px]"
    >
      <div className=" absolute border border-[#f28482] h-[600px] w-[350px] md:h-[400px] md:w-[500px] mt-52 opacity-20 animate-pulse " />
      <div className=" absolute border border-[#f28482] md:h-[550px] md:w-[650px] mt-52 opacity-20 animate-pulse" />
      <div className=" absolute border border-[#f28482] md:h-[700px] md:w-[800px] mt-52 " />
    </motion.div>
  );
}

export default BackgroundRectangles;
