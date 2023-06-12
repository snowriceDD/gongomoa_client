import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '공고모아',
  description: '신입 개발자를 위한 채용 공고를 모아봅니다.',
}

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