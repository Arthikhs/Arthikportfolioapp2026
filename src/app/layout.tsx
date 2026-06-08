import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arthik H S | Java Full-Stack Developer',
  description: 'Java • Spring Boot • React.js • AWS • Docker • Microservices',
  keywords: 'Java Full-Stack Developer, Spring Boot, React.js, AWS, Docker, Microservices, JWT, PostgreSQL',
  authors: [{ name: 'Arthik H S' }],
  creator: 'Arthik H S',
  openGraph: {
    title: 'Arthik H S | Java Full-Stack Developer',
    description: 'Java • Spring Boot • React.js • AWS • Docker • Microservices',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arthik H S | Java Full-Stack Developer',
    description: 'Java • Spring Boot • React.js • AWS • Docker • Microservices',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white antialiased`}>
        <div className="animated-gradient min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
