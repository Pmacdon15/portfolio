export default function ContentContainerWrapper({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="surface flex w-full rounded-2xl p-6 md:p-8 lg:w-5/6">
			<div className="flex w-full flex-col gap-4">{children}</div>
		</div>
	)
}
