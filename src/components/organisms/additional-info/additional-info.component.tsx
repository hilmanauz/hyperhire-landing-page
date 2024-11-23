import Image from 'next/image';
import React from 'react';

export function AdditionalInfo() {
  return (
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
  );
}
