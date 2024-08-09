import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/src/components/theme-provider'
import './globals.css'
import { Toaster } from '@/src/components/ui/toaster'
import AppProvider from '@/src/app/app-provider'
import SlideSession from '@/src/components/slide-session'
import { baseOpenGraph } from '@/src/app/shared-metadata'
import Header from '@/src/components/header'

const inter = Inter({ subsets: ['vietnamese'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Productic',
    default: 'Productic'
  },
  description: 'Được tạo bởi Được dev',
  openGraph: baseOpenGraph
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Toaster />
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <AppProvider>
            <Header />
            {children}
            <SlideSession />
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}