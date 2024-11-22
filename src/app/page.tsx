'use client';

import { Button, Container } from '@/components/atoms';
import { PopoverHoverButton } from '@/components/moleculs';
import Image from 'next/image';
import { Tooltip } from 'react-tooltip';

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-[#08b0c4] via-[#0898cf] from-[20%] to-[#0846dc] to-[110%] min-h-screen">
      <Container>
        <header className="py-4 flex justify-between items-center">
          <Image src={'/logo.png'} alt="logo" height={50} width={100} />
          <div className="flex gap-x-2 relative">
            <Button className={'text-white'}>해외 개발자 활용 서비스</Button>
            <PopoverHoverButton
              linksArray={[
                { title: '채용' },
                { title: '해외 개발자 원격 채용' },
                { title: '외국인 원격 채용 (비개발 직군)' },
                { title: '한국어 가능 외국인 채용' },
              ]}
              menuTitle="채용"
            />
          </div>
          <Button variant="white">문의하기</Button>
        </header>
      </Container>
      <Container>
        <div className="flex py-28">
          <div className="space-y-7 text-white w-[60%]">
            <h2 className="text-5xl font-extrabold whitespace-pre-line">{`최고의 실력을 가진
             외국인 인재를 찾고 계신가요?`}</h2>
            <p className="text-2xl whitespace-pre-line">{`법률 및 인사관리 부담없이 
            1주일 이내에 원격으로 채용해보세요.`}</p>
            <p className="underline text-lg">개발자가 필요하신가요?</p>
          </div>
          <div className="w-[40%]"></div>
        </div>
      </Container>
    </main>
  );
}
