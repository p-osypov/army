import { Container } from '@/shared/assets/styles/layout';
import { mediaWidth } from '@/shared/assets/styles/mixins';
import { HEADER_HEIGHT } from '@/shared/components/header/header.styles';
import styled from 'styled-components';

export const SC = {
  Section: styled.section`
    background-image: url(/img/main-photo.png);
    background-repeat: no-repeat;
    background-position: center top;
    color: var(--color-white);
  `,

  Content: styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding-bottom: var(--spacing-x4);
    min-height: 100vh;
    padding-top: calc(${HEADER_HEIGHT}px + var(--spacing-x2));
  `,

  UnitName: styled.span`
    display: block;
    border: 1px solid rgba(65, 83, 70, 25%);
    background-color: rgba(65, 83, 70, 20%);
    border-radius: 20px;
    color: #979897;
    padding: var(--spacing) var(--spacing-x2);
    font-size: 12px;
    letter-spacing: 3px;
    margin-bottom: var(--spacing-x3);
    ${mediaWidth('max', 'md')} {
      font-size: 10px;
      letter-spacing: 2px;
    }
    ${mediaWidth('max', 'sm')} {
      font-size: 8px;
      letter-spacing: 1px;
    }
  `,

  Title: styled.h1`
    font-size: 90px;
    margin-bottom: var(--spacing-x4);
    font-weight: var(--font-weight-medium);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.2)
    );
    background-clip: text;
    color: transparent;
    padding-right: var(--spacing);
    padding-bottom: var(--spacing);
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
    }
  `,

  Subtitle: styled.p`
    margin-bottom: calc(var(--spacing-x3) * 2);
    font-size: 20px;
    ${mediaWidth('max', 'lg')} {
      font-size: 18px;
      margin-bottom: calc(var(--spacing-x3) * 1.5);
    }
    ${mediaWidth('max', 'md')} {
      font-size: 16px;
      margin-bottom: var(--spacing-x4);
    }
    ${mediaWidth('max', 'sm')} {
      font-size: 14px;
    }
    ${mediaWidth('max', 'sm')} {
      font-size: 12px;
    }
  `,

  JoinUsBtn: styled.button`
    display: flex;
    background-color: #415346;
    padding: 20px 40px;
    border-radius: 100px;
    cursor: pointer;
    font-size: var(--font-size-medium);
    color: var(--color-white);
    margin-bottom: calc(var(--spacing-x4) * 2);
    ${mediaWidth('max', 'lg')} {
      padding: 18px 34px;
    }
    ${mediaWidth('max', 'md')} {
      padding: 16px 28px;
      font-size: var(--font-size-normal);
    }
    ${mediaWidth('max', 'sm')} {
      padding: 14px 20px;
      font-size: var(--font-size-small);
    }
    ${mediaWidth('max', 'xs')} {
      padding: 12px 16px;
      font-size: var(--font-size-thin);
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
      font-size: var(--font-size-xs);
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
