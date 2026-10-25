import Image from 'next/image'
import ContentContainerWrapper from './content-container-wrapper'

export default function ContentContainerImageRight({
	text,
	imagePath,
}: {
	text: string
	imagePath: string
}) {
	return (
		<div className="flex w-full flex-col items-center gap-6 md:flex-row lg:w-5/6">
			<ContentContainerWrapper>
				<p className="indent-4 text-base leading-relaxed text-foreground/90 md:text-lg">
					{text}
				</p>
			</ContentContainerWrapper>
			<div className="shrink-0 overflow-hidden rounded-2xl border border-border p-1.5 shadow-xl ring-1 ring-primary/20">
				<Image
					alt="Patrick Macdonald"
					blurDataURL={'/placeholder.png'}
					className="rounded-xl object-cover"
					height={320}
					placeholder="blur"
					src={imagePath}
					width={320}
				/>
			</div>
		</div>
	)
}
