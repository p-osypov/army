import { breakpoints } from '@/shared/assets/styles/mixins';
import useTranslation from 'next-translate/useTranslation';

export const ourValuesArray = () => {
  const { t } = useTranslation('our-values');

  return [
    {
      title: t('card1'),
      text: t('text1'),
    },
    {
      title: t('card2'),
      text: t('text2'),
    },
    {
      title: t('card3'),
      text: t('text3'),
    },
    {
      title: t('title4'),
      text: t('text4'),
    },
    {
      title: t('title5'),
      text: t('text5'),
    },
    {
      title: t('title6'),
      text: t('text6'),
    },
  ];
};

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
