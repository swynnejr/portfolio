'use client';

import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Link from "next/link";
import { Experience, PortfolioInfo, Project, Skill, Social } from "../typings";
import urlFor from "../lib/urlFor";

type Props = {
  portfolioInfo: PortfolioInfo;
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const HomePage = ({
  portfolioInfo,
  experience,
  projects,
  skills,
  socials,
}: Props) => {
  return (
    <div className="text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0  scrollbar-thin scrollbar-track gray-400/20 scrollbar-thumb-[#e93232]/50">
      <Header socials={socials} />
      <section id="hero" className="snap-center">
        <Hero portfolioInfo={portfolioInfo} />
      </section>
      <section id="about" className="snap-center">
        <About portfolioInfo={portfolioInfo} />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience experience={experience} />
      </section>
      <section id="skills" className="snap-center">
        <Skills skills={skills}/>
      </section>
      <section id="projects" className="snap-center">
        <Projects projects={projects}/>
      </section>
      <section id="contact" className="snap-center">
        <Contact />
      </section>

      <Link href="#hero" scroll={false}>
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
      </Link>
    </div>
  );
};

export default HomePage

