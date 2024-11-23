import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const data = [
    { url: '/icon-marketing.png', title: '퍼블리셔' },
    { url: '/icon-image.png', title: '해외 마케팅' },
    { url: '/icon-box.png', title: '캐드원(제도사)' },
    { url: '/icon-target.png', title: '해외 세일즈' },
    { url: '/icon-call.png', title: '해외 CS' },
    { url: '/icon-marketing.png', title: '퍼블리셔' },
  ];
  // Do whatever you want
  return NextResponse.json({ message: 'Success', data }, { status: 200 });
}
