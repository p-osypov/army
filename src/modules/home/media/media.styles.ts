import { Container } from '@/shared/assets/styles/layout';
import Slider from '@/shared/components/slider';
import styled from 'styled-components';

export const SC = {
  Section: styled.section`
    color: var(--color-white);
    margin-bottom: 100px;
  `,

  Content: styled(Container)`
    display: flex;
    flex-direction: column;
    gap: calc(var(--spacing) * 6);
  `,

  MediaBlock: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-x2);
    max-width: 700px;
  `,
  MediaText: styled.p`
    opacity: 70%;
    line-height: 1.5;
    font-size: var(--font-size-medium);
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

  Video: styled.iframe`
    width: 100%;
    height: 250px;
    border: 5px solid var(--color-accent);
  `,
};
