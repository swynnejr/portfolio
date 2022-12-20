import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'

type Props = {
  experience: Experience[]
}

function WorkExperience({experience}: Props) {
  return (
    <motion.div
    initial={{
      opacity: 0,
    }}
    transition={{
      duration: 2,
    }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }} 
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='sectionTitle'>
        Experience
      </h3>
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track gray-400/20 scrollbar-thumb-[#e93232]/50'>
        {experience?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
        {/* <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard /> */}
      </div>
    </motion.div>
  )
}

export default WorkExperience