import React from 'react'
import HomePage from './HomePage';
import { Experience, PortfolioInfo, Project, Skill, Social } from "../typings";

async function fetchPortfolioInfo() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPortfolioInfo`);

  const data = await res.json();
  const portfolioInfo: PortfolioInfo = data.portfolioInfo;

  return portfolioInfo;
}

async function fetchExperiences() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`);

  const data = await res.json();
  const experience: Experience[] = data.experience;

  return experience;
}

async function fetchProjects() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);

  const data = await res.json();
  const projects: Project[] = data.projects;

  return projects;
}

async function fetchSkills() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);

  const data = await res.json();
  const skills: Skill[] = data.skills;

  return skills;
}
async function fetchSocials() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

  const data = await res.json();
  const socials: Social[] = data.socials;

  return socials;
}

export default async function Page() {
  const portfolioInfo = await fetchPortfolioInfo();
  const experience = await fetchExperiences();
  const projects = await fetchProjects();
  const skills = await fetchSkills();
  const socials = await fetchSocials();
  return (
    <div>
      <HomePage 
        portfolioInfo={portfolioInfo} 
        experience={experience}
        projects={projects}
        skills={skills}
        socials={socials}
      />
    </div>
  )
}

