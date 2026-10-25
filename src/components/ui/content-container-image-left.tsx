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
		<div className="flex w-full flex-col items-center gap-6 md:flex-row lg:w-5/6">
			<div className="shrink-0 overflow-hidden rounded-2xl border border-border p-1.5 shadow-xl ring-1 ring-primary/20">
				<Image
					alt="Patrick MacDonald"
					blurDataURL={'/placeholder.png'}
					className="rounded-xl object-cover"
					height={220}
					placeholder="blur"
					src={imagePath}
					width={220}
				/>
			</div>
			<ContentContainerWrapper>
				<p className="indent-4 text-base leading-relaxed text-foreground/90 md:text-lg">
					{text}
				</p>
			</ContentContainerWrapper>
		</div>
	)
}
