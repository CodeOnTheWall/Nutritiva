"use client";

import urlFor from "@/lib/urlFor";
import { motion } from "framer-motion";

export default function MotionImg({
  x,
  y,
  url,
  alt,
  duration,
  className,
  delay,
  useAnimate,
  scale,
}) {
  const animationProps = useAnimate
    ? { animate: { x: 0, y: 0, opacity: 1, scale: 1 } }
    : { whileInView: { x: 0, y: 0, opacity: 1 } };
  return (
    <motion.img
      src={urlFor(url).url()}
      initial={{
        x: x,
        y: y,
        opacity: 0,
        scale: scale,
      }}
      {...animationProps}
      transition={{ duration: duration, delay: delay }}
      alt={alt}
      className={className}
    />
  );
}
