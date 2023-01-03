import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="sectionTitle">Projects</h3>
      <div className="relative  w-[375px] h-[575px] sm:w-[450px] sm:h-[525px] md:w-[600px] md:h-[700px] xl:w-[900px] xl:h-[900px] flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track gray-400/20 scrollbar-thumb-[#e93232]/50">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center md:justify-center h-screen"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: -300,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Image
                className="rounded-full w-[100px] h-[100px] md:w-[100px] lg:w-[400px]"
                src={urlFor(project?.image).url()}
                width={100}
                height={100}
                alt="Project image"
              />
            </motion.div>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-lg md:text-4xl font-semibold text-center">
                <span className="underline decoration-[#e93232]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center">
                {/* Maybe map project.technologies */}
              </div>
              <p className="text-lg text-center md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#e93232]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}

export default Projects;
