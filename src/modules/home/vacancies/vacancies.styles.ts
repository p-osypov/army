import { Container, Title } from '@/shared/assets/styles/layout';
import { mediaWidth } from '@/shared/assets/styles/mixins';
import Link from 'next/link';
import styled from 'styled-components';
import { Scrollbar } from 'react-scrollbars-custom';

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

  TitleText: styled(Title.Span)`
    text-align: center;
    max-width: 580px;
    ${mediaWidth('max', 'xs')} {
      font-size: 36px;
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

  Card: styled.div`
    position: relative;
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

  Image: styled.div<{ src: string }>`
    background-image: url('${({ src }) => src}');
    background-size: cover;
    position: absolute;
    right: 0;
    top: 0;
    width: calc(100% - 20px);
    height: 70%;
  `,

  InfoBlock: styled.div`
    display: flex;
    position: absolute;
    z-index: 1;
    border: 1px solid #fafafa1a;
    backdrop-filter: blur(20px);
    width: 75%;
    min-height: 200px;
    bottom: 0;
    left: 0;
    ${mediaWidth('max', 'xs')} {
      min-height: 150px;
    }
    ${mediaWidth('max', 'xxs')} {
      min-height: 100px;
    }
  `,

  InfoBlockItem: styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing);
    padding: var(--spacing-x4);
    ${mediaWidth('max', 'xs')} {
      padding: var(--spacing-x3);
    }
    ${mediaWidth('max', 'xxs')} {
      padding: var(--spacing-x2);
    }
  `,

  MilitaryRank: styled.span`
    font-size: calc(var(--font-size-normal) * 1.5);
    font-weight: var(--font-weight-semi-bold);
    ${mediaWidth('max', 'xs')} {
      font-size: var(--font-size-normal);
    }
    ${mediaWidth('max', 'xxs')} {
      font-size: var(--font-size-small);
    }
  `,

  BlockText: styled.p`
    ${mediaWidth('max', 'xs')} {
      font-size: var(--font-size-small);
    }
  `,

  LearnMoreBtn: styled(Link)`
    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: var(--spacing);
    margin-top: auto;
    border-bottom: none;
    ${mediaWidth('max', 'xs')} {
      font-size: var(--font-size-small);
    }

    .icon {
      color: var(--color-accent);
      height: 16px;
      width: 16px;
    }

    &:hover {
      border-bottom: 1px solid white;
    }
  `,

  PullHere: styled.span`
    font-size: var(--font-size-normal);
    ${mediaWidth('max', 'xs')} {
      font-size: var(--font-size-small);
    }
  `,
};
