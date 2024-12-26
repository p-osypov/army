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
    flex-direction: column;
    gap: calc(var(--spacing) * 6);
  `,

  AnalyticsBlock: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-x2);
  `,

  CardsContainer: styled.div`
    display: flex;
    gap: calc(var(--spacing) * 6);
    flex-wrap: wrap;
    ${mediaWidth('max', 'xs')} {
      gap: var(--spacing-x4);
    }
  `,

  CardContainer: styled.div`
    flex: 1;
    min-width: 400px;
    padding-left: 50px;
    ${mediaWidth('max', 'xs')} {
      min-width: 260px;
      padding-left: 35px;
    }
  `,

  NumDestroyed: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: var(--color-accent);
    min-height: 100px;
    min-width: 100px;
    border-radius: 50%;
    font-size: var(--font-size-title);
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    ${mediaWidth('max', 'xs')} {
      min-height: 70px;
      min-width: 70px;
      font-size: 30px;
    }
  `,

  InfoBlock: styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    gap: var(--spacing-x2);
    border-left: 2px solid var(--color-accent);
    background-color: #111111;
    padding: calc(var(--spacing) * 6) var(--spacing-x4) calc(var(--spacing) * 6)
      calc(var(--spacing-x4) + 50px);
    height: 100%;
    ${mediaWidth('max', 'xs')} {
      padding: var(--spacing-x2) var(--spacing-x2) var(--spacing-x2)
        calc(var(--spacing-x2) + 35px);
    }
  `,

  BlockTitle: styled.span`
    font-size: calc(var(--font-size-thin) * 2);
    font-weight: var(--font-weight-semi-bold);
    ${mediaWidth('max', 'xs')} {
      font-size: var(--font-size-medium);
    }
  `,
  AnalyticsText: styled.p`
    line-height: 1.5;
    font-size: var(--font-size-medium);
    ${mediaWidth('max', 'xs')} {
      font-size: var(--font-size-normal);
    }
  `,
};
