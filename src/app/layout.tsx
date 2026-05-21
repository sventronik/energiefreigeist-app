import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Energiefreigeist — Das Energie-Universum',
  description: 'Energetische, finanzielle und persönliche Freiheit. 23 Themen rund um neue Energietechnologien von Sven Mund.',
  openGraph: {
    title: 'Energiefreigeist',
    description: 'Das Energie-Universum von Sven Mund',
    url: 'https://energiefreigeist.com',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="bg-dark-900 text-white min-h-screen">
        {children}
      </body>
    </html>
  )
}
