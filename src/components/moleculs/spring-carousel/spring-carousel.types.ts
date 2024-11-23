export type SpringCarouselProps = {
  offset: number;
  // slideIdx?: number;
  // setSlideIdx?: React.Dispatch<React.SetStateAction<number>>;
  showArrows?: boolean;
  cards: (slideIdx: number) => Array<{
    key: number;
    content: JSX.Element;
  }>;
  width?: string;
  height?: string;
  margin?: string;
};
