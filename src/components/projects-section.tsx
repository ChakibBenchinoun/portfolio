"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";
import { projects } from "@/data";

export function ProjectsSection({ className }: { className?: string }) {
  return (
    <div id="projects" className={className}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
        viewport={{ once: true }}
        className="w-fit mx-auto"
      >
        <h2 className="font-bold tracking-tight text-white text-4xl sm:text-5xl lg:text-6xl">
          My Work
        </h2>
        <div className="bg-lime-500 w-1/2 h-1 mx-auto mt-2" />
      </motion.div>
      <div className="mt-16 gap-x-3 md:gap-x-6 gap-y-5 md:gap-y-10 grid sm:grid-cols-4 xl:grid-cols-6">
        {projects.map((project, i) => (
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.4 + i / 9 }}
            href={project.href}
            key={`${project.imageAlt}-${i}`}
            className={clsx("group relative col-span-2", {
              "xl:col-start-2": i + 1 === 4,
              "sm:col-start-2 xl:col-start-auto": i + 1 === projects.length,
            })}
            target="_blank"
          >
            <div className="relative aspect-video w-full overflow-hidden lg:aspect-none border border-lime-800">
              <Image
                fill
                src={project.imageSrc}
                alt={project.imageAlt}
                className="h-full w-full object-cover object-center"
              />
              <div className="flex absolute w-full h-full top-0 bg-black/90 -translate-x-[100%] group-hover:translate-x-0 transition duration-700">
                <div className="my-4 mx-5">
                  <div className="w-fit">
                    <h1 className="font-medium text-xs sm:text-sm md:text-lg text-gray-400">
                      {project.name}
                    </h1>
                    <div className="bg-lime-500 h-0.5 scale-x-0 group-hover:scale-x-100 transition-all origin-left delay-500 duration-700" />
                  </div>
                  <p className="mt-3 text-xs md:text-sm lg:text-base text-gray-400 max-w-xs tracking-wide">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
