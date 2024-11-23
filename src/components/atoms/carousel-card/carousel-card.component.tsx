import Image from 'next/image';
import React from 'react';
import { useSpring, animated } from 'react-spring';

export function CarouselCard() {
  const [show, setShown] = React.useState(false);

  const props3 = useSpring({
    transform: show ? 'scale(1.03)' : 'scale(1)',
    boxShadow: show ? '0 20px 25px rgb(0 0 0 / 25%)' : '0 15px 20px rgb(0 0 0 / 14%)',
  });

  return (
    <animated.div
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
      className={'cursor-pointer w-[322px] h-[408px] p-9 gap-y-4 rounded-lg bg-white flex flex-col items-center'}>
      <div className="relative">
        <Image src={'/image-carousel.png'} alt="image-carousel" className="rounded-full" width={120} height={120} />
        <div className="absolute right-2 bottom-1">
          <Image src={'/flag.png'} alt="flag" width={25} height={18} />
        </div>
      </div>
      <div className="text-center">
        <p className="text-2xl/9 font-extrabold tracking-normal">Abhishek Gupta</p>
        <span className="text-primary text-base">마케팅 · 2y+</span>
      </div>
      <div className="flex flex-wrap gap-x-1 justify-center gap-y-1 mt-auto">
        <div className="py-1 px-3 border border-[#C1C5CF] text-[#5E626F] rounded-md text-base font-extrabold">
          마케팅 콘텐츠 제작
        </div>
        <div className="py-1 px-3 border border-[#C1C5CF] text-[#5E626F] rounded-md text-base font-extrabold">
          인스타그램 관리
        </div>
        <div className="py-1 px-3 border border-[#C1C5CF] text-[#5E626F] rounded-md text-base font-extrabold">
          트위터 관리
        </div>
        <div className="py-1 px-3 border border-[#C1C5CF] text-[#5E626F] rounded-md text-base font-extrabold">
          블로그 글 작성
        </div>
      </div>
    </animated.div>
  );
}
