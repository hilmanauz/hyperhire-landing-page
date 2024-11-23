import { Banner } from '@/components/templates';
import React from 'react';

export default async function Home() {
  const responseProducts = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products`);
  const responseProfiles = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/profiles`);
  const { data: dataProducts } = await responseProducts.json();
  const { data: dataProfiles } = await responseProfiles.json();

  return <Banner products={dataProducts} profiles={dataProfiles} />;
}
