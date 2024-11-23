'use client';

import { Button, CarouselCard, Container, Tooltip } from '@/components/atoms';
import { SpringCarousel, PopoverHoverButton } from '@/components/moleculs';
import Image from 'next/image';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.compat.css';
import useBreakpoint from '@/hooks/useBreakpoint';
import { classNames } from '@/utils/classNames';

export default function Home() {
  const { isMobile } = useBreakpoint();
  const cards = (slideIdx: number) => [
    {
      key: 1,
      content: <CarouselCard index={1} slideIdx={slideIdx} />,
    },
    {
      key: 2,
      content: <CarouselCard index={2} slideIdx={slideIdx} />,
    },
    {
      key: 3,
      content: <CarouselCard index={3} slideIdx={slideIdx} />,
    },
  ];
  const settings: Settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
    adaptiveHeight: true,
    rows: 1,
  };

  return (
    <>
      <main className="bg-gradient-to-br from-[#08b0c4] via-[#0898cf] from-[20%] to-[#0846dc] to-[110%]">
        <Container>
          <header className="py-4 flex justify-between items-center">
            <Image src={'/logo.png'} alt="logo" height={50} width={114} />
            {!isMobile && (
              <>
                <div className="flex gap-x-2 relative">
                  <Button className={'text-white font-extrabold'}>해외 개발자 활용 서비스</Button>
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
              </>
            )}
          </header>
        </Container>
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
              {!isMobile && (
                <>
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
                </>
              )}
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
              <SpringCarousel cards={cards} height="500px" width="100%" margin="0 auto" offset={2} showArrows />
            </ScrollAnimation>
          </div>
          {isMobile && (
            <div className="space-y-4 -mt-5">
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
          )}
        </Container>
        {!isMobile && (
          <ScrollAnimation animateIn="fadeIn" duration={0.5}>
            <div className="pt-10 pb-28 ml-[calc(60.5%-50vw)]">
              <Slider {...settings}>
                <div style={{ width: '332px' }} className="pr-3">
                  <div className="w-full h-full flex gap-x-6 items-center bg-white/20 rounded-xl p-4">
                    <div className="p-3 bg-white/40 rounded-lg">
                      <Image src={'/icon-marketing.png'} alt="icon-marketing" width={32} height={32} />
                    </div>
                    <span className="text-2xl/[36px] font-extrabold text-white">퍼블리셔</span>
                  </div>
                </div>
                <div style={{ width: '332px' }} className="pr-3">
                  <div className="w-full h-full flex gap-x-6 items-center bg-white/20 rounded-xl p-4">
                    <div className="p-3 bg-white/40 rounded-lg">
                      <Image src={'/icon-image.png'} alt="icon-image" width={32} height={32} />
                    </div>
                    <span className="text-2xl/[36px] font-extrabold text-white">해외 마케팅</span>
                  </div>
                </div>
                <div style={{ width: '332px' }} className="pr-3">
                  <div className="w-full h-full flex gap-x-6 items-center bg-white/20 rounded-xl p-4">
                    <div className="p-3 bg-white/40 rounded-lg">
                      <Image src={'/icon-box.png'} alt="icon-box" width={32} height={32} />
                    </div>
                    <span className="text-2xl/[36px] font-extrabold text-white">캐드원(제도사)</span>
                  </div>
                </div>
                <div style={{ width: '332px' }} className="pr-3">
                  <div className="w-full h-full flex gap-x-6 items-center bg-white/20 rounded-xl p-4">
                    <div className="p-3 bg-white/40 rounded-lg">
                      <Image src={'/icon-target.png'} alt="icon-target" width={32} height={32} />
                    </div>
                    <span className="text-2xl/[36px] font-extrabold text-white">해외 세일즈</span>
                  </div>
                </div>
                <div style={{ width: '332px' }} className="pr-3">
                  <div className="w-full h-full flex gap-x-6 items-center bg-white/20 rounded-xl p-4">
                    <div className="p-3 bg-white/40 rounded-lg">
                      <Image src={'/icon-call.png'} alt="icon-call" width={32} height={32} />
                    </div>
                    <span className="text-2xl/[36px] font-extrabold text-white">해외 CS</span>
                  </div>
                </div>
                <div style={{ width: '332px' }} className="pr-3">
                  <div className="w-full h-full flex gap-x-6 items-center bg-white/20 rounded-xl p-4">
                    <div className="p-3 bg-white/40 rounded-lg">
                      <Image src={'/icon-marketing.png'} alt="icon-marketing" width={32} height={32} />
                    </div>
                    <span className="text-2xl/[36px] font-extrabold text-white">퍼블리셔</span>
                  </div>
                </div>
              </Slider>
            </div>
          </ScrollAnimation>
        )}
      </main>
      <footer className="bg-[#FBFBFB]">
        <Container className="py-20">
          <div className="flex flex-col md:flex-row gap-x-36 md:gap-y-0 gap-y-4">
            <div className="space-y-4">
              <Image src={'/footer-logo.png'} width={187} height={34} alt="footer-logo" />
              <h2 className="text-sm/[21px]">우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</h2>
              <div className="pt-[2px] space-y-2">
                <p className="text-[13px]/[19.5px]">010-0000-0000</p>
                <p className="text-[13px]/[19.5px]">aaaaa@naver.com</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-[15px] lg:grid-cols-4">
              <div className="p-4 bg-white rounded-xl">
                <div className="p-2 bg-[#EFF1F6] rounded-lg w-fit">
                  <Image src={'/icon-code.png'} alt="icon-marketing" width={24} height={24} />
                </div>
                <p className="text-sm pt-3 pb-4">해외 개발자 원격 채용</p>
                <span className="text-[#5E626F] text-sm flex gap-x-[6px] pr-2 items-center">
                  바로가기
                  <Image src={'/right-square.png'} alt="right-square" width={19} height={19} />
                </span>
              </div>
              <div className="p-4 bg-white rounded-xl">
                <div className="p-2 bg-[#EFF1F6] rounded-lg w-fit">
                  <Image src={'/icon-avatar.png'} alt="icon-marketing" width={24} height={24} />
                </div>
                <p className="text-sm pt-3 pb-4">외국인 원격 채용 (비개발)</p>
                <span className="text-[#5E626F] text-sm flex gap-x-[6px] pr-2 items-center">
                  바로가기
                  <Image src={'/right-square.png'} alt="right-square" width={19} height={19} />
                </span>
              </div>
              <div className="p-4 bg-white rounded-xl">
                <div className="p-2 bg-[#EFF1F6] rounded-lg w-fit">
                  <Image src={'/icon-kor.png'} alt="icon-marketing" width={24} height={24} />
                </div>
                <p className="text-sm pt-3 pb-4">한국어 가능 외국인 채용</p>
                <span className="text-[#5E626F] text-sm flex gap-x-[6px] pr-2 items-center">
                  바로가기
                  <Image src={'/right-square.png'} alt="right-square" width={19} height={19} />
                </span>
              </div>
              <div className="p-4 bg-white rounded-xl">
                <div className="p-2 bg-[#EFF1F6] rounded-lg w-fit">
                  <Image src={'/icon-gear.png'} alt="icon-marketing" width={24} height={24} />
                </div>
                <p className="text-sm pt-3 pb-4">해외 개발자 활용 서비스</p>
                <span className="text-[#5E626F] text-sm flex gap-x-[6px] pr-2 items-center">
                  바로가기
                  <Image src={'/right-square.png'} alt="right-square" width={19} height={19} />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-9 pb-12 md:pt-[46px] pt-[60px]">
            <div className="text-[#5E626F]">
              <p className="text-xs/[12px] text-[#343741]">상호명</p>
              <p className="pb-[5px] pt-[10px] text-[13px]/[19.5px]">하이퍼하이어</p>
              <p className="text-[13px]/[19.5px]">Hyperhire India Private Limited</p>
            </div>
            <div className="text-[#5E626F]">
              <p className="text-xs/[12px] text-[#343741]">대표 CEO</p>
              <p className="pb-[5px] pt-[10px] text-[13px]/[19.5px]">김주현</p>
              <p className="text-[13px]/[19.5px]">Juhyun Kim</p>
            </div>
            <div className="text-[#5E626F]">
              <p className="text-xs/[12px] text-[#343741]">사업자등록번호 CIN</p>
              <p className="pb-[5px] pt-[10px] text-[13px]/[19.5px]">427-86-01187</p>
              <p className="text-[13px]/[19.5px]">U74110DL2016PTC290812 </p>
            </div>
            <div className="text-[#5E626F]">
              <p className="text-xs/[12px] text-[#343741]">주소 ADDRESS</p>
              <p className="pb-[5px] pt-[10px] text-[13px]/[19.5px]">서울특별시 강남대로 479, 지하 1층 238호 </p>
              <p className="text-[13px]/[19.5px]">
                D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India
              </p>
            </div>
          </div>
          <p className="text-[#5E626F] text-[13px]/[19.5px]">ⓒ 2023 Hyperhire</p>
        </Container>
      </footer>
    </>
  );
}
