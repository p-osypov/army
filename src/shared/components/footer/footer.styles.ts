import { Container } from '@/shared/assets/styles/layout';
import { mediaWidth } from '@/shared/assets/styles/mixins';
import styled from 'styled-components';

export const SC = {
  Footer: styled.footer`
    color: var(--color-white);
    padding-top: var(--spacing-x2);
  `,

  Container: styled(Container)`
    display: flex;
    flex-direction: column;
  `,

  Content: styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    margin-bottom: 100px;
    gap: var(--spacing-x3);
    flex-wrap: wrap;
    ${mediaWidth('max', 'md')} {
      margin-bottom: 70px;
    }
    ${mediaWidth('max', 'sm')} {
      justify-content: space-between;
    }
  `,

  About: styled.div`
    max-width: 380px;
    min-width: 380px;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-x2);
    flex: 1;

    ${mediaWidth('max', 'lg')} {
      max-width: 280px;
      min-width: 280px;
    }
  `,

  TitleLogo: styled.div`
    display: flex;
    align-items: center;
    gap: var(--spacing);
  `,

  Logo: styled.img`
    display: block;
  `,

  Title: styled.span`
    font-weight: var(--font-weight-bold);
    font-size: 22px;
  `,

  TextAboutDrone: styled.span`
    line-height: 1.5;
  `,

  Contacts: styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-x3);
    flex: 1;
    min-width: 220px;
    max-width: 220px;
  `,

  FooterTitle: styled.span`
    font-size: 24px;
    padding: var(--spacing) 0;
    font-weight: var(--font-weight-semi-bold);
  `,

  FooterContactLink: styled.a`
    display: flex;
    gap: var(--spacing-x2);

    .icon {
      height: var(--font-size-small);
      width: var(--font-size-small);
    }
  `,

  Info: styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-x3);
    flex: 1;
    min-width: 160px;
    max-width: 160px;
  `,

  InfoList: styled.nav`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-x3);
  `,

  SocialNetworks: styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-x3);
    flex: 1;
    min-width: 230px;
    max-width: 230px;
  `,

  FooterIcons: styled.div`
    display: flex;
    gap: var(--spacing-x2);
  `,

  SocialLink: styled.a`
    background-color: transparent;

    svg {
      width: 44px;
      height: 44px;
    }

    &:hover svg {
      transition: fill 0.3s ease;
    }

    &:hover svg[data-icon='youtube'] {
      fill: #ff0000;
    }

    &:hover svg[data-icon='facebook'] {
      fill: #1877f2;
    }

    &:hover svg[data-icon='instagram'] {
      fill: url(#instagramGradient);
    }
  `,

  FooterBottom: styled.div`
    display: flex;
    border-top: 1px solid #211f1f;
    justify-content: space-between;
    font-weight: var(--font-weight-medium);
    padding: var(--spacing-x3) 0;
    color: var(--color-gray);
    gap: var(--spacing-x3);
    flex-wrap: wrap;
  `,

  FooterBottomLinks: styled.div`
    display: flex;
    gap: var(--spacing-x3);
  `,
};
