/* eslint-disable @typescript-eslint/no-explicit-any */
export type AccordionProps<T extends Record<string, any>> = {
  menuTitle: string;
  linksArray: Array<T>;
};
