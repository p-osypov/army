import { breakpoints } from '@/shared/assets/styles/mixins';
import { v4 as uuidv4 } from 'uuid';

export const cooperationArray = [
  { id: uuidv4(), src: '/img/logo-sternenko.png' },
  { id: uuidv4(), src: '/img/logo-techmagic.svg' },
  { id: uuidv4(), src: '/img/logo-TORO.png' },
];

export const contactsSliderSettings = {
  infinite: true,
  arrows: false,
  slidesToShow: cooperationArray.length > 5 ? 5 : cooperationArray.length,
  slidesToScroll: 1,
  initialSlide: 0,
  swipeToSlide: true,
  dots: true,
  responsive: [
    {
      breakpoint: breakpoints.md,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: breakpoints.sm,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: breakpoints.xs,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: breakpoints.xxs,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
export interface ContactsFormValues {
  fullName: string;
  email: string;
  phone: string;
  vacancy: string;
  message: string;
}
export const initialValues: ContactsFormValues = {
  fullName: '',
  email: '',
  phone: '',
  vacancy: '',
  message: '',
};
