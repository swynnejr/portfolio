import { urlFor } from "../sanity";
import Image from "next/image";
import { PortfolioInfo } from "../typings";
import { motion } from "framer-motion";

type Props = {
  portfolioInfo: PortfolioInfo;
};

function BackGroundCircles({ portfolioInfo }: Props) {
  return (
    <div
      id="atom"
      className="h-[5em] w-[5em] lg:h-[10em] lg:w-[10-em] relative flex"
    >
      <motion.div 
      className="col-start-1 row-start-1 items-center my-auto mx-auto z-50"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{
        default: {
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01]
        },
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 50,
          restDelta: 0.001
        }
      }}
      >
        <Image
          className="mx-auto rounded-full object-cover h-[250px] w-[250px] md:h-[325px] md:w-[325px] lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px]"
          src={urlFor(portfolioInfo?.profilePic).url()}
          width={500}
          height={500}
          alt="Picture of Sam"
        />
      </motion.div>
      <motion.div 
      className="right orbit"
      initial={{scale: 0.01}}
      animate={{scale: 1}}
      transition={{duration: 4, delay: 2}}
      ></motion.div>
      <motion.div 
      className="left orbit"
      initial={{scale: 0.01}}
      animate={{scale: 1}}
      transition={{duration: 5, delay: 2}}
      ></motion.div>
    </div>
  );
}

export default BackGroundCircles;
