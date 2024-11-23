import { Banner } from '@/components/templates';
import { checkEnvironment } from '@/utils/checkEnvironment';
import { headers } from 'next/headers';
import React from 'react';

export default async function Home() {
  const headersList = headers();
  const host = headersList.get('host');
  const responseProducts = await fetch(checkEnvironment(host).concat('/api/products'));
  const responseProfiles = await fetch(checkEnvironment(host).concat('/api/profiles'));
  const { data: dataProducts } = await responseProducts.json();
  const { data: dataProfiles } = await responseProfiles.json();

  return <Banner products={dataProducts} profiles={dataProfiles} />;
}
