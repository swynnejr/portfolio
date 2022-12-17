import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
      >
        <Image
          className="rounded-full xl:w-[200px] object-cover object-center"
          src="https://yt3.googleusercontent.com/ytc/AMLnZu-poVJeR0yAe2QBx1HhDnNPyMH2O-AjYpVZfRisAA=s88-c-k-c0x00ffffff-no-rj"
          width={100}
          height={100}
          alt="Picture of Sam"
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Technical Product Manager</h4>
        <p className="font-bold text-2xl mt-1">Bazari</p>
        <div className="flex space-x-2 my-2">
          {/* Tech Used */}
          <Image
          className="rounded-full"
          src="https://brandeps.com/logo-download/R/React-logo-vector-01.svg"
          width={50}
          height={50}
          alt="React logo"
        />
                  <Image
          className="rounded-full"
          src="https://brandeps.com/logo-download/R/React-logo-vector-01.svg"
          width={50}
          height={50}
          alt="React logo"
        />
                  <Image
          className="rounded-full"
          src="https://brandeps.com/logo-download/R/React-logo-vector-01.svg"
          width={50}
          height={50}
          alt="React logo"
        />
                  <Image
          className="rounded-full"
          src="https://brandeps.com/logo-download/R/React-logo-vector-01.svg"
          width={50}
          height={50}
          alt="React logo"
        />
        </div>
        <p className="uppercase py-5 text-gray-300">April 2022 - December 2022
</p>
<ul className="list-disc space-y-4 ml-5 text-lg">
  <li>Refined the product vision with CEO/CTO based off my competitor UX research and user interviews</li>
  <li>Fostered trust and rapport with leaders of all departments to consistently achieve cross-functional buy-in </li>
  <li>Simultaneously managed remote developers in Brazil, Lebanon, Switzerland, and USA</li>
  <li>Scrum Master & Product Owner, driving the product vision/roadmap and employee leadership</li>
  <li>Implemented Agile Methodology with daily standups, biweekly sprints & grooming sessions, and a major pivot</li>
  <li>Researched available APIs (some without documentation) for our site to utilize six data sources</li>
</ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
