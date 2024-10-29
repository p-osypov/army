import i18nConfig from '@/../i18n.json';
import { SC } from '@/shared/components/header/header.styles';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useState } from 'react';

const menuItems = [
  { id: 1, href: '/', text: 'home' },
  { id: 2, href: '/donations', text: 'donations' },
  { id: 3, href: '/vacancies', text: 'vacancies' },
];

function Header() {
  const { t, lang } = useTranslation('header');

  const router = useRouter();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleLanguageMenu = () => setIsLanguageMenuOpen((prev) => !prev);

  const changeLanguage = (selectedLang: string) => {
    if (selectedLang !== lang) {
      setIsLanguageMenuOpen(false);
      router.push(router.pathname, router.asPath, { locale: selectedLang });
    }
  };

  return (
    <SC.Header>
      <SC.Container>
        <SC.TitleLogo>
          <SC.Logo src="/img/logo.png" />
          <SC.Title>{t('name')}</SC.Title>
        </SC.TitleLogo>
        <SC.Navigation>
          {menuItems.map((item) => (
            <SC.NavigationListItem href={item.href} key={item.id}>
              {t(item.text)}
            </SC.NavigationListItem>
          ))}
        </SC.Navigation>
        <SC.LanguageSelector>
          <SC.Language onClick={toggleLanguageMenu}>
            <SC.LangIcon src={`/img/${lang}.svg`} />
            <SC.LangText>{lang.toUpperCase()}</SC.LangText>
            <SC.ChevronDown
              style={{
                transform: isLanguageMenuOpen
                  ? 'rotate(180deg)'
                  : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
              }}
            />
          </SC.Language>
          {isLanguageMenuOpen && (
            <SC.LanguageList>
              {i18nConfig.locales
                .filter((locale) => locale !== lang)
                .map((locale) => (
                  <SC.Language
                    key={locale}
                    onClick={() => changeLanguage(locale)}
                  >
                    <SC.LangIcon src={`/img/${locale}.svg`} />
                    <SC.LangText>{locale.toUpperCase()}</SC.LangText>
                  </SC.Language>
                ))}
            </SC.LanguageList>
          )}
        </SC.LanguageSelector>
        <SC.SuppButton>
          <SC.Supp>{t('support')}</SC.Supp>
          <SC.IconArrowRight />
        </SC.SuppButton>
      </SC.Container>
    </SC.Header>
  );
}
export default Header;
