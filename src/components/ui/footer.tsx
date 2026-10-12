import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { Mail, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
	return (
		<footer className="surface mt-auto grid w-full gap-6 rounded-2xl p-6 text-center sm:grid-cols-3 sm:text-left">
			<div className="flex flex-col items-center gap-2 sm:items-start">
				<h2 className="font-semibold text-muted-foreground text-sm uppercase tracking-wider">
					Contact
				</h2>
				<Link
					className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
					href="mailto:patrick@patmac.ca"
				>
					<Mail className="size-4" />
					patrick@patmac.ca
				</Link>
			</div>

			<div className="flex flex-col items-center gap-2">
				<h2 className="font-semibold text-muted-foreground text-sm uppercase tracking-wider">
					Socials
				</h2>
				<div className="flex items-center gap-3">
					<Link
						aria-label="LinkedIn"
						className="rounded-xl border border-border bg-muted/50 p-2.5 transition-all hover:scale-110 hover:text-primary"
						href="https://www.linkedin.com/in/patrick-macdonald-231640285/"
					>
						<LinkedInLogoIcon className="size-5" />
					</Link>
					<Link
						aria-label="GitHub"
						className="rounded-xl border border-border bg-muted/50 p-2.5 transition-all hover:scale-110 hover:text-primary"
						href="https://github.com/Pmacdon15"
					>
						<GitHubLogoIcon className="size-5" />
					</Link>
				</div>
			</div>

			<div className="flex flex-col items-center gap-2 sm:items-end">
				<h2 className="font-semibold text-muted-foreground text-sm uppercase tracking-wider">
					Location
				</h2>
				<p className="inline-flex items-center gap-2 text-foreground">
					<MapPin className="size-4" />
					Calgary, Alberta, Canada
				</p>
			</div>
		</footer>
	)
}
