import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div 
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      initial={{
          opacity: 0,
        }}
        transition={{
          duration: 2,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}>
      <h3 className="sectionTitle">About</h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://media-exp1.licdn.com/dms/image/D4E03AQFPfR2A1o5P7g/profile-displayphoto-shrink_800_800/0/1668619412631?e=2147483647&v=beta&t=kHTZFSm-hHRNREMzFbVkAcOv3UJZi6FFTCzEpxUiwWw"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#e93232]/50">little</span>{" "}background</h4>
        <p className="text-base">With 15 years of restaurant management & employee training experience (8 years as a co-founder), as well 18 months in web development, I bring a wealth of business experience to back up my talents as an Engineer or Technical Product Manager. I have delivered a handful of brick & mortar projects on budget with development cycles from 6 months to 1.5 years, trained and managed teams of up to 50 employees at a time, all while being the main driver of our go-to-market and ongoing digital marketing strategy.  More recently, as the TPM of a Data Analytics Startup, I led a team of front end developers in an Agile environment, generated user persona reports to guide our product vision, conducted UX interviews, iterated on Figma designs with our design team, & wrote tickets with user stories coupled with Figma prototypes & thorough API research.
</p>
      </div>
    </motion.div>
  );
}

export default About;
