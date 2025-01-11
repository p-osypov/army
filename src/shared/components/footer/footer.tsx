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
  const currentYear = new Date().getFullYear();

  return (
    <SC.Footer>
      <SC.Container>
        <SC.Content>
          <SC.About>
            <SC.TitleLogo href={'/'}>
              <SC.Logo src="/img/logo.png" />
              <SC.Title>{t('name')}</SC.Title>
            </SC.TitleLogo>
            <SC.TextAboutDrone>{t('text')}</SC.TextAboutDrone>
          </SC.About>
          <SC.Contacts>
            <SC.FooterTitle>{t('contacts')}</SC.FooterTitle>
            <SC.FooterContactLink href={`mailto:${contacts.email}`}>
              <Icons.Email className="icon" />
              {contacts.footerEmail}
            </SC.FooterContactLink>
            <SC.FooterContactLink href={`tel:${contacts.tel}`}>
              <Icons.PhoneNum className="icon" />
              {contacts.footerTel}
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
              <SC.SocialLink href={contacts.facebookLink}>
                <Icons.Facebook />
              </SC.SocialLink>
              <SC.SocialLink href={contacts.instagramLink}>
                <Icons.Instagram />
              </SC.SocialLink>
              <SC.SocialLink href={contacts.youtubeLink}>
                <Icons.Youtube />
              </SC.SocialLink>
            </SC.FooterIcons>
          </SC.SocialNetworks>
        </SC.Content>
        <SC.FooterBottom>
          <span>
            © {t('name')} {currentYear} | {t('allRights')}
          </span>
          <SC.FooterBottomLinks>
            <Link href={'/'}>{t('tramsAndCondition')}</Link>
            <Link href={'/'}>{t('privacyPolicy')}</Link>
            <Link href={'/'}>{t('contactUs')}</Link>
          </SC.FooterBottomLinks>
        </SC.FooterBottom>
      </SC.Container>
    </SC.Footer>
  );
}

export default Footer;
