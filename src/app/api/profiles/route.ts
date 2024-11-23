import { NextResponse } from 'next/server';

export type ProfilesDataProps = {
  url: string;
  flagUrl: string;
  name: string;
  desc: string;
  title: Array<string>;
};

export async function GET() {
  const data = [
    {
      url: '/image-carousel.png',
      flagUrl: '/flag.png',
      name: 'Abhishek Gupta',
      desc: '마케팅 · 2y+',
      title: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    },
    {
      url: '/image-carousel.png',
      flagUrl: '/flag.png',
      name: 'Abhishek Gupta',
      desc: '마케팅 · 2y+',
      title: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    },
    {
      url: '/image-carousel.png',
      flagUrl: '/flag.png',
      name: 'Abhishek Gupta',
      desc: '마케팅 · 2y+',
      title: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    },
  ];
  // Do whatever you want
  return NextResponse.json({ message: 'Success', data }, { status: 200 });
}
