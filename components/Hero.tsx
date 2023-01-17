import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackGroundCircles from "./BackGroundCircles";
import Link from "next/link";
import { PortfolioInfo } from "../typings";

type Props = {
  portfolioInfo: PortfolioInfo;
};

function Hero({ portfolioInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Welcome, the name's ${portfolioInfo?.name}`,
      "I am a Tech Consultant from Texas",
      "<WhoLovesToCode/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <div className="grid">
        <div className="col-start-1 row-start-1">
          <BackGroundCircles portfolioInfo={portfolioInfo} />
        </div>
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {portfolioInfo?.role}
        </h2>
        <div className="h-[72px] sm:h-[35px] md:h-[43px] lg:h-[50px]">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold px-10 my-auto">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#FF000" />
        </h1>
        </div>
        <div className="pt-5">
          <a href="#about" >
            <button className="heroButton">About</button>
          </a>
          <a href="#experience" >
            <button className="heroButton">Experience</button>
          </a>
          <a href="#skills" >
            <button className="heroButton">Skills</button>
          </a>
          <a href="#projects" >
            <button className="heroButton">Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
