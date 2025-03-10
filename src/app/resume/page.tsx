// import ContentContainer from "@/components/ui/content-container";
import PageHeader from "@/components/ui/page-header";
import React from 'react';

interface Experience {
  company: string;
  position: string;
  dates: string;
  responsibilities: string[];
};

interface Certification {
  name: string;
  issuer: string;
};

export default function Resume() {
  return (
    <>
      <PageHeader title="Resume" />
      <div className='bg-cyan-300 shadow-xl p-4 rounded-md w-full md:w-5/6'>
        <div className="flex flex-col gap-2 bg-[url('/paper.jpeg')] bg-cover p-4 rounded-md">
          <ContactInfo />
          <h1 className="text-4xl">Patrick MacDonald</h1>
          <Summary />
          <Education />
          <Skills />
          <Certifications certifications={certifications} />
          <WorkExperience experiences={experiences} />
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
        Motivated and dedicated individual seeking employment in the
        tech industry to gain hands-on experience while completing a Software
        Development Diploma.
      </p>
    </>
  )
}

function Education() {
  return (
    <>
      <h1 className="font-bold text-3xl">Education</h1>
      <h1 className="font-bold text-2xl italic">BowValley College</h1>
      <p className="text-lg"><i>Software Development<br />GPA:3.94</i></p>
      <ul className="ml-4 list-disc list-inside">
        <li>
          Currently enrolled in the Software Development Diploma program at
          Bow Valley College.
        </li>
        <li>Expected graduation date is May 2025.</li>
      </ul>
    </>
  )
}

function Skills() {
  return (
    <>
      <h1 className="font-bold text-3xl">Skills</h1>
      <ul className="ml-4 list-disc list-inside">
        <li>Team collaboration and leadership</li>
        <li>Programming Languages: Java, C#, Python, TypeScript, JavaScript, HTML, CSS, SQL, C++</li>
        <li>Tools/Technologies:
          VS Code, VS Studio, Android Studio,
          React, NextJS, Node.js, jQuery, Express,
          Vercel, TypeScript, Tailwind CSS
        </li>
        <li>Excellent communication, customer service, time management, organization, and decision-making</li>
        <li>Experience operating tractor-trailers and buses</li>
        <li>Adaptable in fast-paced environments</li>
      </ul>
    </>
  )
}

function Certifications({ certifications }: { certifications: Certification[] }) {
  return (
    <>
      <h1 className="font-bold text-3xl">Certifications</h1>
      {certifications.map((cert) => (
        <div className="indent-4" key={cert.name}>
          <Certification name={cert.name} issuer={cert.issuer} />
        </div>
      ))}
    </>
  )
}

function Certification({ name, issuer }: Certification) {
  return (
    <>
      <h1 className="font-bold text-lg italic">{name}</h1>
      <p>{issuer}</p>
    </>
  )
}

function WorkExperience({ experiences }: { experiences?: Experience[] }) {
  return (
    <div>
      <h1 className="font-bold text-3xl">Work Experience</h1>
      {experiences?.map((exp) => (
        <div className="p-2" key={exp.company}>
          <Job company={exp.company} position={exp.position} dates={exp.dates} responsibilities={exp.responsibilities} />
        </div>
      ))}
    </div>
  )
};

function Job({ company, position, dates, responsibilities }: Experience) {
  return (
    <>
      <h1 className="font-bold text-2xl italic">{company}</h1>
      <p>
        <i>{position}</i><br />
        {dates}
      </p>
      <ul className="ml-4 list-disc list-inside">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </>
  )
};

const experiences: Experience[] = [
  {
    company: 'Sparks Eggs',
    position: 'Egg Delivery Driver',
    dates: 'November 2017 - January 2023',
    responsibilities: [
      'Driving tractor trailers for egg deliveries and pickups for Calgary and area and as far south as the United States border.',
      'Reviewing the next day\'s trips and mapping any unfamiliar areas.',
      'Ensuring the vehicle is ready to transport cargo, providing customer service, keeping a log book up-to-date, operating power jacks and manual jacks, loading and unloading eggs.',
      'Able to follow MOT regulations.',
      'Driving and operating various types of vehicles and equipment.',
      'Maintaining a clean and organized work environment.',
      'Communicating effectively with team members and customers.',
    ],
  },
  {
    company: 'City Wide Towing',
    position: 'Tow Truck Operator',
    dates: 'June 2015 - April 2016',
    responsibilities: [
      'Drove and operated tow trucks; loading and securing vehicles and trailers of varying conditions.',
      'Responsible for removal of vehicles for many reasons including but not limited to inoperable, stolen, illegally parked, or vehicles involved in motor vehicle accidents.',
      'Provided roadside assistance including but not limited to tire changes, battery boots, tire fill and lock-out services.',
      'Assisted in timely and professional delegation of emergency crews to ensure safety and efficiency while loading and cleaning accident sites.',
      'Provided customer service to the general public, as well as emergency services.',
    ],
  },
];


const certifications: Certification[] = [
  {
    name: "Python Developer",
    issuer: "W3Schools"
  },
  {
    name: "C# Developer",
    issuer: "W3Schools"
  },
  {
    name: "Networking Essentials",
    issuer: "CISCO"
  }
];