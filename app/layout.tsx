import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar';
 

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
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
        url: "#",
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
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}