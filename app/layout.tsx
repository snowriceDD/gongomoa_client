import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar';
import { Analytics } from '@vercel/analytics/react';
// import Tracker from '@/components/tracker';

const inter = Inter({ subsets: ['latin'] })
// export function generateMetadata(props: { params: { name: string; } }) {
//   const decodePath = decodeURIComponent(props.params.name);
//   const query = { title: decodePath }

//   if (query.title === 'undefined') {
//     return {
//       icons: {
//         icon: './favicon.ico'
//       },
//       title: '공고모아 :: 채용사이트 너무 많다',
//       description: '신입 개발자를 위한 채용 공고를 모아봅니다.',
//       keywords: `신입, 경력, 채용공고, 개발자, 신입개발자, 프론트엔드, 백엔드, 퍼블리셔`,
//       canonical: 'https://gongomoa.vercel.app/',
//       openGraph: {
//         type: "website",
//         locale: "ko_KR",
//         url: 'https://gongomoa.vercel.app/',
//         title: '공고모아 :: 채용사이트 너무 많다',
//         description: '신입 개발자를 위한 채용 공고를 모아봅니다.',
//         keywords: `신입, 경력, 채용공고, 개발자, 신입개발자, 프론트엔드, 백엔드, 퍼블리셔`,
//         site_name: "공고모아",
//         images: [
//           {
//             url: "./favicon.ico",
//             width: 285,
//             height: 167,
//             alt: "이미지"
//           }
//         ]
//       },
//       twitter: {
//         handle: '@handle',
//         site: '@site',
//         cardType: 'summary_large_image',
//       },
//     };
//   } else {
//     return {
//       icons: {
//         icon: './favicon.ico'
//       },
//       title: `공고모아 :: 기업 리뷰 - ${query.title}`,
//       description: `${query.title} 기업 채용공고 지원자들의 리뷰입니다.`,
//       canonical: `https://gongomoa.vercel.app/pages/${query.title}`,
//       keywords: `${query.title}, 채용공고, 개발자, 신입개발자, 프론트엔드, 백엔드`,
//       author: `${query.title}`,
//       openGraph: {
//         type: "website",
//         locale: "ko_KR",
//         url: `https://gongomoa.vercel.app/pages/${query.title}`,
//         title: `공고모아 :: 기업 리뷰 - ${query.title}`,
//         site_name: "공고모아",
//         description: `${query.title} 기업 채용공고 지원자들의 리뷰입니다.`,
//         keywords: `${query.title}, 채용공고, 개발자, 신입개발자, 프론트엔드, 백엔드`,
//         images: [
//           {
//             url: "./favicon.ico",
//             width: 285,
//             height: 167,
//             alt: "이미지"
//           }
//         ]
//       },
//       twitter: {
//         handle: '@handle',
//         site: '@site',
//         cardType: 'summary_large_image',
//         description: `${query.title} 기업 채용공고 지원자들의 리뷰입니다.`,
//         keywords: `${query.title}, 채용공고, 개발자, 신입개발자, 프론트엔드, 백엔드`,
//       },
//     }
//   }
// }

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
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}