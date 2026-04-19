"use client";

import { motion } from "framer-motion";

export function AboutSection({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.3 }}
      viewport={{ once: true }}
      className={className}
      id="about"
    >
      <div className="max-w-5xl mx-auto">
        <div className="w-fit mx-auto">
          <h2 className=" font-bold tracking-tight text-white text-4xl sm:text-5xl lg:text-6xl">
            About Me
          </h2>
          <div className="bg-lime-500 w-1/2 h-1 mx-auto mt-2" />
        </div>
        <p className="text-sm sm:text-base lg:text-lg sm:leading-8 text-gray-300 text-center mt-16">
          Frontend Engineer with 4+ years building scalable React/Next.js + TypeScript applications. Currently at Encode Studio delivering high-impact admin platforms. Co-founder of Boutique Ennasr, automating luxury retail operations with full-stack systems. Specialized in Monorepo architecture, type-safe APIs, and performance optimization. Based in Oran, Algeria.{" "}
          <a
            href="#projects"
            className="hover:text-lime-500 underline underline-offset-4 transition"
          >
            Below
          </a>
          {" "}you'll find recent projects I've shipped.
        </p>
        <div className="mx-auto w-fit mt-20">
          <a
            href="/Chakib_Benchinoun_CV.pdf"
            download
            className="rounded-lg bg-lime-800 px-4 py-2.5 sm:text-base text-sm font-semibold text-white shadow-sm hover:bg-lime-700"
          >
            Download My Cv For More
          </a>
        </div>
      </div>
    </motion.div>
  );
}
