export type CarouselCardProps<T extends Record<string, any>> = {
  data: T;
  index: number;
  slideIdx: number;
};
