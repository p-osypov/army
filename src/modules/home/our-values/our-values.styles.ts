import { Container } from '@/shared/assets/styles/layout';
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
    max-width: 480px;
  `,
  Title: styled.span`
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
  ValueText: styled.p`
    opacity: 70%;
    line-height: 1.5;
    font-size: var(--font-size-medium);
  `,

  InfoBlock: styled.div`
    display: flex;
    justify-content: center;
    gap: var(--spacing-x4);
    flex-wrap: wrap;
  `,

  Block: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: var(--spacing-x3);
    min-height: 282px;
    border-top: 3px solid #211f1f;
    background-color: #111111;
    padding: calc(var(--spacing) * 9) var(--spacing-x4);
  `,

  BlockTitle: styled.span`
    font-size: 26px;
    font-weight: var(--font-weight-semi-bold);
  `,
};
