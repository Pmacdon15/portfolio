import Image from 'next/image'

export default function ContentContainerImageRight({
	text,
	imagePath,
}: {
	text: string
	imagePath: string
}) {
	return (
		<div className="w-full rounded-md bg-cyan-300 p-4 shadow-xl md:w-5/6">
			<div className="flex flex-col items-center justify-center gap-2 rounded-md bg-[url('/paper.jpeg')] bg-cover p-4 md:flex-row">
				<p className="flex flex-col items-center justify-center text-center indent-4 text-lg md:text-xl">
					{text}
				</p>
				<Image
					alt="Content Image"
					className="rounded-md"
					height={200}
					src={imagePath}
					width={200}
				/>
			</div>
		</div>
	)
}
