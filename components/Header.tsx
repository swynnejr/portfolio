import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  return (
    <div>
      <header className="fixed top-0 left-0 right-0 md:p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
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
            x: { duration: 1.5 },
            default: { ease: "linear" },
          }}
          className="flex flex-row items-center"
        >
          {socials.map((social) => (
            <SocialIcon
              key={social._id}
              url={social.url}
              target="_blank"
              rel="noopener noreferrer"
              fgColor="gray"
              bgColor="transparent"
            />
          ))}
        </motion.div>
        <Link href="/blog">
          <motion.div
            initial={{
              y: -100,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.5,
              y: { duration: 1.5 },
              default: { ease: "linear" },
            }}
            className="flex flex-row text-2xl sm:text-4xl text-bold items-center animate-pulse text-gray-300 cursor-pointer mt-2 sm:mt-0"
          >
            <p>BLOG</p>
          </motion.div>
        </Link>
        <Link href="#contact">
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
              x: { duration: 1.5 },
              default: { ease: "linear" },
            }}
            className="flex flex-row items-center text-gray-300 cursor-pointer mt-2 mr-3 sm:m-0 sm:mr-0"
          >
            <EnvelopeIcon className="cursor-pointer h-8 w-8 text-gray-300" />
            <p className="uppercase hidden md:inline-flex text-md ml-5 text-gray-300">
              Get in touch
            </p>
          </motion.div>
        </Link>
      </header>
    </div>
  );
}

export default Header;
