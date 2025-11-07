import type { Skills } from '@/types/types'

export default function SkillsComponent({ skills }: { skills?: Skills[] }) {
	return (
		<>
			<h1 className="font-bold text-3xl">Skills</h1>
			<ul className="ml-4 list-inside list-disc">
				{skills?.map((skill, index) => (
					<li key={index}>{skill.description}</li>
				))}
			</ul>
		</>
	)
}
