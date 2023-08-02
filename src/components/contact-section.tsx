"use client";

import { socialNetwork } from "@/data";
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
      </div>
      <div className="mt-24">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-xl tracking-wider leading-loose sm:text-3xl text-gray-100 text-center max-w-2xl mx-auto"
        >
          Got a project in mind? Contact Me! Let's make something awesome
          together.
        </motion.p>
        <div className="flex justify-between text-base leading-7 mt-20 max-w-md sm:max-w-xl mx-auto">
          {socialNetwork.map((item, i) =>
            item.label === "Github" ? null : (
              <motion.a
                key={`${item.label}-${i}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
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
            )
          )}
        </div>
      </div>
    </div>
  );
}
