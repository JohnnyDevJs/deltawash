import './globals.css'

import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'

import { MotionProvider } from '@/components/motion/motion-provider'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Deltawash | Advanced Cleaning',
  description:
    'Deep Clean e Auto Detailing com o padrão de excelência DeltaWash.',
}

export const viewport: Viewport = {
  themeColor: '#191b49',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
