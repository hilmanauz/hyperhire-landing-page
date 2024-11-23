import React from 'react';
import { config } from 'react-spring';
import { SpringCarouselProps } from './spring-carousel.types';
import CarouselComp from 'react-spring-3d-carousel';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import useBreakpoint from '@/hooks/useBreakpoint';

const getTouches = (evt: React.TouchEvent<HTMLDivElement>) => {
  return (
    //@ts-ignore
    evt.touches || evt.originalEvent.touches
  );
};

export function SpringCarousel(props: SpringCarouselProps) {
  const { isMobile } = useBreakpoint();
  const [offsetRadius, setOffsetRadius] = React.useState(2);
  const [showArrows, setShowArrows] = React.useState(false);
  const [goToSlide, setGoToSlide] = React.useState<number>(0);
  const [state, setState] = React.useState<{ xDown: number | null; yDown: number | null }>({ xDown: 0, yDown: 0 });

  const table = React.useMemo(
    () =>
      props.cards(goToSlide).map((element, index) => {
        return { ...element, onClick: () => setGoToSlide(index) };
      }),
    [goToSlide],
  );

  const [cards, setCards] = React.useState(table);

  React.useEffect(() => {
    setCards(table);
  }, [table]);

  React.useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(!!props.showArrows);
  }, [props.offset, props.showArrows]);

  const handleTouchMove: React.TouchEventHandler<HTMLDivElement> = (evt) => {
    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = (state.xDown || 0) - xUp;
    let yDiff = (state.yDown || 0) - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        setGoToSlide((val) => val + 1);
        setState({
          xDown: null,
          yDown: null,
        });
      } else {
        setGoToSlide((val) => val - 1);
        setState({
          xDown: null,
          yDown: null,
        });
      }
    }
  };

  const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = (evt) => {
    const firstTouch = getTouches(evt)[0];
    setState({
      xDown: firstTouch.clientX,
      yDown: firstTouch.clientY,
    });
  };

  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className="relative">
      <CarouselComp
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={false}
        animationConfig={config.gentle}
        offsetFn={() => ({ opacity: 1 })}
      />
      {showArrows && (
        <React.Fragment>
          <ChevronLeftIcon
            className="absolute md:text-white md:-left-[8%] -left-[4%] top-1/2 z-10 w-8 h-8 text-black hover:text-gray-500 cursor-pointer"
            onClick={() => setGoToSlide((val) => (val === 0 ? props.cards.length - 1 : (val || 0) - 1))}
          />
          <ChevronRightIcon
            className="absolute md:text-white md:-right-[8%] -right-[4%] top-1/2 z-10 w-8 h-8 text-black hover:text-gray-500 cursor-pointer"
            onClick={() => setGoToSlide((val) => (val === props.cards.length - 1 ? 0 : (val || 0) + 1))}
          />
        </React.Fragment>
      )}
    </div>
  );
}
