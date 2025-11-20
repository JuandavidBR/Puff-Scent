import type { Metadata } from 'next'
import { Geist, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/lib/cart-context'
import { Toaster } from 'sonner'
import './globals.css'
import SiteTitle from '@/components/ui/site-title'

const _geist = Geist({ subsets: ["latin"] });
const _playfairDisplay = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Puffscent - Perfumería de Lujo',
  description: 'Descubre fragancias exclusivas, vapes premium y productos aromáticos',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        <div className="fixed top-4 left-4 z-50 pointer-events-auto">
          <SiteTitle />
        </div>
        <CartProvider>
          {children}
          <Toaster position="top-right" />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
