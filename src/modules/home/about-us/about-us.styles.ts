import { Container, Title } from '@/shared/assets/styles/layout';
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
    max-width: calc(50% - var(--spacing-x2));
    min-width: calc(50% - var(--spacing-x2));
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
    background-color: var(--color-accent-dark);
    padding: var(--spacing-x3) var(--spacing-x4);
    gap: var(--spacing-x2);
    top: 23%;
    right: 27%;
    z-index: 1;
    ${mediaWidth('max', 'xxs')} {
      padding: var(--spacing-x2) var(--spacing-x3);
      right: 20%;
    }
  `,

  Logo: styled.img`
    display: block;
    width: 100px;
    height: 100px;
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
    color: var(--color-accent);
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

  Image: styled.div<{ src: string }>`
    background-image: url('${({ src }) => src}');
    background-size: cover;
    position: absolute;
    left: 0;
    bottom: 0;
    min-height: 54%;
    min-width: 54%;
    ${mediaWidth('max', 'lg')} {
      min-height: 70%;
    }
  `,
  Image2: styled.div<{ src: string }>`
    background-image: url('${({ src }) => src}');
    background-size: cover;
    background-position: left top;
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
    max-width: calc(50% - var(--spacing-x2));
    min-width: calc(50% - var(--spacing-x2));
    ${mediaWidth('max', 'lg')} {
      max-width: 100%;
      min-width: 100%;
    }
  `,

  Title: styled(Title.H1)`
    ${mediaWidth('max', 'xs')} {
      font-size: 36px;
    }
  `,

  AboutText: styled.p`
    opacity: 70%;
    line-height: 1.5;
  `,
};
