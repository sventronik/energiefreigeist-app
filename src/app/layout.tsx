import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Energiefreigeist — Dein Energie-Universum',
  description: 'Energie-Souveränität für Energie-Freigeister. Strömungsoptimierung, Wasserstoff, Autarkie und dezentrale Finanzen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
