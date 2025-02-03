import { breakpoints } from '@/shared/assets/styles/mixins';
import { v4 as uuidv4 } from 'uuid';

export const cooperationArray = [
  { id: uuidv4(), src: '/img/sternenko-spilnota.png' },
  { id: uuidv4(), src: '/img/sternenko-spilnota.png' },
  { id: uuidv4(), src: '/img/sternenko-spilnota.png' },
  { id: uuidv4(), src: '/img/sternenko-spilnota.png' },
  { id: uuidv4(), src: '/img/sternenko-spilnota.png' },
];

export const contactsSliderSettings = {
  infinite: true,
  arrows: false,
  slidesToShow: 5,
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

export const initialValues = {
  fullName: '',
  email: '',
  phone: '+380',
  vacancy: '',
  message: '',
};
