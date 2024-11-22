import { classNames } from '@/utils/classNames';
import React from 'react';
import { PopoverHoverButtonProps } from './popover-hover-button.types';
import { Button } from '@/components/atoms';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import './popover-hover-button.css';

export function PopoverHoverButton({ menuTitle, linksArray }: PopoverHoverButtonProps) {
  return (
    <div className="popover__wrapper group">
      <Button className="text-white">
        {menuTitle}{' '}
        <ChevronDownIcon
          className={classNames('h-9 w-9 inline-block group-hover:rotate-180', 'transform transition-all duration-500')}
          aria-hidden="true"
        />
      </Button>
      <div className="popover__content">
        <ul className="collection-list space-y-2">
          {linksArray.map(({ title }, idx) => (
            <li key={`${title}-${idx}`}>{title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
