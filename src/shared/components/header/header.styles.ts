import Icons from '@/shared/assets/icons';
import { mediaWidth } from '@/shared/assets/styles/mixins';
import Link from 'next/link';
import styled from 'styled-components';

export const HEADER_HEIGHT = 106;
export const SC = {
  Header: styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
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
    ${mediaWidth('max', 'md')} {
      padding: 18px 34px;
    }
    ${mediaWidth('max', 'sm')} {
      padding: 12px 28px;
    }
    ${mediaWidth('max', 'xxs')} {
      gap: var(--spacing);
    }
  `,

  TitleLogo: styled(Link)`
    display: flex;
    align-items: center;
    gap: var(--spacing);
    ${mediaWidth('max', 'lg')} {
      max-width: 180px;
    }
  `,

  Logo: styled.img`
    display: block;
    width: 60px;
    height: 60px;
  `,

  Title: styled.span`
    font-weight: var(--font-weight-bold);
    font-size: calc(var(--font-size-normal) * 1.375);
    ${mediaWidth('max', 'md')} {
      display: none;
    }
  `,

  Navigation: styled.nav`
    display: flex;
    align-items: center;
    gap: var(--spacing-x3);
    flex: 1;
    justify-content: center;
    text-align: center;
    ${mediaWidth('max', 'sm')} {
      display: none;
    }
  `,

  BurgerButton: styled.button`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    ${mediaWidth('max', 'sm')} {
      display: flex;
      align-items: center;
    }
  `,

  MobileNavigation: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-x4);
    width: 100%;
    height: 100vh;
    background-color: var(--color-black);
    color: var(--color-white);
    padding-top: 200px;
    z-index: calc(var(--z-index-header) - 1);
  `,

  MenuIcon: styled.img`
    width: 32px;
    height: 32px;
  `,

  LanguageSelector: styled.div<{ $isMenuOpen: boolean }>`
    position: relative;
    ${mediaWidth('max', 'sm')} {
      display: ${({ $isMenuOpen }) => ($isMenuOpen ? 'none' : 'flex')};
      margin-left: auto;
    }
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
    ${mediaWidth('max', 'md')} {
      display: none;
    }
  `,
  ChevronDown: styled(Icons.ChevronDown)<{ $isLanguageMenuOpen: boolean }>`
    height: 10px;
    width: 8px;
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

  SuppButton: styled(Link)<{ $isMenuOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: calc(var(--spacing) * 2.5) var(--spacing-x4);
    border-radius: 100px;
    gap: var(--spacing);
    min-width: 174px;
    background-color: var(--color-white);
    color: var(--color-black);

    &:hover {
      color: var(--color-black);
    }

    .icon {
      height: 16px;
      width: 14px;
    }
    ${mediaWidth('max', 'md')} {
      padding: var(--spacing-x2) var(--spacing-x3);
    }
    ${mediaWidth('max', 'sm')} {
      display: ${({ $isMenuOpen }) => ($isMenuOpen ? 'flex' : 'none')};
      margin-left: auto;
    }
    ${mediaWidth('max', 'xxs')} {
      padding: calc(var(--spacing) * 1.5) var(--spacing);
      min-width: 130px;
    }
  `,
};
