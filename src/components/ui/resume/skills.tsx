import type { Skills } from '@/types/types'

export default function SkillsComponent({ skills }: { skills?: Skills[] }) {
	return (
		<section className="flex flex-col gap-2">
			<h2 className="font-bold text-2xl">Skills</h2>
			<ul className="ml-5 list-disc space-y-1 text-foreground/90 marker:text-primary">
				{skills?.map((skill, index) => (
					<li key={index}>{skill.description}</li>
				))}
			</ul>
		</section>
	)
}
