import { Container } from '@/shared/assets/styles/layout';
import styled from 'styled-components';

export const SC = {
  Section: styled.section`
    color: var(--color-white);
    margin-bottom: 80px;
  `,

  Content: styled(Container)`
    display: flex;
    justify-content: space-between;
    gap: calc(var(--spacing-x3) * 2);
    min-height: 574px;
    flex-wrap: wrap;
  `,

  Div1: styled.div`
    position: relative;
    min-width: calc(50% - var(--spacing-x3));
    min-height: 100%;
  `,

  Background1: styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    background-color: #415346;
    padding: var(--spacing-x3) var(--spacing-x4);
    gap: var(--spacing-x2);
    top: 10%;
    right: 27%;
    z-index: 1;
  `,

  Logo: styled.img`
    display: block;
  `,

  Background1Item: styled.div``,

  Goals: styled.span`
    font-size: 30px;
  `,

  Destroyed: styled.p`
    font-size: 18px;
  `,

  Background2: styled.div`
    position: absolute;
    bottom: 0;
    background-color: white;
    min-height: 54%;
    min-width: 54%;
  `,
  Background3: styled.div`
    background-color: white;
    min-height: 90%;
    min-width: 43%;
    position: absolute;
    top: 0;
    right: 0;
  `,

  Div2: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: var(--spacing-x2);
    max-width: calc(50% - var(--spacing-x3));
  `,

  Title: styled.h1`
    font-size: 48px;
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.2)
    );
    background-clip: text;
    color: transparent;
    font-weight: var(--font-weight-medium);
  `,

  AboutText: styled.p`
    color: #fafafab2;
    line-height: 1.5;
  `,
};
