import { Mail, Map as MapIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
export default function Footer() {
	return (
		<div className="mt-auto flex w-full flex-col items-center gap-2 rounded-md bg-secondary bg-opacity-50 p-0 shadow-xl md:flex-row md:items-start md:gap-8 md:p-1">
			<div className="flex w-2/6 flex-col items-center gap-1 p-2 text-center md:gap-2">
				<h1 className="items-center text-center text-xl">
					Contact Info:
				</h1>
				<p className="flex gap-2">
					<Link
						className="flex gap-2 hover:scale-110 hover:text-blue-500 hover:underline"
						href="mailto:patrick@patmac.ca"
					>
						<Mail />
						patrick@patmac.ca
					</Link>
				</p>
			</div>
			<div className="flex w-2/6 flex-col items-center gap-1 p-2 text-center md:gap-2">
				<h1 className="text-center text-xl">Socials:</h1>
				<p>
					<Link href="https://www.linkedin.com/in/patrick-macdonald-231640285/">
						<Image
							alt="LinkedIn Logo"
							height={80}
							src="/linkedin.png"
							width={80}
						/>
					</Link>
				</p>
				<p>
					<Link href="https://github.com/Pmacdon15">
						<Image
							alt="GitHub Logo"
							height={80}
							src="/gHub.png"
							width={70}
						/>
					</Link>
				</p>
			</div>
			<div className="flex w-2/6 flex-col items-center gap-1 p-2 text-center md:gap-2">
				<MapIcon />
				<p>Calgary, Alberta, </p>
				<p>Canada</p>
			</div>
		</div>
	)
}
