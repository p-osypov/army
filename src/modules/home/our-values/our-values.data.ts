import { breakpoints } from '@/shared/assets/styles/mixins';

export const ourValuesArray = [
  {
    image: '/img/team-member-photo.png',
    name: 'Юрій Савчук',
    position: 'Командир',
  },
  {
    image: '/img/team-member-photo.png',
    name: 'Ігор Ласточкін',
    position: 'Рядовий',
  },
  {
    image: '/img/team-member-photo.png',
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
