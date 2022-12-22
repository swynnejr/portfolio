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
          className="rounded-full border border-gray-500 object-cover p-1 h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-500 ease-in-out"
          src={urlFor(skill?.image).url()}
          width={30}
          height={30}
          alt="Technology Logo"
        />
      </motion.div>
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-500 ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-10 border-4 border-black">
          <div className="p-5 items-center justify-center h-full">
            <p className="text-xl font-bold text-black opacity-100">
              {skill?.title}
            </p>
            <p className="text-3xl font-bold text-black opacity-100">
              {skill?.progress}%
            </p>
          </div>
        </div>
    </div>
  );
}

export default Skill;
