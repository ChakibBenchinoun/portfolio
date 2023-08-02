"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { skillSet } from "@/data";

export function SkillsSection() {
  return (
    <div id="skills" className="py-20 sm:py-[245px] lg:py-60 xl:py-[265px]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="w-fit mx-auto"
      >
        <h2 className="font-bold tracking-tight text-white text-4xl sm:text-5xl lg:text-6xl">
          Skill Set
        </h2>
        <div className="bg-lime-500 w-1/2 h-1 mx-auto mt-2" />
      </motion.div>
      <div className="-mx-6 grid grid-cols-2 gap-8 overflow-hidden sm:mx-0 md:grid-cols-3 mt-20">
        {skillSet.map((item, i) => (
          <motion.div
            key={`${item.label}-${i}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.4 + i / 9 }}
            className="bg-white/5 p-8 md:p-10 rounded-lg border border-lime-800 hover:border-lime-600 group duration-300"
          >
            <div className="flex justify-center items-center group-hover:scale-125 transition duration-500">
              <Image
                width={500}
                height={500}
                src={item.image}
                alt={item.label}
                className="w-14 h-14 object-contain"
              />
              <span className="ml-5 text-gray-300 sm:text-lg whitespace-nowrap lg:text-xl">
                {item.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
