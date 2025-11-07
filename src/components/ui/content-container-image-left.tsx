import Image from 'next/image'

export default function ContentContainerImageLeft({
	text,
	imagePath,
}: {
	text: string
	imagePath: string
}) {
	return (
		<div className="w-full rounded-md bg-cyan-300 bg-opacity-70 p-4 shadow-xl md:w-5/6">
			<div className="flex flex-col items-center justify-center gap-2 rounded-md bg-[url('/paper.jpeg')] bg-cover p-4 md:flex-row">
				<Image
					alt="Content Image"
					className="rounded-md"
					height={200}
					src={imagePath}
					width={200}
				/>
				<p className="flex flex-col items-center justify-center text-center indent-4 text-lg md:text-xl">
					{text}
				</p>
			</div>
		</div>
	)
}
