import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackGroundCircles from "./BackGroundCircles";
import Image from "next/image";
import Link from "next/link";
import { PortfolioInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  portfolioInfo: PortfolioInfo;
};

function Hero({ portfolioInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Welcome, the name's ${portfolioInfo?.name}`,
      "I am an Tech Consultant from Texas",
      "<WhoLovesToCode/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackGroundCircles />
      <Image
        className="relative mx-auto rounded-full object-cover"
        src={urlFor(portfolioInfo?.profilePic).url()}
        width={300}
        height={300}
        alt="Picture of Sam"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {portfolioInfo?.role}
        </h2>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#FF000" />
        </h1>
        <div className="pt-5">
          <Link href="/#about" scroll={false}>
            <button className="heroButton">About</button>
          </Link>
          <Link href="/#experience" scroll={false}>
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="/#skills" scroll={false}>
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="/#projects" scroll={false}>
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
