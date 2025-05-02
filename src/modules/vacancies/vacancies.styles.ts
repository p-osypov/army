import { cloudStyles, Container, Title } from '@/shared/assets/styles/layout';
import { mediaWidth } from '@/shared/assets/styles/mixins';
import { HEADER_HEIGHT } from '@/shared/components/header/header.styles';
import styled from 'styled-components';
import Link from 'next/link';

export const cardHeight = {
  lg: 400,
  xs: 300,
  xxs: 200,
};

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
    padding-top: calc(${HEADER_HEIGHT}px + var(--spacing-x4));
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-x2);
  `,

  CloudImage: styled.img`
    ${cloudStyles};
    left: 0;
    transform: translate(-65%, -30%);
  `,

  TitleBlock: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-x2);
    margin-bottom: var(--spacing-x4);
  `,

  Title: styled(Title.Span)`
    max-width: 600px;
    ${mediaWidth('max', 'xs')} {
      max-width: 400px;
    }
  `,

  Subtitle: styled.p`
    opacity: 70%;
    line-height: 1.5;
    font-size: var(--font-size-medium);
    max-width: 630px;
    ${mediaWidth('max', 'xxs')} {
      font-size: var(--font-size-normal);
    }
  `,

  Vacancies: styled.div`
    display: flex;
    gap: calc(var(--spacing) * 6);
    flex-wrap: wrap;
  `,

  CardWrapper: styled.div`
    min-height: ${cardHeight.lg}px;
    min-width: 400px;
    flex: 1;

    ${mediaWidth('max', 'xs')} {
      min-width: 250px;
      min-height: ${cardHeight.xs}px;
    }
    ${mediaWidth('max', 'xxs')} {
      min-height: ${cardHeight.xxs}px;
    }
  `,
  Applied: {
    PageTitle: styled.h1`
      font-size: var(--font-size-medium);
      text-align: center;
    `,
    PageDescription: styled.p`
      text-align: center;
    `,
    ReturnHomeButton: styled(Link)`
      border: 1px solid var(--color-white);
      padding: var(--spacing) var(--spacing-x2);
      border-radius: 4px;
      color: white;
      max-width: max-content;
      margin: var(--spacing-x4) auto 0 auto;
    `,
  },
};
