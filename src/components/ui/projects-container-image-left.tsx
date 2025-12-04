import Image from 'next/image'
import Link from 'next/link'
export default function ProjectContainerLeft({
	title,
	text,
	imagePath,
	gitHubUrl,
	linkText,
	website,
}: {
	title: string
	text: string
	imagePath: string
	gitHubUrl: string
	linkText: string
	website?: string
}) {
	return (
		<div className="w-full rounded-md bg-cyan-300 p-4 shadow-xl md:w-5/6">
			<div className="flex flex-col gap-2 rounded-md bg-[url('/paper.jpeg')] bg-cover p-4 md:flex-row">
				<Image
					alt="Content Image"
					blurDataURL={'/placeholder.png'}
					className="self-center rounded-md md:self-start"
					height={220}
					placeholder="blur"
					src={imagePath}
					width={220}
				/>
				<div className="flex flex-col justify-center gap-2 rounded-md p-4">
					<h1 className="items-center justify-center text-center text-2xl md:text-3xl">
						{title}
					</h1>
					<p className="flex flex-col items-center justify-center text-center indent-4 text-lg md:text-xl">
						{text}
					</p>
					<p className="flex flex-col items-center justify-center text-center indent-4 text-lg md:text-xl">
						Check projects GitHub at:{' '}
						<Link
							className="transition-transform duration-200 hover:scale-110 hover:text-blue-400 hover:underline"
							href={gitHubUrl}
						>
							{linkText}
						</Link>
					</p>
					{website && (
						<p className="flex flex-col items-center justify-center text-center indent-4 text-lg md:text-xl">
							Visit the website at:{' '}
							<Link
								className="transition-transform duration-200 hover:scale-110 hover:text-blue-400 hover:underline"
								href={website}
							>
								{website}
							</Link>
						</p>
					)}
				</div>
			</div>
		</div>
	)
}
