import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar';
import { Analytics } from '@vercel/analytics/react';
// import Tracker from '@/components/tracker';
 

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="kr">
      <head>
        <meta name="google-site-verification" content="Qmysrt2LIDVJ3uhNPgpUVvfDPsODHWNQQ-EBtFhGPpg" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4222604658270407"
     crossOrigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Analytics/>
      </body>
    </html>
  )
}