export default function Header() {
	return (
		<header className="surface relative w-full overflow-hidden rounded-2xl px-6 py-10 text-center md:px-10 md:py-14">
			{/* soft accent glow behind the title */}
			<div
				aria-hidden
				className="-translate-x-1/2 pointer-events-none absolute top-0 left-1/2 h-40 w-2/3 rounded-full bg-primary/25 blur-3xl"
			/>
			<div className="relative flex flex-col items-center gap-3">
				<span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 font-medium text-muted-foreground text-xs uppercase tracking-widest">
					<span className="size-2 rounded-full bg-primary" />
					Software Developer
				</span>
				<h1 className="font-bold text-4xl tracking-tight md:text-6xl">
					<span className="gradient-text">Patrick Macdonald</span>
				</h1>
				<p className="max-w-xl text-balance text-base text-muted-foreground leading-relaxed md:text-lg">
					Building fast, reliable web apps with Next.js, TypeScript,
					and Tailwind — based in Calgary, Alberta.
				</p>
			</div>
		</header>
	)
}
