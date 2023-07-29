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
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, delay: 0, type: "spring" }}
          className="text-xl font-medium"
        >
          Hey there!
        </motion.h3>
        <motion.h1
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, delay: 0.4, type: "spring" }}
          className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
        >
          Chakib Benchinoun, <br />
          Freelance Software Engineer
        </motion.h1>
        <motion.p
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, delay: 0.7, type: "spring" }}
          className="mt-8 text-lg leading-8 text-gray-600 max-w-xl"
        >
          Hi, My name is Chakib Benchnoun and I'm freelancer specialize in web
          applications based in Oran, Algeria.
        </motion.p>
        <div className="mt-10 flex items-center gap-x-6">
          <motion.a
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5, delay: 1, type: "spring" }}
            href="#"
            className="rounded-sm bg-gray-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-gray-500"
          >
            Contact Me
          </motion.a>
        </div>
      </div>
      <div className="relative col-start-3">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 3 }}
          className="absolute right-12 top-0"
        >
          <MailIcon className="ml-[60px] mt-1" />
          <LinkedInIcon className="ml-10 mt-1" />
          <GithubIcon className="ml-5 mt-1" />
          <PhoneIcon className="mt-1" />
        </motion.div>
      </div>
    </div>
  );
}
