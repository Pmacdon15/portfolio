import Image from 'next/image'

const certs = ['cSharp.png', 'networking.png', 'python.png']

export default function Page() {
	return (
		<>
			{certs.map((cert, index) => (
				<div
					className="w-fit rounded-md bg-secondary p-2 shadow-xl"
					key={index}
				>
					<div className="flex flex-col gap-2 rounded-md bg-[url('/paper.jpeg')] bg-cover p-4">
						<Image
						
							alt={cert}
							height={1200}
							src={`/certs/${cert}`}
							width={1100}
						/>
					</div>
				</div>
			))}
		</>
	)
}
