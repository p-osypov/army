import i18nConfig from '@/../i18n.json';
import Icons from '@/shared/assets/icons';
import { SC } from '@/shared/components/header/header.styles';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useState } from 'react';

const menuItems = [
  { href: '/', tranKey: 'home' },
  { href: '/donations', tranKey: 'donations' },
  { href: '/vacancies', tranKey: 'vacancies' },
];

function Header() {
  const { t, lang } = useTranslation('header');

  const router = useRouter();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const lngListToRender = i18nConfig.locales.filter(
    (locale) => locale !== lang,
  );

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
            <SC.NavigationListItem
              href={item.href}
              key={`nav-item-${item.tranKey}`}
            >
              {t(item.tranKey)}
            </SC.NavigationListItem>
          ))}
        </SC.Navigation>
        <SC.LanguageSelector>
          <SC.Language onClick={toggleLanguageMenu}>
            <SC.LangIcon src={`/img/${lang}.svg`} />
            <SC.LangText>{lang.toUpperCase()}</SC.LangText>
            <SC.ChevronDown $isLanguageMenuOpen={isLanguageMenuOpen} />
          </SC.Language>
          {isLanguageMenuOpen && (
            <SC.LanguageList>
              {lngListToRender.map((locale) => (
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
          {t('support')}
          <Icons.ArrowRight />
        </SC.SuppButton>
      </SC.Container>
    </SC.Header>
  );
}
export default Header;
