import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -100 : 100,
          y: directionLeft ? 100 : -100,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          x: 0,
          y: 0,
          opacity: 1,
        }}
      >
        <Image
          className="rounded-full border border-gray-500 object-cover p-1 h-24 w-24 md:h-28 md:w-28 filter group-hover:grayscale group-hover:opacity-20 transition duration-500 ease-in-out"
          src={urlFor(skill?.image).url()}
          width={300}
          height={300}
          alt="Technology Logo"
        />
      </motion.div>
        <div className="absolute text-center items-center justify-center align-middle opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-10">
          <div className="p-2 md:p-5 items-center align-middle justify-center text-center h-full">
            {/* <p className="hidden sm:block sm:text-xl font-bold text-black opacity-100 text-center break-all">
              {skill?.title}
            </p> */}
            <p className="text-xl md:text-3xl font-bold text-white opacity-100">
              {skill?.progress}%
            </p>
          </div>
        </div>
    </div>
  );
}

export default Skill;
