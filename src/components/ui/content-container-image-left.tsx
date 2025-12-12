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
		<div className='flex flex-col md:flex-row items-center gap-8 p-2 lg:w-5/6'>
			<Image
				alt="Content Image"
				blurDataURL={'/placeholder.png'}
				className="rounded-md"
				height={200}
				placeholder="blur"
				src={imagePath}
				width={200}
			/>
			<ContentContainerWrapper>
				<p className="flex flex-col items-center justify-center indent-4 text-lg md:text-xl">
					{text}
				</p>
			</ContentContainerWrapper>
		</div>
	)
}
