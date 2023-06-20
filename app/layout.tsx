import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar';
import { Analytics } from '@vercel/analytics/react';
 

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  icons: {
    icon: './favicon.ico'
  },
  title: '공고모아 :: 채용사이트 너무 많다',
  description: '신입 개발자를 위한 채용 공고를 모아봅니다.',
  canonical: 'https://gongomoa.vercel.app/',
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: 'https://gongomoa.vercel.app/',
    title: '공고모아 :: 채용사이트 너무 많다',
    site_name: "공고모아",
    images: [
      {
        url: "./favicon.ico",
        width: 285,
        height: 167,
        alt: "이미지"
      }
    ]
  },
  twitter: {
      handle: '@handle',
      site: '@site',
      cardType: 'summary_large_image',
  },
};

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