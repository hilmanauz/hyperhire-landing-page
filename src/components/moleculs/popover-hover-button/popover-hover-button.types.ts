/* eslint-disable @typescript-eslint/no-explicit-any */
export type PopoverHoverButtonProps<T extends Record<string, any>> = {
  menuTitle: string;
  linksArray: Array<T>;
};
