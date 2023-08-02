"use client";

import { socialMedia } from "@/data";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <div id="contact" className="py-20 sm:py-[245px] lg:py-60 xl:py-[265px]">
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="w-fit mx-auto"
        >
          <h2 className="font-bold tracking-tight text-white text-3xl sm:text-4xl lg:text-5xl">
            Contact Me
          </h2>
          <div className="bg-lime-500 w-1/2 h-1 mx-auto mt-2" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.4 }}
          className="mt-16 text-2xl tracking-wider leading-loose sm:text-4xl text-gray-100 text-center"
        >
          Got a project in mind? Contact Me! Let's make something awesome
          together.
        </motion.p>
      </div>
      <div className="mx-auto mt-32 grid max-w-2xl  grid-cols-2 gap-8 text-base leading-7 lg:grid-cols-4 sm:gap-y-16 lg:mx-0 lg:max-w-none xl:grid-cols-5">
        {socialMedia.map((item, i) => (
          <motion.a
            key={`${item.label}-${i}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 + i / 9 }}
            href={item.path}
          >
            <h3 className="border-l-4 border-lime-500 pl-6 font-semibold text-gray-200 flex items-center">
              <item.icon /> <span className="ml-2">{item.label}</span>
            </h3>
            <address className="border-l-4 border-gray-400 pl-6 pt-2 not-italic text-gray-500">
              <p>{item.name}</p>
            </address>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
