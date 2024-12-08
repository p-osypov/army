import Slider, { Settings } from 'react-slick';
import { ReactNode, RefObject } from 'react';

export interface SliderProps extends Settings {
  sliderRef?: RefObject<Slider>;
  children?: ReactNode;
}
