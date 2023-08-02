"use client";

import clsx from "clsx";
import { MailIcon } from "./icons/mail";
import { LinkedInIcon } from "./icons/linkedin";
import { GithubIcon } from "./icons/github";
import { PhoneIcon } from "./icons/phone";
import { motion } from "framer-motion";

export function HeroSection({ className }: { className?: string }) {
  return (
    <div className={clsx("lg:grid lg:grid-cols-3 lg:gap-x-8", className)}>
      <div className="my-5 col-span-2">
        <motion.h3
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, delay: 0, type: "spring" }}
          className="sm:text-lg lg:text-xl font-medium text-lime-600"
        >
          Hey there!
        </motion.h3>
        <motion.h1
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, delay: 0.4, type: "spring" }}
          className="mt-8 text-4xl sm:text-5xl font-bold leading-10 lg:text-6xl text-gray-100"
        >
          Chakib Benchinoun, <br />
          Freelance Software Engineer
        </motion.h1>
        <motion.p
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, delay: 0.7, type: "spring" }}
          className="mt-8 text-sm sm:text-base lg:text-lg sm:leading-8 text-gray-400 max-w-xl pb-5"
        >
          Hi, My Name Is Chakib And Welcom To My Portfolio
        </motion.p>
        <div className="mt-10 flex items-center gap-x-6">
          <motion.a
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5, delay: 1, type: "spring" }}
            href="#contact"
            className="rounded-lg bg-lime-800 px-4 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-lime-700"
          >
            Contact Me
          </motion.a>
        </div>
      </div>
      <div className="relative col-start-3 hidden lg:block ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 3 }}
          className="absolute right-10 xl:right-0 top-[10%]"
        >
          <a href="mailto:chakib022@icloud.com">
            <MailIcon className="ml-14 mt-2 text-gray-200 hover:text-lime-500 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/chakib-benchinoun-56b367275/">
            <LinkedInIcon className="ml-10 mt-2 text-gray-200 hover:text-blue-500 transition-colors" />
          </a>
          <a href="https://github.com/ChakibBenchinoun">
            <GithubIcon className="ml-6 mt-2 text-gray-200 hover:text-gray-500 transition-colors" />
          </a>
          <a href="tel:+213540580738">
            <PhoneIcon className="ml-2 mt-2 text-gray-200 hover:text-red-500 transition-colors" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
