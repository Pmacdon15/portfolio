import type { Education } from '@/types/types'

export default function EducationComponent({
	education,
}: {
	education: Education[]
}) {
	return (
		<>
			<h1 className="font-bold text-3xl">Education</h1>
			{education.map((education, index) => (
				<div className="indent-4" key={index}>
					<SchoolExperience
						gpa={education.gpa}
						graduation={education.graduation}
						program={education.program}
						school={education.school}
					/>
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
