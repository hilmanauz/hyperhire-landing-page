import { CarouselCard, Container, ScrollAnimation } from '@/components/atoms';
import SimpleCard from '@/components/atoms/simple-card/simple-card.component';
import { Carousel } from '@/components/moleculs';
import { AdditionalInfo, BannerInfo } from '@/components/organisms';
import React from 'react';
import { BannerProps } from './banner.types';
import dynamic from 'next/dynamic';

const SpringCarousel = dynamic(() => import('@/components/moleculs/spring-carousel/spring-carousel.component'), {
  ssr: false,
});

export function Banner({ profiles, products }: BannerProps) {
  return (
    <>
      <Container className="pt-28 pb-20 md:pb-0">
        <div className={'flex gap-x-20 flex-col md:flex-row'}>
          <BannerInfo />

          <ScrollAnimation animateIn="fadeIn" duration={0.5} className="flex flex-1 pt-14 md:pt-0" offset={1}>
            <SpringCarousel
              height="500px"
              width="100%"
              margin="0 auto"
              offset={2}
              showArrows
              data={profiles}
              cardComp={CarouselCard}
            />
          </ScrollAnimation>
        </div>
        <AdditionalInfo />
      </Container>
      <ScrollAnimation animateIn="fadeIn" duration={0.5} className="hidden md:flex">
        <div className="pt-10 pb-28 ml-[calc(60.5%-50vw)]">
          <Carousel data={products} CompData={SimpleCard} />
        </div>
      </ScrollAnimation>
    </>
  );
}
