import styled from 'styled-components';
import { mediaWidth } from '../assets/styles/mixins';
import Link from 'next/link';

export const SC = {
  Card: styled.div`
    position: relative;
    width: 100%;
    min-height: 100%;
    min-width: 250px;
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
};
