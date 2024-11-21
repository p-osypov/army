import { Container } from '@/shared/assets/styles/layout';
import { mediaWidth } from '@/shared/assets/styles/mixins';
import styled from 'styled-components';

export const SC = {
  Section: styled.section`
    color: var(--color-white);
    margin-bottom: 100px;
  `,

  Content: styled(Container)`
    display: flex;
    justify-content: space-between;
    gap: var(--spacing-x4);
    flex-wrap: wrap;
    min-height: 574px;
  `,

  ImgColumn: styled.div`
    position: relative;
    max-width: 48%;
    min-width: 48%;
    min-height: 574px;
    ${mediaWidth('max', 'lg')} {
      max-width: 100%;
      min-width: 100%;
      min-height: 300px;
    }
  `,

  InfoBlock: styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    background-color: var(--color-accent);
    padding: var(--spacing-x3) var(--spacing-x4);
    gap: var(--spacing-x2);
    top: 10%;
    right: 27%;
    z-index: 1;
  `,

  Logo: styled.img`
    display: block;
  `,

  InfoBlockItem: styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing);
  `,

  Goals: styled.span`
    font-size: 30px;
  `,

  Destroyed: styled.span`
    font-size: 18px;
  `,

  ImgBlock: styled.div`
    position: absolute;
    bottom: 0;
    background-color: white;
    min-height: 54%;
    min-width: 54%;
    ${mediaWidth('max', 'lg')} {
      min-height: 70%;
    }
  `,
  ImgBlock2: styled.div`
    background-color: white;
    min-height: 90%;
    min-width: 43%;
    position: absolute;
    top: 0;
    right: 0;
  `,

  TextColumn: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: var(--spacing-x2);
    max-width: 48%;
    min-width: 48%;
    ${mediaWidth('max', 'lg')} {
      max-width: 100%;
      min-width: 100%;
    }
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
    ${mediaWidth('max', 'xs')} {
      font-size: 36px;
    }
  `,

  AboutText: styled.p`
    opacity: 70%;
    line-height: 1.5;
  `,
};
