import Image from 'next/image';
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Tooltip } from '../tooltip/tooltip.component';
import { CarouselCardProps } from './carousel-card.types';
import useBreakpoint from '@/hooks/useBreakpoint';
import { classNames } from '@/utils/classNames';

export function CarouselCard({ index, slideIdx }: CarouselCardProps) {
  const { isMobile } = useBreakpoint();

  const [show, setShown] = React.useState(false);

  const props3 = useSpring({
    transform: show ? 'scale(1.03)' : 'scale(1)',
    boxShadow: show ? '0 20px 25px rgb(0 0 0 / 25%)' : '0 15px 20px rgb(0 0 0 / 14%)',
  });

  return (
    <React.Fragment>
      <animated.div
        style={props3}
        onMouseEnter={() => setShown(true)}
        onMouseLeave={() => setShown(false)}
        id={`card-${index}`}
        className={classNames(
          'cursor-pointer p-9 gap-y-4 rounded-lg bg-white flex flex-col items-center relative',
          isMobile ? 'w-[282px]' : 'w-[322px]',
        )}>
        <div className="relative">
          <Image src={'/image-carousel.png'} alt="image-carousel" className="rounded-full" width={120} height={120} />
          <div className="absolute right-2 bottom-1">
            <Image src={'/flag.png'} alt="flag" width={25} height={18} />
          </div>
        </div>
        <div className="text-center">
          <p className="md:text-2xl/9 text-lg font-extrabold tracking-normal">Abhishek Gupta</p>
          <span className="text-primary md:text-base text-sm">마케팅 · 2y+</span>
        </div>
        <div className="flex flex-wrap gap-x-1 justify-center gap-y-1 mt-auto">
          <div className="py-1 md:px-3 px-2 border border-[#C1C5CF] text-[#5E626F] rounded-md md:text-base text-sm font-extrabold">
            마케팅 콘텐츠 제작
          </div>
          <div className="py-1 md:px-3 px-2 border border-[#C1C5CF] text-[#5E626F] rounded-md md:text-base text-sm font-extrabold">
            인스타그램 관리
          </div>
          <div className="py-1 md:px-3 px-2 border border-[#C1C5CF] text-[#5E626F] rounded-md md:text-base text-sm font-extrabold">
            트위터 관리
          </div>
          <div className="py-1 md:px-3 px-2 border border-[#C1C5CF] text-[#5E626F] rounded-md md:text-base text-sm font-extrabold">
            블로그 글 작성
          </div>
        </div>
      </animated.div>
      <Tooltip anchorSelect={`#card-${index}`} isOpen={slideIdx === index - 1} offset={isMobile ? 15 : 30}>
        <div className="flex gap-x-1 text-[#00C696] text-lg items-center">
          <div className="bg-[#BBF3D2] rounded-full p-1 w-6 h-6 flex justify-center">
            <Image src={'/dollar.png'} alt="dollar" width={12} height={12} />
          </div>
          <span>월 100만원</span>
        </div>
      </Tooltip>
    </React.Fragment>
  );
}
