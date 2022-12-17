import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article>
      <motion.div
      initial={{
        y: -100,
        opacity: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      whileInView={{ 
        y: 0,
        opacity: 1 
      }}
      viewport={{ once: true }}
      >
        <Image
          className="rounded-full xl:w-[200px] object-cover object-center"
          src="https://yt3.googleusercontent.com/ytc/AMLnZu-poVJeR0yAe2QBx1HhDnNPyMH2O-AjYpVZfRisAA=s88-c-k-c0x00ffffff-no-rj"
          width={100}
          height={100}
          alt="Picture of Sam"
        />
      </motion.div>
      <div>
        <h4>Digital Strategist</h4>
      </div>
    </article>
  );
}

export default ExperienceCard;
