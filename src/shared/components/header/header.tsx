import i18nConfig from '@/../i18n.json';
import Icons from '@/shared/assets/icons';
import { SC } from '@/shared/components/header/header.styles';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import { ROUTER } from '@/shared/constants';
import useClickOutside from '@/shared/hooks/click-outside';

const menuItems = [
  { href: ROUTER.HOME, tranKey: 'home' },
  { href: ROUTER.DONATIONS, tranKey: 'donations' },
  { href: ROUTER.VACANCIES, tranKey: 'vacancies' },
];

function Header() {
  const { t, lang } = useTranslation('header');
  const router = useRouter();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const lngListToRender = i18nConfig.locales.filter(
    (locale) => locale !== lang,
  );

  const toggleLanguageMenu = () => setIsLanguageMenuOpen((prev) => !prev);
  const toggleMobileMenu = () => setIsMenuOpen((prev) => !prev);
  const changeLanguage = (selectedLang: string) => {
    if (selectedLang !== lang) {
      setIsLanguageMenuOpen(false);
      router.push(router.pathname, router.asPath, { locale: selectedLang });
    }
  };

  const dropdownLanguageRef = useClickOutside(() =>
    setIsLanguageMenuOpen(false),
  );

  return (
    <>
      <SC.Header>
        <SC.Container>
          <SC.TitleLogo href={'/'}>
            <SC.Logo src="/img/logo.png" />
            <SC.Title>{t('name')}</SC.Title>
          </SC.TitleLogo>
          <SC.Navigation>
            {menuItems.slice(1).map((item) => (
              <Link href={item.href} key={`nav-item-${item.tranKey}`}>
                {t(item.tranKey)}
              </Link>
            ))}
          </SC.Navigation>
          <SC.LanguageSelector
            $isMenuOpen={isMenuOpen}
            ref={dropdownLanguageRef}
          >
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
          <SC.SuppButton $isMenuOpen={isMenuOpen} href={ROUTER.DONATIONS}>
            {t('support')}
            <Icons.ArrowRight className="icon" />
          </SC.SuppButton>
          <SC.BurgerButton onClick={toggleMobileMenu}>
            {isMenuOpen ? (
              <SC.MenuIcon src={`/img/close-button.svg`} />
            ) : (
              <SC.MenuIcon src={`/img/burger-button.svg`} />
            )}
          </SC.BurgerButton>
        </SC.Container>
      </SC.Header>
      {isMenuOpen && (
        <SC.MobileNavigation>
          {menuItems.map((item) => (
            <Link
              href={item.href}
              key={`mobile-nav-${item.tranKey}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t(item.tranKey)}
            </Link>
          ))}
        </SC.MobileNavigation>
      )}
    </>
  );
}

export default Header;
