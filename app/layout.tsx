import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Energiefreigeist — Dein Energie-Universum",
  description: "Alle Technologien für energetische & finanzielle Freiheit von Sven Mund.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={inter.className + " bg-brand-dark text-white min-h-screen"}>
        {children}
      </body>
    </html>
  );
}