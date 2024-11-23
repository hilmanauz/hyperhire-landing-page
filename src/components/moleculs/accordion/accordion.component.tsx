import React from 'react';
import { AccordionProps } from './accordion.types';
import './accordion.css';

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Accordion<T extends Record<string, any>>({ menuTitle, linksArray }: AccordionProps<T>) {
  return (
    <div className="tab">
      <input type="checkbox" id="chck1" />
      <label className="tab-label" htmlFor="chck1">
        {menuTitle}
      </label>
      <div className="tab-content">
        <ul className="collection-list">
          {linksArray.map(({ title }, idx) => (
            <li key={idx}>{title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
