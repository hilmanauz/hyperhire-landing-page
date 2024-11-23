import { Banner } from '@/components/templates';
import { checkEnvironment } from '@/utils/checkEnvironment';
import React from 'react';

export default async function Home() {
  const responseProducts = await fetch(checkEnvironment().concat('/api/products'));
  const responseProfiles = await fetch(checkEnvironment().concat('/api/profiles'));
  const { data: dataProducts } = await responseProducts.json();
  const { data: dataProfiles } = await responseProfiles.json();

  return <Banner products={dataProducts} profiles={dataProfiles} />;
}
