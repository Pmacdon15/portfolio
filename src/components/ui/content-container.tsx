import Link from 'next/link'
import { Button } from './button'
import ContentContainerWrapper from './content-container-wrapper'

export default function ContentContainer({ text }: { text: string }) {
	return (
		<ContentContainerWrapper>
			<p className="flex flex-col items-center justify-center text-center indent-4 text-lg md:text-xl">
				{text}
			</p>
			<Link className="mx-auto" href={'/contact'}>
				<Button size={'lg'} variant={'outline'}>
					Reach out!
				</Button>
			</Link>
		</ContentContainerWrapper>
	)
}
