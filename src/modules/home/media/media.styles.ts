import { cloudStyles, Container } from '@/shared/assets/styles/layout';
import { mediaWidth } from '@/shared/assets/styles/mixins';
import Slider from '@/shared/components/slider';
import styled from 'styled-components';

export const SC = {
  Section: styled.section`
    color: var(--color-white);
    margin-bottom: 100px;
    background-image: url(/img/media-bg.png);
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
  `,

  Content: styled(Container)`
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    gap: calc(var(--spacing) * 6);
    position: relative;
  `,

  RightCloudImage: styled.img`
    ${cloudStyles};
    right: 0;
    transform: translate(60%, -30%);
  `,

  TitleBlock: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-x2);
    max-width: 700px;
  `,
  Subtitle: styled.p`
    opacity: 70%;
    line-height: 1.5;
    font-size: var(--font-size-medium);
    ${mediaWidth('max', 'xxs')} {
      font-size: var(--font-size-normal);
    }
  `,

  Slider: styled(Slider)`
    width: calc(100% + var(--spacing-x4));
    margin-left: calc(0px - var(--spacing-x2));

    .slick-dots {
      bottom: -50px;
      li button:before {
        color: var(--color-white);
        font-size: 10px;
      }
      li.slick-active button:before {
        color: var(--color-accent);
        opacity: 1;
      }
    }
  `,

  VideoWrapper: styled.div`
    padding: 0 var(--spacing-x2);
  `,
};
