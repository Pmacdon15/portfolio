import Image from 'next/image'
import ContentContainerWrapper from './content-container-wrapper'

export default function ContentContainerImageLeft({
	text,
	imagePath,
}: {
	text: string
	imagePath: string
}) {
	return (
		<div className="flex flex-col items-center gap-8 p-2 md:flex-row lg:w-5/6">
			<div className="flex rounded-md bg-secondary p-1 shadow-xl">
				<Image
					alt="Content Image"
					blurDataURL={'/placeholder.png'}
					className="rounded-md"
					height={200}
					placeholder="blur"
					src={imagePath}
					width={200}
				/>
			</div>
			<ContentContainerWrapper>
				<p className="flex flex-col items-center justify-center indent-4 text-lg md:text-xl">
					{text}
				</p>
			</ContentContainerWrapper>
		</div>
	)
}
