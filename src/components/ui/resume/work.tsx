import type { Work } from '@/types/types'
export default function WorkComponent({
	experiences,
}: {
	experiences?: Work[]
}) {
	return (
		<section className="flex flex-col gap-2">
			<h2 className="font-bold text-2xl">Work Experience</h2>
			{experiences?.map((exp) => (
				<div className="indent-4" key={exp.company}>
					<WorkExperience
						company={exp.company}
						dates={exp.dates}
						index={exp.index}
						position={exp.position}
						responsibilities={exp.responsibilities}
					/>
				</div>
			))}
		</section>
	)
}

function WorkExperience({ company, position, dates, responsibilities }: Work) {
	return (
		<>
			<h3 className="font-bold text-xl">{company}</h3>
			<p className="text-muted-foreground">
				<i>{position}</i>
				<br />
				{dates}
			</p>
			<ul className="ml-5 list-disc space-y-1 text-foreground/90 marker:text-primary">
				{responsibilities.map((responsibility, index) => (
					<li key={index}>{responsibility}</li>
				))}
			</ul>
		</>
	)
}
