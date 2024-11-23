export type SpringCarouselProps = {
  offset: number;
  showArrows?: boolean;
  cards: Array<{
    key: number;
    content: JSX.Element;
  }>;
  width?: string;
  height?: string;
  margin?: string;
};
