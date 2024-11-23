export type SpringCarouselProps<T extends Record<string, any>> = {
  offset: number;
  showArrows?: boolean;
  data: Array<T>;
  cardComp: ({ data, index, slideIdx }: { data: T; index: number; slideIdx: number }) => React.ReactNode;
  width?: string;
  height?: string;
  margin?: string;
};
