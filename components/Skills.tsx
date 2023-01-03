import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as ISkill } from "../typings";

type Props = {
  skills: ISkill[];
};

function Skills({skills}: Props) {
  return (
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
    className="h-screen flex relative flex-col text-center mx-auto px-2 w-[375px] sm:w-[450px] md:w-[600px] xl:w-[900px] md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 items-center">
      <h3 className="sectionTitle">Skills</h3>
      <h3 className="top-36 absolute uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>
      <div className="grid grid-cols-4 sm:gap-5">
        {skills?.slice(0, skills.length /2 ).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {skills?.slice(skills.length /2, skills.length ).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
