export type CarouselProps<T extends Record<string, any>> = {
  data: Array<T>;
  CompData: ({ data, idx }: { data: T; idx: number }) => React.ReactNode;
};
