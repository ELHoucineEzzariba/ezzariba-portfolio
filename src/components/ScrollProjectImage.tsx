"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type ScrollProjectImageProps = {
  src: string;
  alt: string;
  compact?: boolean;
};

export function ScrollProjectImage({ src, alt, compact = false }: ScrollProjectImageProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: frameRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [20, -20]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], reduceMotion ? [1, 1, 1] : [1.05, 1, 1.05]);

  return (
    <div ref={frameRef} className={compact ? "project-shot project-shot-compact" : "project-shot"}>
      <motion.div className="absolute inset-[-22px]" style={{ y, scale }}>
        <Image src={src} alt={alt} fill sizes={compact ? "(max-width: 1024px) 100vw, 33vw" : "(max-width: 1024px) 100vw, 42vw"} className="object-cover" />
      </motion.div>
      <div className="project-shot-shade" aria-hidden="true" />
    </div>
  );
}
