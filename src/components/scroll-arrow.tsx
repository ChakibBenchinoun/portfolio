"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "./icons/arrows/arrow-right";

export function ScrollArrow() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 2.1 }}
      className="hidden sm:block absolute -top-24 lg:-top-28 animate-bounce right-0"
    >
      <div className="rotate-90 flex justify-center items-center">
        <span className="text-gray-300 tracking-wider">scroll down</span>
        <div className="w-5 h-0.5 bg-slate-300 ml-3" />
        <ArrowRight className="text-gray-300 -ml-2" />
      </div>
    </motion.div>
  );
}
