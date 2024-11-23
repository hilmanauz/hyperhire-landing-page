import { classNames } from '@/utils/classNames';
import React from 'react';
import { PopoverHoverButtonProps } from './popover-hover-button.types';
import { Button, Tooltip } from '@/components/atoms';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import './popover-hover-button.css';

export function PopoverHoverButton({ menuTitle, linksArray }: PopoverHoverButtonProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Button className="text-white " id="popover">
        {menuTitle}{' '}
        <ChevronDownIcon
          className={classNames(
            'h-9 w-9 inline-block transform transition-all duration-500',
            isOpen ? 'rotate-180' : '',
          )}
          aria-hidden="true"
        />
      </Button>
      <Tooltip
        anchorSelect="#popover"
        clickable
        afterShow={() => {
          setIsOpen(true);
        }}
        afterHide={() => {
          setIsOpen(false);
        }}>
        <ul className="space-y-2 py-2">
          {linksArray.map(({ title }, idx) => (
            <li className="text-sm cursor-pointer hover:font-bold" key={`${title}-${idx}`}>
              {title}
            </li>
          ))}
        </ul>
      </Tooltip>
    </React.Fragment>
  );
}
