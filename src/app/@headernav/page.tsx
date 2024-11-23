import { Container } from '@/components/atoms';
import HeaderNavigator from '@/components/organisms/header-navigator/header-navigator.component';
import { checkEnvironment } from '@/utils/checkEnvironment';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

export default async function HeaderNav() {
  const headersList = headers();
  const host = headersList.get('host');
  const response = await fetch(checkEnvironment(host).concat('/api/navigations'));
  const data = await response.json();
  return (
    <Container>
      <header className="py-4 flex justify-between items-center relative">
        <Image src={'/logo.png'} alt="logo" height={50} width={114} />
        <HeaderNavigator data={data.data} />
      </header>
    </Container>
  );
}
