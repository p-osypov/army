import { Container } from '@/shared/assets/styles/layout';
import { mediaWidth } from '@/shared/assets/styles/mixins';
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

  ValueBlock: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-x2);
    max-width: 500px;
  `,
  ValueText: styled.p`
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
      bottom: -60px;
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

  CardWrapper: styled.div`
    padding: 0 var(--spacing-x2);
  `,

  Card: styled.div`
    display: inline-flex !important;
    flex-direction: column;
    gap: var(--spacing-x3);
    min-height: 282px;
    border-top: 3px solid var(--color-accent);
    background-color: #111111;
    padding: calc(var(--spacing) * 6) var(--spacing-x4);
    ${mediaWidth('max', 'lg')} {
      padding: calc(var(--spacing) * 5) var(--spacing-x4);
    }
    ${mediaWidth('max', 'md')} {
      min-height: 278px;
      padding: var(--spacing-x4);
    }
    ${mediaWidth('max', 'sm')} {
      min-height: initial;
    }
  `,

  BlockTitle: styled.span`
    font-size: 26px;
    font-weight: var(--font-weight-semi-bold);
    ${mediaWidth('max', 'xxs')} {
      font-size: 22px;
    }
  `,
};
