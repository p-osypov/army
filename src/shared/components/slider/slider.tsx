import type { FC, RefObject } from 'react';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactSlick from 'react-slick';
import { SliderProps } from '@/shared/components/slider/slider.types';

export const Slider: FC<SliderProps> = ({ sliderRef, ...props }) => {
  return (
    <ReactSlick ref={sliderRef as RefObject<ReactSlick>} {...props}>
      {props.children}
    </ReactSlick>
  );
};
