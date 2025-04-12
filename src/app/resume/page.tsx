import React from 'react';

interface Education {
  school: string;
  program: string;
  gpa?: string;
  details: string[];
};

interface Skills {
  description: string;
}
interface Work {
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
      <div className='bg-cyan-300 shadow-xl p-4 rounded-md w-full md:w-5/6'>
        <div className="flex flex-col gap-2 bg-[url('/paper.jpeg')] bg-cover p-4 rounded-md">
          <ContactInfo />
          <h1 className="text-4xl">Patrick MacDonald</h1>
          <Summary />
          <Education education={education} />
          <Skills skills={skills} />
          <Certifications certifications={certifications} />
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
        Motivated and dedicated individual seeking employment in the
        tech industry to gain hands-on experience while completing a Software
        Development Diploma.
      </p>
    </>
  )
}

function Education({ education }: { education: Education[] }) {
  return (
    <>
      <h1 className="font-bold text-3xl">Education</h1>
      {education.map((education, index) => (
        <div className="indent-4" key={index}>
          <SchoolExperience school={education.school} program={education.program} gpa={education.gpa} details={education.details} />
        </div>
      ))}
    </>
  )
}

function SchoolExperience({ school, program, gpa, details }: Education) {
  return (
    <div className="p-2">
      <h1 className="font-bold text-3xl">{school}</h1>
      <p className="text-lg italic">{program}</p>
      <p>GPA: {gpa}</p>
      <ul className="ml-4 list-disc list-inside">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  )
}

function Skills({ skills }: { skills?: Skills[] }) {
  return (
    <>
      <h1 className="font-bold text-3xl">Skills</h1>
      <ul className="ml-4 list-disc list-inside">
        {skills?.map((skill, index) => (
          <li key={index}>{skill.description}</li>
        ))}
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

function Work({ experiences }: { experiences?: Work[] }) {
  return (
    <div>
      <h1 className="font-bold text-3xl">Work Experience</h1>
      {experiences?.map((exp) => (
        <div className="p-2" key={exp.company}>
          <WorkExperience company={exp.company} position={exp.position} dates={exp.dates} responsibilities={exp.responsibilities} />
        </div>
      ))}
    </div>
  )
};

function WorkExperience({ company, position, dates, responsibilities }: Work) {
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

// Data
const education: Education[] = [
  {
    school: "BowValley College",
    program: "Software Development",
    gpa: "3.94",
    details: [
      "Currently enrolled in the Software Development Diploma program at Bow Valley College.",
      "Expected graduation date is May 2025."
    ]
  }
];

const skills: Skills[] = [
  { description: "Team collaboration and leadership" },
  { description: "Programming Languages: Java, C#, Python, TypeScript, JavaScript, HTML, CSS, SQL, C++" },
  { description: "Tools/Technologies: VS Code, VS Studio, Android Studio, React, NextJS, Node.js, jQuery, Express, Vercel, TypeScript, Tailwind CSS" },
  { description: "Excellent communication, customer service, time management, organization, and decision-making" },
  { description: "Experience operating tractor-trailers and buses" },
  { description: "Adaptable in fast-paced environments" }
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


const experiences: Work[] = [
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


