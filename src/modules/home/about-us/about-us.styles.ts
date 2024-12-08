import { Container } from '@/shared/assets/styles/layout';
import { mediaWidth } from '@/shared/assets/styles/mixins';
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
    ${mediaWidth('max', 'xxs')} {
      padding: var(--spacing-x2) var(--spacing-x3);
      right: 20%;
    }
  `,

  Logo: styled.img`
    display: block;
    ${mediaWidth('max', 'xs')} {
      max-width: 90px;
      max-height: 90px;
    }
    ${mediaWidth('max', 'xxs')} {
      max-width: 70px;
      max-height: 70px;
    }
  `,

  InfoBlockItem: styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing);
  `,

  Goals: styled.span`
    font-size: 30px;
    ${mediaWidth('max', 'xs')} {
      font-size: var(--font-size-medium);
    }
  `,

  Destroyed: styled.span`
    font-size: var(--font-size-medium);
    ${mediaWidth('max', 'xs')} {
      font-size: var(--font-size-normal);
    }
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
    font-size: var(--font-size-title);
    background-image: var(--background-gradient);
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
