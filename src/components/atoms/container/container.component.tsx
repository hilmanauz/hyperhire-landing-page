import React from 'react';
import { ContainerProps } from './container.types';

export function Container({ children }: ContainerProps) {
  return <div className="container mx-auto">{children}</div>;
}
