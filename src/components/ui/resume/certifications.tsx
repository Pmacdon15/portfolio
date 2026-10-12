import type { Certification } from '@/types/types'
export default function Certifications({
	certifications,
}: {
	certifications: Certification[]
}) {
	return (
		<section className="flex flex-col gap-2">
			<h2 className="font-bold text-2xl">Certifications</h2>
			<div className="flex flex-col gap-2">
				{certifications.map((cert) => (
					<CertificationComponent
						issuer={cert.issuer}
						key={cert.name}
						name={cert.name}
					/>
				))}
			</div>
		</section>
	)
}

function CertificationComponent({ name, issuer }: Certification) {
	return (
		<div className="indent-4">
			<h3 className="font-semibold text-lg italic">{name}</h3>
			<p className="text-muted-foreground">{issuer}</p>
		</div>
	)
}
