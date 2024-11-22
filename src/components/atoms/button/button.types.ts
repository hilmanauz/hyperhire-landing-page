import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type ButtonProps = DetailedHTMLProps<
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
  HTMLButtonElement
> & {
  variant?: 'outline' | 'white' | 'ghost';
};
