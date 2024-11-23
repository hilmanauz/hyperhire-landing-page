'use client';

import { classNames } from '@/utils/classNames';
import { Tooltip as ReactTooltip, ITooltip } from 'react-tooltip';

export function Tooltip(props: ITooltip) {
  return (
    <ReactTooltip
      {...props}
      variant={props.variant || 'light'}
      className={classNames('shadow-lg', props.className)}
      style={{
        borderRadius: '8px',
        ...props.style,
      }}
    />
  );
}
