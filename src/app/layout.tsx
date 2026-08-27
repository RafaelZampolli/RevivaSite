import type { Metadata } from 'next'
import '../styles/global.css'

export const metadata: Metadata = {
  title: 'ReViva | Reabilitação através da Realidade Virtual',
  description: 'A ReViva utiliza Realidade Virtual e gamificação para transformar a experiência de reabilitação física.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>
}
