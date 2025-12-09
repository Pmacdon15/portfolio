export default function ContentContainerWrapper({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="w-full rounded-md bg-secondary p-2 shadow-xl lg:w-5/6">
			<div className="flex flex-col gap-2 rounded-md bg-[url('/paper.jpeg')] bg-cover p-4 md:flex-row">
				{children}
			</div>
		</div>
	)
}
