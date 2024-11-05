import { Container } from '@/shared/assets/styles/layout';
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
    justify-content: center;
    padding-bottom: var(--spacing-x4);
    min-height: 100vh;
    padding-top: calc(106px + var(--spacing-x2));
  `,

  UnitName: styled.span`
    display: block;
    border: 1px solid #41534640;
    background: #41534633;
    border-radius: 20px;
    color: #979897;
    padding: var(--spacing) var(--spacing-x2);
    font-size: 12px;
    letter-spacing: 3px;
    margin-bottom: var(--spacing-x3);
  `,

  Title: styled.h1`
    font-size: 90px;
    margin-bottom: var(--spacing-x4);
    font-weight: var(--font-weight-medium);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.2)
    );
    background-clip: text;
    color: transparent;
    padding-right: var(--spacing);
  `,

  Subtitle: styled.p`
    margin-bottom: calc(var(--spacing-x3) * 2);
    font-size: 20px;
  `,

  Button: styled.button`
    display: flex;
    gap: 10px;
    background: #415346;
    padding: 20px 40px;
    border-radius: 100px;
    cursor: pointer;
    font-size: 18px;
    color: var(--color-white);
    margin-bottom: calc(var(--spacing-x4) * 3);
  `,

  Contacts: styled.div`
    display: flex;
    gap: var(--spacing-x4);
    justify-content: flex-end;
    width: 100%;
  `,
  ContactLink: styled.a`
    display: flex;
    align-items: flex-end;
    gap: var(--spacing);

    .icon {
      height: 1.25rem;
      width: 1.25rem;
    }
  `,
};
