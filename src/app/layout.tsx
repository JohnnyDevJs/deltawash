import './globals.css'

import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'

import { MotionProvider } from '@/components/motion/motion-provider'
import { PwaRegister } from '@/components/pwa-register'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Deltawash | Advanced Cleaning',
  description:
    'Deep Clean e Auto Detailing com o padrão de excelência Deltawash.',
  applicationName: 'Deltawash',
  appleWebApp: {
    capable: true,
    title: 'Deltawash',
    statusBarStyle: 'black-translucent',
  },
  icons: {
    apple: '/icons/apple-touch-icon.png',
  },
  formatDetection: {
    telephone: false,
  },
}

export const viewport: Viewport = {
  themeColor: '#191b49',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <MotionProvider>{children}</MotionProvider>
        <PwaRegister />
      </body>
    </html>
  )
}
