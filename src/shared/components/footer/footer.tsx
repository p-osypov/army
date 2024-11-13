import React from 'react';
import { SC } from '@/shared/components/footer/footer.styles';
import useTranslation from 'next-translate/useTranslation';
import Icons from '@/shared/assets/icons';
import { contacts } from '@/shared/config';
import Link from 'next/link';

const infoItems = [
  { href: '/vacancies', tranKey: 'vacancies' },
  { href: '/donations', tranKey: 'donations' },
  { href: '/contacts', tranKey: 'contacts' },
];

function Footer() {
  const { t } = useTranslation('footer');

  return (
    <SC.Footer>
      <SC.Container>
        <SC.Content>
          <SC.About>
            <SC.TitleLogo>
              <SC.Logo src="/img/logo.png" />
              <SC.Title>{t('name')}</SC.Title>
            </SC.TitleLogo>
            <SC.TextAboutDrone>{t('text')}</SC.TextAboutDrone>
          </SC.About>
          <SC.Contacts>
            <SC.FooterTitle>{t('contacts')}</SC.FooterTitle>
            <SC.FooterContactLink href="tel:{contacts.footerTel}">
              <Icons.FooterPhoneNum className="icon" />
              {contacts.footerTel}
            </SC.FooterContactLink>
            <SC.FooterContactLink href="mailto:{contacts.footerEmail}">
              <Icons.FooterEmail className="icon" />
              {contacts.footerEmail}
            </SC.FooterContactLink>
          </SC.Contacts>
          <SC.Info>
            <SC.FooterTitle>{t('info')}</SC.FooterTitle>
            <SC.InfoList>
              {infoItems.map((item) => (
                <Link href={item.href} key={`nav-item-${item.tranKey}`}>
                  {t(item.tranKey)}
                </Link>
              ))}
            </SC.InfoList>
          </SC.Info>
          <SC.SocialNetworks>
            <SC.FooterTitle>{t('socialNetworks')}</SC.FooterTitle>
            <SC.FooterIcons>
              <SC.SocialLink
                href={'https://www.facebook.com/chornyi.stryzh/?_rdr'}
              >
                <Icons.Facebook />
              </SC.SocialLink>
              <SC.SocialLink href={'https://www.instagram.com/chornyi.stryzh/'}>
                <Icons.Instagram />
              </SC.SocialLink>
              <SC.SocialLink
                href={
                  'https://www.youtube.com/@%D0%A0%D0%A3%D0%91%D0%BF%D0%90%D0%9A%D0%A7%D0%BE%D1%80%D0%BD%D0%B8%D0%B9%D0%A1%D1%82%D1%80%D0%B8%D0%B6'
                }
              >
                <Icons.Youtube />
              </SC.SocialLink>
            </SC.FooterIcons>
          </SC.SocialNetworks>
        </SC.Content>
        <SC.FooterBottom>
          <span>© Yoursitename 2023 | All Rights Reserved</span>
          <SC.FooterBottomLinks>
            <Link href={'/'}>Trams & Condition</Link>
            <Link href={'/'}>Privacy Policy</Link>
            <Link href={'/'}>Contact Us</Link>
          </SC.FooterBottomLinks>
        </SC.FooterBottom>
      </SC.Container>
    </SC.Footer>
  );
}

export default Footer;
