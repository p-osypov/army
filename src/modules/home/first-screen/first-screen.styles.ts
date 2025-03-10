import { Container, Title } from '@/shared/assets/styles/layout';
import { mediaWidth } from '@/shared/assets/styles/mixins';
import { HEADER_HEIGHT } from '@/shared/components/header/header.styles';
import { Label } from '@/shared/assets/styles/layout';
import styled from 'styled-components';
import Link from 'next/link';

export const SC = {
  Section: styled.section`
    color: var(--color-white);
    margin-bottom: 70px;
    ${mediaWidth('max', 'lg')} {
      margin-bottom: 50px;
    }
    ${mediaWidth('max', 'md')} {
      margin-bottom: 30px;
    }
  `,

  Content: styled(Container)`
    background-image: url(/img/first-screen-bg.png);
    background-repeat: no-repeat;
    background-position: center top;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-bottom: var(--spacing);
    min-height: 700px;
    height: 100vh;
    max-height: 960px;
    position: relative;
    padding-top: calc(${HEADER_HEIGHT}px + var(--spacing-x4));
    ${mediaWidth('max', 'md')} {
      padding-top: calc(${HEADER_HEIGHT}px + var(--spacing-x2));
    }
  `,

  CloudImage: styled.img`
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-65%, -15%);
    pointer-events: none;
    user-select: none;
  `,

  UnitName: styled(Label)`
    margin-bottom: var(--spacing-x3);
  `,

  Title: styled(Title.Span)`
    font-size: 90px;
    margin-bottom: var(--spacing-x4);
    padding-right: var(--spacing);
    ${mediaWidth('max', 'lg')} {
      font-size: 80px;
      margin-bottom: var(--spacing-x3);
    }
    ${mediaWidth('max', 'md')} {
      font-size: 70px;
      margin-bottom: var(--spacing-x2);
      max-width: 75%;
    }
    ${mediaWidth('max', 'sm')} {
      font-size: 60px;
      .br {
        display: none;
      }
    }
    ${mediaWidth('max', 'xs')} {
      font-size: 50px;
    }
    ${mediaWidth('max', 'xxs')} {
      font-size: 40px;
      max-width: 90%;
    }
  `,

  Subtitle: styled.p`
    margin-bottom: calc(var(--spacing-x3) * 2);
    font-size: 20px;
    ${mediaWidth('max', 'lg')} {
      font-size: var(--font-size-medium);
      margin-bottom: calc(var(--spacing-x3) * 1.5);
    }
    ${mediaWidth('max', 'md')} {
      font-size: var(--font-size-normal);
      margin-bottom: var(--spacing-x4);
      max-width: 75%;
    }
  `,

  Buttons: styled.div`
    display: flex;
    gap: var(--spacing-x3);
    margin-bottom: calc(var(--spacing-x4) * 2);
    ${mediaWidth('max', 'xxs')} {
      flex-direction: column;
      gap: var(--spacing);
      min-width: 100%;
    }
  `,

  JoinUsBtn: styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-accent);
    color: var(--color-black);
    min-height: 60px;
    min-width: 240px;
    border-radius: 100px;
    cursor: pointer;
    font-size: var(--font-size-medium);
    &:hover {
      color: var(--color-black);
    }
    ${mediaWidth('max', 'md')} {
      min-height: 50px;
      min-width: 200px;
      font-size: var(--font-size-normal);
    }
    ${mediaWidth('max', 'xs')} {
      min-width: 180px;
    }
    ${mediaWidth('max', 'xxs')} {
      min-width: 100%;
    }
  `,

  SuppBtn: styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-white);
    color: var(--color-black);
    min-height: 60px;
    min-width: 240px;
    border-radius: 100px;
    cursor: pointer;
    font-size: var(--font-size-medium);
    gap: var(--spacing);
    &:hover {
      color: var(--color-black);
    }
    .icon {
      height: 16px;
      width: 14px;
    }
    ${mediaWidth('max', 'md')} {
      min-height: 50px;
      min-width: 200px;
      font-size: var(--font-size-normal);
    }
    ${mediaWidth('max', 'xs')} {
      min-width: 180px;
    }
    ${mediaWidth('max', 'xxs')} {
      min-width: 100%;
    }
  `,

  Contacts: styled.div`
    display: flex;
    gap: var(--spacing-x4);
    justify-content: flex-end;
    width: 100%;
    ${mediaWidth('max', 'md')} {
      font-size: var(--font-size-small);
    }
    ${mediaWidth('max', 'sm')} {
      font-size: var(--font-size-thin);
    }
    ${mediaWidth('max', 'xs')} {
      gap: var(--spacing);
      flex-direction: column;
    }
  `,
  ContactLink: styled.a`
    display: flex;
    align-items: flex-end;
    gap: var(--spacing);

    .icon {
      height: 1.25rem;
      width: 1.25rem;
      margin-right: var(--spacing);

      ${mediaWidth('max', 'md')} {
        height: 1.2rem;
        width: 1.2rem;
      }
      ${mediaWidth('max', 'sm')} {
        height: 1.1rem;
        width: 1.1rem;
      }
      ${mediaWidth('max', 'xxs')} {
        height: 1rem;
        width: 1rem;
        margin-right: 5px;
      }
    }
  `,
};
