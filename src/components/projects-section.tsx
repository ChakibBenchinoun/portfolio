"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";
import { projects } from "@/data";

export function ProjectsSection() {
  return (
    <div id="projects" className="py-20 sm:py-[245px] lg:py-60 xl:py-[265px]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="w-fit mx-auto"
      >
        <h2 className="font-bold tracking-tight text-white text-4xl sm:text-5xl lg:text-6xl">
          My Work
        </h2>
        <div className="bg-lime-500 w-1/2 h-1 mx-auto mt-2" />
      </motion.div>
      <div className="mt-16 gap-16 grid lg:grid-cols-6 grid-cols-4 lg:grid-rows-2">
        {projects.map((project, i) => (
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.4 + i / 9 }}
            href={project.href}
            key={`${project.imageAlt}-${i}`}
            className={clsx("group relative col-span-2", {
              "lg:col-start-2": i + 1 === 4,
              "lg:col-start-4 col-start-2": i + 1 === 5,
            })}
            target="_blank"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-lg lg:aspect-none border border-lime-800">
              <Image
                width={500}
                height={500}
                src={project.imageSrc}
                alt={project.imageAlt}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-lg p-2"
              />
              <div className="flex absolute w-full h-full top-0 items-end bg-black/90 rounded-md -translate-x-[100%] group-hover:translate-x-0 transition duration-700">
                <div className="mb-5 ml-5">
                  <h1 className="font-medium text-lg text-gray-400">
                    {project.name}
                  </h1>
                  <div className="bg-lime-500 h-0.5 scale-x-0 group-hover:scale-x-100 transition-all origin-left delay-500 duration-700" />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
