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

  Title: styled.span`
    font-size: var(--font-size-title);
    background-image: var(--text-background-gradient);
    background-clip: text;
    color: transparent;
    font-weight: var(--font-weight-medium);
  `,

  BlockContainer: styled.div`
    display: flex;
    gap: calc(var(--spacing) * 6);
    flex-wrap: wrap;
  `,

  DestroyedEquipBlock: styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    position: relative;
    min-width: 562px;
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
  `,

  InfoBlock: styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-x2);
    border-left: 2px solid var(--color-accent);
    background-color: #111111;
    padding: calc(var(--spacing) * 6) var(--spacing-x4) calc(var(--spacing) * 6)
      calc(var(--spacing-x4) + 50px);
    margin-left: 50px;
    max-width: 562px;
  `,

  BlockTitle: styled.span`
    font-size: calc(var(--font-size-thin) * 2);
    font-weight: var(--font-weight-semi-bold);
  `,
  AnalyticsText: styled.p`
    line-height: 1.5;
    font-size: var(--font-size-medium);
  `,
};
