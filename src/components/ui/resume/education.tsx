import type { Education } from '@/types/types'

export default function Education({ education }: { education: Education[] }) {
  return (
    <>
      <h1 className="font-bold text-3xl">Education</h1>
      {education.map((education, index) => (
        <div className="indent-4" key={index}>
          <SchoolExperience school={education.school} program={education.program} gpa={education.gpa} graduation={education.graduation} />
        </div>
      ))}
    </>
  )
}


function SchoolExperience({ school, program, gpa, graduation }: Education) {
  return (
    <div className="p-2">
      <h1 className="font-bold text-3xl">{school}</h1>
      <p className="text-lg italic">{program}</p>
      <p>GPA: {gpa}</p>
      {graduation && <p>Graduation:{graduation}</p>}
    </div>
  )
}