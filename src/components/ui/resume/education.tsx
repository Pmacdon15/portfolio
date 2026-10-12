import type { Education } from '@/types/types'

export default function EducationComponent({
	education,
}: {
	education: Education[]
}) {
	return (
		<section className="flex flex-col gap-2">
			<h2 className="font-bold text-2xl">Education</h2>
			{education.map((education, index) => (
				<SchoolExperience
					gpa={education.gpa}
					graduation={education.graduation}
					key={index}
					program={education.program}
					school={education.school}
				/>
			))}
		</section>
	)
}

function SchoolExperience({ school, program, gpa, graduation }: Education) {
	return (
		<div className="indent-4">
			<h3 className="font-bold text-xl">{school}</h3>
			<p className="text-lg italic">{program}</p>
			<p className="text-muted-foreground">GPA: {gpa}</p>
			{graduation && (
				<p className="text-muted-foreground">
					Graduation: {graduation}
				</p>
			)}
		</div>
	)
}
