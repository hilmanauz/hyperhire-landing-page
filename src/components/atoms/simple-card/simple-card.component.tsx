'use client';
import Image from 'next/image';

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function SimpleCard<T extends Record<string, any>>({ data, idx }: { data: T; idx: number }) {
  return (
    <div style={{ width: '332px' }} className="pr-3" key={`${data.title}-${idx}`}>
      <div className="w-full h-full flex gap-x-6 items-center bg-white/20 rounded-xl p-4">
        <div className="p-3 bg-white/40 rounded-lg">
          <Image src={data.url} alt="icon-marketing" width={32} height={32} />
        </div>
        <span className="text-2xl/[36px] font-extrabold text-white">{data.title}</span>
      </div>
    </div>
  );
}
