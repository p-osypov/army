import { breakpoints } from '@/shared/assets/styles/mixins';

export const ourValuesArray = [
  { titleKey: 'cardTitle1', textKey: 'cardText1' },
  { titleKey: 'cardTitle2', textKey: 'cardText2' },
  { titleKey: 'cardTitle3', textKey: 'cardText3' },
  { titleKey: 'cardTitle4', textKey: 'cardText4' },
  { titleKey: 'cardTitle5', textKey: 'cardText5' },
  { titleKey: 'cardTitle6', textKey: 'cardText6' },
];

export const valuesSliderSettings = {
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
