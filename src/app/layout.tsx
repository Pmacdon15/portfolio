import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import { Providers } from '@/components/providers'
import Footer from '@/components/ui/footer'
import Header from '@/components/ui/header'
import NavBar from '@/components/ui/nav-bar'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

export const metadata: Metadata = {
	title: 'Patrick Macdonald',
	description: 'Created and maintained by me personally Patrick Macdonald',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<Providers>
			<html lang="en">
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				>
					<main className="mx-auto flex min-h-svh w-full max-w-6xl flex-col items-center gap-6 bg-background px-4 py-6 md:gap-10 md:px-8 md:py-10">
						<Header />
						<NavBar />
						<div className="flex w-full flex-col items-center gap-6 md:gap-10">
							{children}
						</div>
						<Toaster theme="dark" />
						<Analytics />
						<Footer />
					</main>
				</body>
			</html>
		</Providers>
	)
}
