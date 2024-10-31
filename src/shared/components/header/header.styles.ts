import Icons from '@/shared/assets/icons';
import styled from 'styled-components';

export const SC = {
  Header: styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    z-index: var(--z-index-header);
    color: var(--color-white);
  `,

  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--max-width);
    border: 1px solid #fafafa33;
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px;
    margin: 0 auto;
    padding: 22px 38px;
    backdrop-filter: blur(20px);
    gap: var(--spacing-x2);
  `,

  TitleLogo: styled.div`
    display: flex;
    align-items: center;
    min-width: 240px;
  `,

  Logo: styled.img`
    display: block;
  `,

  Title: styled.span`
    font-weight: var(--font-weight-bold);
  `,
  Navigation: styled.nav`
    display: flex;
    gap: var(--spacing-x3);
    flex: 1;
    justify-content: center;
  `,

  LanguageSelector: styled.div`
    position: relative;
  `,
  Language: styled.button`
    display: flex;
    align-items: center;
    gap: var(--spacing);
    background: transparent;
    margin-right: var(--spacing);
  `,
  LangIcon: styled.img`
    width: 24px;
    height: 18px;
  `,
  LangText: styled.span`
    font-weight: var(--font-weight-semi-bold);
    color: var(--color-white);
  `,
  ChevronDown: styled(Icons.ChevronDown)<{ $isLanguageMenuOpen: boolean }>`
    font-weight: 900;
    transform: ${({ $isLanguageMenuOpen }) =>
      $isLanguageMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform 0.3s ease;
  `,

  LanguageList: styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: absolute;
    top: calc(100% + 5px);
  `,

  SuppButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--spacing-x3) var(--spacing-x4);
    border-radius: 100px;
    min-width: 174px;
    gap: var(--spacing);
    font-size: var(--spacing-x2);
  `,
};
