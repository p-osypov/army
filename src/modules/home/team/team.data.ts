import { breakpoints } from '@/shared/assets/styles/mixins';

export const teamArray = [
  {
    image: '/img/image.png',
    name: 'Юрій Савчук',
    position: 'Командир',
  },
  {
    image: '/img/image.png',
    name: 'Ігор Ласточкін',
    position: 'Рядовий',
  },
  {
    image: '/img/image.png',
    name: 'Павло Зібров',
    position: 'Старшина',
  },
];

export const teamSliderSettings = {
  infinite: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: breakpoints.lg,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};
