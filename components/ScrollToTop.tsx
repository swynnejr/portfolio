'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import urlFor from '../lib/urlFor'
import { PortfolioInfo } from '../typings';

type Props = {portfolioInfo: PortfolioInfo;}

function ScrollToTop({portfolioInfo}: Props) {
  return (
    <motion.div
    initial={{
      y: 100,
      opacity: 0,
    }}
    transition={{
      duration: 1.2,
    }}
    whileInView={{
      y: 0,
      opacity: 1,
    }}
  >
    <a href="#hero">
      <footer className="sticky bottom-5 w-full hidden md:inline-block">
        <div className="flex items-center justify-center">
          <Image
            className="rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
            src={urlFor(portfolioInfo?.profilePic).url()}
            width={75}
            height={75}
            alt="Picture of Sam"
          />
        </div>
      </footer>
    </a>
  </motion.div>

  )
}

export default ScrollToTop