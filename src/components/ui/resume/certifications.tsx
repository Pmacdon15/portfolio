import type { Certification } from '@/types/types'
export default function Certifications({
	certifications,
}: {
	certifications: Certification[]
}) {
	return (
		<>
			<h1 className="font-bold text-3xl">Certifications</h1>
			{certifications.map((cert) => (
				<div className="indent-4" key={cert.name}>
					<CertificationComponent
						issuer={cert.issuer}
						name={cert.name}
					/>
				</div>
			))}
		</>
	)
}

function CertificationComponent({ name, issuer }: Certification) {
	return (
		<>
			<h1 className="font-bold text-lg italic">{name}</h1>
			<p>{issuer}</p>
		</>
	)
}
