"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
  floatDelay?: number;
}

export default function PhoneFrame({ children, className = "", floatDelay = 0 }: PhoneFrameProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: floatDelay,
      }}
    >
      <div className="relative mx-auto w-[220px] rounded-[2.5rem] border-[6px] border-dark/90 bg-dark/90 p-1.5 shadow-card sm:w-[250px]">
        <div className="absolute top-3 left-1/2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-dark/90" />
        <div className="overflow-hidden rounded-[2rem] bg-[#FAFAFC]">{children}</div>
      </div>
    </motion.div>
  );
}
