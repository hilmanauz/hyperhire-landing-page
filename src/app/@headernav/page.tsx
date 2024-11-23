import { Button, Container } from '@/components/atoms';
import { PopoverHoverButton } from '@/components/moleculs';
import Image from 'next/image';
import React from 'react';

export default async function HeaderNav() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/navigations`);
  const data = await response.json();
  return (
    <Container>
      <header className="py-4 flex justify-between items-center">
        <Image src={'/logo.png'} alt="logo" height={50} width={114} />
        <div className="md:block hidden gap-x-2 relative">
          <Button className={'text-white font-extrabold'}>해외 개발자 활용 서비스</Button>
          <PopoverHoverButton linksArray={data?.data || []} menuTitle="채용" />
        </div>
        <Button variant="white" className="md:flex hidden">
          문의하기
        </Button>
      </header>
    </Container>
  );
}
