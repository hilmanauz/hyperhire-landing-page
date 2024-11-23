import React from 'react';
import { ContainerProps } from './container.types';
import { classNames } from '@/utils/classNames';

export function Container({ children, className }: ContainerProps) {
  return <div className={classNames('container mx-auto', className)}>{children}</div>;
}
