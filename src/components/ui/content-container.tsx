import Link from 'next/link'
import { Button } from './button'
import ContentContainerWrapper from './content-container-wrapper'

export default function ContentContainer({ text }: { text: string }) {
	return (
		<ContentContainerWrapper>
			<p className="indent-4 text-center text-base leading-relaxed text-foreground/90 md:text-lg">
				{text}
			</p>
			<Link className="mx-auto mt-2" href={'/contact'}>
				<Button
					className="gradient-accent border-0 text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105"
					size={'lg'}
				>
					Reach out!
				</Button>
			</Link>
		</ContentContainerWrapper>
	)
}
