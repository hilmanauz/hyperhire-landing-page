'use client';
import { Button } from '@/components/atoms';
import { PopoverHoverButton } from '@/components/moleculs';
import Accordion from '@/components/moleculs/accordion/accordion.component';
import useBreakpoint from '@/hooks/useBreakpoint';
import { classNames } from '@/utils/classNames';
import React from 'react';
import { HeaderNavigatorProps } from './header-navigator.types';
import './header-navigator.css';
import Image from 'next/image';

export default function HeaderNavigator({ data }: HeaderNavigatorProps) {
  const [open, setOpen] = React.useState(false);
  const { isMobile } = useBreakpoint();
  React.useEffect(() => {
    if (!isMobile) {
      setOpen(false);
    }
  }, [isMobile]);
  React.useEffect(() => {
    if (open) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [open]);
  console.log(isMobile);
  return (
    <React.Fragment>
      <div
        className={classNames(
          'flex gap-x-2 translate-y-[calc(-100vh)] navigator',
          isMobile && 'animate',
          open && 'show',
        )}>
        <div className="navigator__items">
          <Image src={'/footer-logo.png'} alt="logo" height={50} width={114} className="mx-6 my-1 md:hidden flex" />
          {data.map((item, idx) => (
            <div key={`${item.title}-${idx}`} className="navigator__item">
              {item.children ? (
                isMobile ? (
                  <Accordion linksArray={item.children} menuTitle={item.title} />
                ) : (
                  <PopoverHoverButton linksArray={item.children} menuTitle={item.title} />
                )
              ) : (
                <Button className={'md:text-white font-extrabold w-full md:w-auto'}>{item.title}</Button>
              )}
            </div>
          ))}
        </div>
        <div className="navigator__settings">
          <Button variant="white" className="md:hidden flex">
            문의하기
          </Button>
        </div>
      </div>
      <button
        className={classNames('menu-button', open && 'change z-20')}
        aria-label="Menu Button"
        onClick={() => {
          setOpen(!open);
        }}>
        <div className={classNames(open && 'change')}></div>
        <div className={classNames(open && 'change')}></div>
        <div className={classNames(open && 'change')}></div>
      </button>
      <Button variant="white" className="md:flex hidden">
        문의하기
      </Button>
    </React.Fragment>
  );
}
