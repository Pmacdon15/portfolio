export default function PageHeader({ title }: Readonly<{ title: string }>) {
	return (
		<div className="w-full text-center md:w-auto">
			<h2 className="font-bold text-3xl tracking-tight md:text-4xl">
				<span className="gradient-text">{title}</span>
			</h2>
		</div>
	)
}
