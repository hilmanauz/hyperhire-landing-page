'use client';
import Slider, { Settings } from 'react-slick';
import { CarouselProps } from './carousel.types';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function Carousel<T extends Record<string, any>>({ CompData, data }: CarouselProps<T>) {
  const settings: Settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    variableWidth: true,
    adaptiveHeight: true,
    rows: 1,
  };
  return (
    <Slider {...settings}>
      {data.map((item: T, idx: number) => (
        <CompData data={item} idx={idx} key={`carousel-card-${idx}`} />
      ))}
    </Slider>
  );
}
