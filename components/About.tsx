import React from "react";
import { motion } from "framer-motion";
import { PortfolioInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  portfolioInfo: PortfolioInfo
};

function About({portfolioInfo}: Props) {
  return (
    <motion.div
      className="flex flex-col relative h-screen text-center lg:text-left lg:flex-row max-w-7xl px-10 mx-auto items-center justify-center"
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 2,
      }}
      whileInView={{ opacity: 1 }}
    >
      <h3 className="sectionTitle z-50 mb-5">About</h3>
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
        src={urlFor(portfolioInfo?.heroImage).url()}
        className="-mb-30 mt-5 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover sm:w-64 sm:h-64 sm:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10 sm:mt-5">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline italic decoration-[#e93232]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base md:text-lg">
          {portfolioInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}

export default About;
