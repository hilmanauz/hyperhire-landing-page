import { NextResponse } from 'next/server';

export type NavigationDataProps = {
  title: string;
  children?: Array<NavigationDataProps>;
};

export async function GET() {
  const data: Array<NavigationDataProps> = [
    { title: '해외 개발자 활용 서비스' },
    {
      title: '채용',
      children: [
        { title: '채용' },
        { title: '해외 개발자 원격 채용' },
        { title: '외국인 원격 채용 (비개발 직군)' },
        { title: '한국어 가능 외국인 채용' },
      ],
    },
  ];
  // Do whatever you want
  return NextResponse.json({ message: 'Success', data }, { status: 200 });
}
