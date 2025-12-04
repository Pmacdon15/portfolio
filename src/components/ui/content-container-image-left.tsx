import Image from 'next/image'
import ContentContainerWrapper from '../content-container-wrapper'

export default function ContentContainerImageLeft({
	text,
	imagePath,
}: {
	text: string
	imagePath: string
}) {
	return (
		<ContentContainerWrapper>
			<Image
				alt="Content Image"
				blurDataURL={'/placeholder.png'}
				className="rounded-md"
				height={200}
				placeholder="blur"
				src={imagePath}
				width={200}
			/>
			<p className="flex flex-col items-center justify-center indent-4 text-lg md:text-xl">
				{text}
			</p>
		</ContentContainerWrapper>
	)
}
