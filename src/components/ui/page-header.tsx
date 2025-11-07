export default function PageHeader({ title }: Readonly<{ title: string }>) {
	return (
		<div className="w-3/6 rounded-md bg-cyan-400 bg-opacity-70 p-4 text-center shadow-md">
			<h2 className="0 font-bold text-2xl drop-shadow-2xl">{title}</h2>
		</div>
	)
}
