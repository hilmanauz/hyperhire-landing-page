import { Container } from '@/components/atoms';
import Image from 'next/image';
import React from 'react';

export default async function Footer() {
  return (
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
  );
}
