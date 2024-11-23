import { ScrollAnimation, Tooltip } from '@/components/atoms';
import React from 'react';

export function BannerInfo() {
  return (
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
    </div>
  );
}
