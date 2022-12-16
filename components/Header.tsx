import React from "react";
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  return (
    <div>

    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div 
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay: 0.5,
        x: {duration: 1.5},
        default: {ease: "linear"}
      }}
      className="flex flex-row items-center">
        {/* Social Icons */}
        <SocialIcon url="https://twitter.com/saucersam" />
        <SocialIcon className="mx-2" url="https://youtube.com/samwynne" />
        <SocialIcon url="https://instagram.com/samwynne214" />
      </motion.div>
      <motion.div      
      initial={{
        x: 500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay: 0.5,
        x: {duration: 1.5},
        default: {ease: "linear"}
      }} className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in touch</p>
      </motion.div>
    </header>
        </div>
  );
}

export default Header;
