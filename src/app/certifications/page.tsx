import Image from 'next/image'
import PageHeader from '@/components/ui/page-header'

const certs = ['cSharp.png', 'networking.png', 'python.png']

export default function Page() {
	return (
		<>
			<PageHeader title="Certifications" />
			<div className="grid w-full gap-6 md:w-5/6 md:grid-cols-2">
				{certs.map((cert) => (
					<div className="surface rounded-2xl p-3" key={cert}>
						<Image
							alt={cert.replace('.png', '')}
							className="h-auto w-full rounded-xl"
							height={1200}
							src={`/certs/${cert}`}
							width={1100}
						/>
					</div>
				))}
			</div>
		</>
	)
}
