import { ForwardRefRenderFunction, forwardRef, memo } from 'react';
import { ButtonProps } from './button.types';
import { classNames } from '@/utils/classNames';
import { variantToStylesMapper } from './button.default';

const ButtonComponent: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { className, ...props },
  ref,
): JSX.Element => {
  return (
    <button
      {...props}
      ref={ref}
      className={classNames(
        className || '',
        props.variant && variantToStylesMapper[props.variant],
        'inline-flex items-center gap-2 py-1.5 px-6 text-sm/6 font-bold focus:outline-none',
      )}
    />
  );
};

export const Button = memo(forwardRef(ButtonComponent));
