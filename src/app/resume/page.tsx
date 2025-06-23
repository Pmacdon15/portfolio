import React from 'react';
import { education } from '@/lib/utils/resume/education';
import Education from '@/components/ui/resume/education'
import { skills } from '@/lib/utils/resume/skills';
import Skills from '@/components/ui/resume/skills';
import Certifications from '@/components/ui/resume/certications';
import { certifications } from '@/lib/utils/resume/certifications';
import { experiences } from '@/lib/utils/resume/work';
import Work from '@/components/ui/resume/work';
import ProjectsComponent from '@/components/ui/resume/projects';
import { projects } from '@/lib/utils/resume/projects';

export default function Resume() {
  return (
    <>
      <div className='bg-cyan-300 shadow-xl p-4 rounded-md w-full md:w-5/6'>
        <div className="flex flex-col gap-2 bg-[url('/paper.jpeg')] bg-cover p-4 rounded-md">
          <ContactInfo />
          <h1 className="text-4xl">Patrick MacDonald</h1>
          <Summary />
          <Skills skills={skills} />
          <Certifications certifications={certifications} />
          <Education education={education} />
          <ProjectsComponent projects={projects} />
          <Work experiences={experiences} />
        </div>
      </div>
    </>
  );
};

function ContactInfo() {
  return (
    <div className="ml-auto">
      <div>
        <p className="italic">1-403-975-5053</p>
        <p className="italic">pmacdonald15@gmail.com</p>
        <p className="italic">github.com/Pmacdon15</p>
        <p className="italic">Calgary, Alberta</p>
      </div>
    </div >
  )
}

function Summary() {
  return (
    <>
      <h1 className="font-bold text-3xl">Summary</h1>
      <p className="text-lg indent-4">
        skilled software developer with a strong foundation in Next.js,
        TypeScript, and custom React hooks, seeking opportunities in the tech
        industry to gain hands-on experience in the tech Industry.
      </p>
    </>
  )
}