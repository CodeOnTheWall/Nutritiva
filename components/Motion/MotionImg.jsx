"use client";

import urlFor from "@/lib/urlFor";
import { motion } from "framer-motion";

export default function MotionImg({
  x,
  y,
  url,
  opacity,
  alt,
  duration,
  className,
  delay,
}) {
  return (
    <motion.img
      src={urlFor(url).url()}
      initial={{
        opacity: opacity,
        y: y,
        x: x,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: duration,
        delay: delay,
      }}
      // viewport={{ once: true }}
      className={className}
      alt={alt}
    />
  );
}
