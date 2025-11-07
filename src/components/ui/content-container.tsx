export default function ContentContainer({ text }: { text: string }) {
	return (
		<div className="w-full rounded-md bg-cyan-300 p-4 shadow-xl md:w-5/6">
			<div className="flex flex-col gap-2 rounded-md bg-[url('/paper.jpeg')] bg-cover p-4 md:flex-row">
				<p className="flex flex-col items-center justify-center text-center indent-4 text-lg md:text-xl">
					{text}
				</p>
			</div>
		</div>
	)
}
