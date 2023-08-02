"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.3 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto py-20 sm:py-[245px] lg:py-60 xl:py-[265px]"
    >
      <div className="w-fit mx-auto">
        <h2 className=" font-bold tracking-tight text-white text-4xl sm:text-5xl lg:text-6xl">
          About Me
        </h2>
        <div className="bg-lime-500 w-1/2 h-1 mx-auto mt-2" />
      </div>
      <p className="text-sm sm:text-base lg:text-lg sm:leading-8 text-gray-300 text-center mt-16">
        Hi, My name is Chakib Benchnoun and I'm currently based in Oran,
        Algeria. I'm freelancer specialize in web applications with two years of
        experience and a huge motivation to create something user-friendly and
        beautiful, I have worked on several projects which i'm proud to show you
        some of them{" "}
        <a
          href="#projects"
          className="hover:text-lime-500 underline underline-offset-4 transition"
        >
          below
        </a>
      </p>
      <div className="mx-auto w-fit mt-20">
        <a
          href="/CV.pdf"
          download
          className="rounded-lg bg-lime-800 px-4 py-2.5 sm:text-base text-sm font-semibold text-white shadow-sm hover:bg-lime-700"
        >
          Download My Cv For More
        </a>
      </div>
    </motion.div>
  );
}
