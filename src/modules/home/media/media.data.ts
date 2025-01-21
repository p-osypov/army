import { breakpoints } from '@/shared/assets/styles/mixins';

export const mediaArray = [
  { src: 'https://www.youtube.com/embed/T_WPfvaXrII?si=dsmigRjiUPgXiKD2' },
  { src: 'https://www.youtube.com/embed/7G4vB9ZL8yE?si=AtWOEn9ZVLkaeC84' },
  { src: 'https://www.youtube.com/embed/orEJnJlENik?si=AxjO0-AeDqWxl95c' },
];

export const mediaSliderSettings = {
  infinite: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  swipeToSlide: true,
  dots: true,
  responsive: [
    {
      breakpoint: breakpoints.lg,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: breakpoints.sm,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
