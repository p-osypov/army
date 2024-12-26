import { Container, Title } from '@/shared/assets/styles/layout';

import { mediaWidth } from '@/shared/assets/styles/mixins';
import Slider from '@/shared/components/slider';
import styled from 'styled-components';

export const SC = {
  Section: styled.section`
    color: var(--color-white);
    margin-bottom: 100px;
    ${mediaWidth('max', 'lg')} {
      margin-bottom: 70px;
    }
    ${mediaWidth('max', 'md')} {
      margin-bottom: 50px;
    }
    ${mediaWidth('max', 'sm')} {
      margin-bottom: 30px;
    }
  `,

  Content: styled(Container)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-x2);
  `,

  TitleBlock: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-x2);
  `,
  Title: styled(Title.Span)`
    text-align: center;
    max-width: 580px;
  `,

  SliderContainer: styled.div`
    width: 100%;
  `,

  Slider: styled(Slider)`
    width: 100%;
  `,
  Card: styled.div`
    display: inline-flex !important;
    flex-direction: column;
    gap: var(--spacing-x2);
    text-align: center;
    padding: var(--spacing);
    ${mediaWidth('max', 'xs')} {
      gap: var(--spacing);
    }
  `,
  Image: styled.img`
    width: 100%;
    margin-bottom: 15px;
  `,
  Name: styled.span`
    font-size: var(--font-size-medium);
    ${mediaWidth('max', 'xxs')} {
      font-size: var(--font-size-normal);
    }
  `,
  MilitaryRank: styled.span`
    opacity: 70%;
    font-size: var(--font-size-normal);
    ${mediaWidth('max', 'xxs')} {
      font-size: var(--font-size-small);
    }
  `,

  JoinUsBtn: styled.button`
    background-color: var(--color-accent);
    padding: var(--spacing-x3) calc(var(--spacing) * 5);
    border-radius: 100px;
    cursor: pointer;
    font-size: var(--font-size-medium);
    color: var(--color-white);
    margin-top: var(--spacing-x4);
    ${mediaWidth('max', 'sm')} {
      padding: var(--spacing-x2) var(--spacing-x3);
    }
    ${mediaWidth('max', 'xxs')} {
      font-size: var(--font-size-normal);
    }
  `,
};
