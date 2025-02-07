import { Container, Title } from '@/shared/assets/styles/layout';
import { mediaWidth } from '@/shared/assets/styles/mixins';
import { Scrollbar } from 'react-scrollbars-custom';
import styled from 'styled-components';

export const cardHeight = {
  lg: 400,
  xs: 300,
  xxs: 200,
};
export const scrollBarPadding = 30;

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
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-x2);

    .ScrollbarsCustom {
      &-TrackX {
        border-radius: initial !important;
        height: 4px !important;
        width: 100% !important;
        left: 0 !important;
      }
      &-ThumbX {
        background-color: var(--color-accent) !important;
        border-radius: initial !important;
      }
    }
  `,

  TitleBlock: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-x2);
    margin-bottom: var(--spacing-x4);
  `,

  Title: styled(Title.Span)`
    text-align: center;
    max-width: 580px;
    ${mediaWidth('max', 'xs')} {
      max-width: 400px;
    }
  `,

  Scrollbar: styled(Scrollbar)`
    height: ${cardHeight.lg + scrollBarPadding}px!important;
    ${mediaWidth('max', 'xs')} {
      height: ${cardHeight.xs + scrollBarPadding}px!important;
    }
    ${mediaWidth('max', 'xxs')} {
      height: ${cardHeight.xxs + scrollBarPadding}px!important;
    }
  `,

  Vacancies: styled.div`
    display: flex;
    gap: calc(var(--spacing) * 6);
  `,

  CardWrapper: styled.div`
    max-width: 500px;
    min-width: 500px;
    min-height: ${cardHeight.lg}px;
    ${mediaWidth('max', 'xs')} {
      max-width: 400px;
      min-width: 400px;
      min-height: ${cardHeight.xs}px;
    }
    ${mediaWidth('max', 'xxs')} {
      max-width: 300px;
      min-width: 300px;
      min-height: ${cardHeight.xxs}px;
    }
  `,

  PullHere: styled.span`
    font-size: var(--font-size-normal);
    ${mediaWidth('max', 'xs')} {
      font-size: var(--font-size-small);
    }
  `,
};
