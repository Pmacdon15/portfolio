import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
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
	title: 'Patrick McDonald',
	description: 'Created and maintained by me personally Patrick MacDonald',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<main className="flex min-h-svh flex-col items-center gap-4 overflow-hidden bg-background p-4 md:gap-8 md:p-8">
					<Header />
					<NavBar />
					{children}
					<Analytics />
					<Footer />
				</main>
			</body>
		</html>
	)
}
