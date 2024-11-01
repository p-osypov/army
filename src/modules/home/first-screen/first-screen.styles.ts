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
    // переробити на 2 div
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
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
    font-weight: var(--font-weight-semi-bold);
  `,

  Subtitle: styled.p`
    margin-bottom: var(--spacing-x4);
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
    margin-bottom: calc(var(--spacing) * 8);
  `,

  Contacts: styled.div`
    display: flex;
    align-self: flex-end;
    gap: var(--spacing-x4);
    align-items: center;
  `,
  ContactLink: styled.a``,
};
