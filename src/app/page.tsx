import { CarouselCard, Container, ScrollAnimation, Tooltip } from '@/components/atoms';
import SimpleCard from '@/components/atoms/simple-card/simple-card.component';
import { Carousel, SpringCarousel } from '@/components/moleculs';
import Image from 'next/image';
import React from 'react';

export default async function Home() {
  const responseProducts = await fetch(`${process.env.url}/api/products`);
  const responseProfiles = await fetch(`${process.env.url}/api/profiles`);
  const { data: dataProducts } = await responseProducts.json();
  const { data: dataProfiles } = await responseProfiles.json();

  return (
    <>
      <Container className="pt-28 pb-20 md:pb-0">
        <div className={'flex gap-x-20 flex-col md:flex-row'}>
          <div className={'space-y-7 text-white w-full md:w-1/2'}>
            <ScrollAnimation animateIn="fadeInUp" duration={0.5}>
              <h2
                id="banner-text"
                className="md:text-5xl/[62.4px] text-4xl/[46.8px] font-extrabold whitespace-pre-line">{`최고의 실력을 가진
             외국인 인재를 찾고 계신가요?`}</h2>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" duration={0.5}>
              <p className="md:text-2xl/[34px] text-lg whitespace-pre-line font-extrabold">{`법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.`}</p>
            </ScrollAnimation>
            <div className="hidden md:flex flex-col">
              <p className="underline text-lg/[27px] font-extrabold">개발자가 필요하신가요?</p>
              <ScrollAnimation animateIn="fadeIn" duration={0.5}>
                <div className="grid grid-cols-3 gap-x-12 justify-between pt-10">
                  <div className="space-y-2 flex flex-col">
                    <div className="border-t border-white" />
                    <span className="text-lg/[27px]">평균 월 120만원</span>
                    <span className="text-base">임금을 해당 국가를 기준으로 계산합니다.</span>
                  </div>
                  <div className="space-y-2 flex flex-col">
                    <div className="border-t border-white" />
                    <span className="text-lg/[27px]">최대 3회 인력교체</span>
                    <span className="text-base">막상 채용해보니 맞지 않아도 걱정하지 마세요. </span>
                  </div>
                  <div className="space-y-2 flex flex-col">
                    <div className="border-t border-white" />
                    <span className="text-lg/[27px]">평균 3일, 최대 10일</span>
                    <span className="text-base">급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.</span>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
          <ScrollAnimation animateIn="fadeIn" duration={0.5} delay={800} offset={1}>
            <Tooltip
              offset={20}
              anchorSelect="#banner-text"
              isOpen
              place="top-start"
              className="!bg-[#8BC4FF] md:!bg-white"
              classNameArrow={'!left-3'}>
              <span className="md:text-[#40E2E8] text-white text-lg">풀타임, 파트타임</span>
            </Tooltip>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn" duration={0.5} className="flex flex-1 pt-14 md:pt-0" offset={1}>
            <SpringCarousel
              height="500px"
              width="100%"
              margin="0 auto"
              offset={2}
              showArrows
              data={dataProfiles}
              cardComp={CarouselCard}
            />
          </ScrollAnimation>
        </div>
        <div className="space-y-4 -mt-5 md:hidden flex flex-col">
          <div className="grid grid-cols-2 grid-rows-2 gap-2">
            <div className="flex gap-x-3 text-white">
              <Image src={'/checkbox.png'} alt="checkbox" width={22} height={22} />
              <span className="text-base">한국어 능력</span>
            </div>
            <div className="flex gap-x-3 text-white">
              <Image src={'/checkbox.png'} alt="checkbox" width={22} height={22} />
              <span className="text-base">업무 수행 능력</span>
            </div>
            <div className="flex gap-x-3 text-white">
              <Image src={'/checkbox.png'} alt="checkbox" width={22} height={22} />
              <span className="text-base">겸업 여부</span>
            </div>
            <div className="flex gap-x-3 text-white">
              <Image src={'/checkbox.png'} alt="checkbox" width={22} height={22} />
              <span className="text-base">평판 조회</span>
            </div>
          </div>
          <p className="underline text-lg/[27px] font-extrabold text-[#FBFF23]">개발자가 필요하신가요?</p>
        </div>
      </Container>
      <ScrollAnimation animateIn="fadeIn" duration={0.5} className="hidden md:flex">
        <div className="pt-10 pb-28 ml-[calc(60.5%-50vw)]">
          <Carousel data={dataProducts} CompData={SimpleCard} />
        </div>
      </ScrollAnimation>
    </>
  );
}
