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

  InfoBlock: styled.div`
    display: flex;
    justify-content: center;
    gap: var(--spacing-x4);
    flex-wrap: wrap;
    ${mediaWidth('max', 'md')} {
      gap: var(--spacing-x3);
    }
    ${mediaWidth('max', 'md')} {
      gap: var(--spacing-x2);
    }
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
    ${mediaWidth('max', 'lg')} {
      padding: calc(var(--spacing) * 5) var(--spacing-x4);
    }
    ${mediaWidth('max', 'md')} {
      min-width: 360px;
      min-height: 100%;
    }
    ${mediaWidth('max', 'xxs')} {
      min-width: 280px;
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
