import Image from 'next/image'
import ContentContainerWrapper from '../content-container-wrapper'

export default function ContentContainerImageRight({
	text,
	imagePath,
}: {
	text: string
	imagePath: string
}) {
	return (
		<ContentContainerWrapper>
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
		</ContentContainerWrapper>
	)
}
