import { Container, Title } from '@/shared/assets/styles/layout';
import { mediaWidth } from '@/shared/assets/styles/mixins';
import Link from 'next/link';

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
    align-items: center;
    gap: calc(var(--spacing) * 6);
  `,

  AnalyticsBlock: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-x2);
  `,

  Title: styled(Title.Span)`
    text-align: center;
    ${mediaWidth('max', 'xs')} {
      font-size: 36px;
    }
  `,

  CardsContainer: styled.div`
    display: flex;
    gap: var(--spacing-x3);
    flex-wrap: wrap;
  `,

  CardWrapper: styled.div`
    flex: 1;
    height: 100%;
    min-width: 356px;
    ${mediaWidth('max', 'lg')} {
      min-width: 374px;
      &:nth-child(3) .labels {
        display: none;
      }
      &:last-child {
        flex: 0 0 calc(50% - var(--spacing-x3) / 2);
      }
    }
    ${mediaWidth('max', 'md')} {
      min-width: 350px;
    }
    ${mediaWidth('max', 'sm')} {
      min-width: 100%;
      &:nth-child(2) .labels {
        display: none;
      }
    }
    ${mediaWidth('max', 'xs')} {
      min-width: 260px;
    }
  `,

  Labels: styled.div`
    display: flex;
    justify-content: space-between;
    padding: var(--spacing) var(--spacing-x3) var(--spacing) 0;
  `,

  HeaderItem: styled.div<{ $firstElement?: boolean }>`
    opacity: 70%;
    flex: ${({ $firstElement }) =>
      $firstElement ? '40%' : 'calc(30% - var(--spacing-x3))'};
    text-align: ${({ $firstElement }) =>
      $firstElement ? 'initial' : 'center'};
  `,

  CardContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-x3);
    border-left: 2px solid var(--color-accent);
    background-color: #111111;
    font-weight: var(--font-weight-semi-bold);
    min-height: 150px;
  `,

  MilitaryEquipment: styled.div`
    font-size: calc(var(--font-size-normal) * 1.5);
    flex: 40%;
    ${mediaWidth('max', 'xs')} {
      font-size: var(--font-size-medium);
    }
  `,

  NumImpressed: styled.div<{ $lowOpacity?: boolean }>`
    font-size: var(--font-size-title);
    opacity: ${({ $lowOpacity }) => ($lowOpacity ? '0.4' : '1')};
    flex: 30%;
    text-align: center;
  `,

  MoreStatisticsBtn: styled(Link)`
    padding: 20px 30px;
    border: 1px solid rgba(250, 250, 250, 0.3);
    border-radius: 100px;
    cursor: pointer;
    font-size: var(--font-size-medium);
  `,
};
