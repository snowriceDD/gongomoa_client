import { TwoPositionPieChart } from "@/components/chart/TwoPositionPieChart";

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


export default function Home() {
  return (
    <div className="list-bg">
      <div className="list-block">
      <TwoPositionPieChart />
      </div>
    </div>
  )
}