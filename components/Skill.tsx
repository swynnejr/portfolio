import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
      >
        <Image
          className="rounded-full border border-gray-500 object-cover h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-500 ease-in-out"
          src="https://brandeps.com/logo-download/R/React-logo-vector-01.svg"
          width={50}
          height={50}
          alt="Picture of Sam"
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-500 ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
