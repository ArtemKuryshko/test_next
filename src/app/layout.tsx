import type { Metadata } from 'next'
import Link from 'next/link'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Recipes search app',
	description: 'App for searching different recipes'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<header className='border-b-2 border-gray-800'>
					<Link href='/'>
						<h1 className='text-3xl p-4 font-bold text-center'>Recipes App</h1>
					</Link>
				</header>
				<main className='h-full'>{children}</main>
			</body>
		</html>
	)
}
