import Icons from '@/shared/assets/icons';
import { mediaWidth } from '@/shared/assets/styles/mixins';
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
  `,

  TitleLogo: styled.div`
    display: flex;
    align-items: center;
    gap: var(--spacing);
    ${mediaWidth('max', 'lg')} {
      max-width: 180px;
    }
  `,

  Logo: styled.img`
    display: block;
  `,

  Title: styled.span`
    font-weight: var(--font-weight-bold);
    ${mediaWidth('max', 'md')} {
      display: none;
    }
  `,

  Navigation: styled.nav`
    display: flex;
    gap: var(--spacing-x3);
    flex: 1;
    justify-content: center;
    ${mediaWidth('max', 'sm')} {
      display: none;
    }
  `,

  LanguageSelector: styled.div`
    position: relative;
    ${mediaWidth('max', 'sm')} {
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

  SuppButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px var(--spacing-x4);
    border-radius: 100px;
    gap: var(--spacing);
    font-size: var(--spacing-x2);

    .icon {
      height: 16px;
      width: 14px;
    }
    ${mediaWidth('max', 'md')} {
      padding: 18px var(--spacing-x3);
    }
    ${mediaWidth('max', 'sm')} {
      padding: var(--spacing-x2) var(--spacing-x2);
    }
    ${mediaWidth('max', 'xxs')} {
      display: none;
    }
  `,
};
