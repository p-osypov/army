import Icons from '@/shared/assets/icons';
import { SC } from './first-screen.styles';
import useTranslation from 'next-translate/useTranslation';
import { contacts } from '@/shared/config';
import { ROUTER } from '@/shared/constants';

function FirstScreen() {
  const { t } = useTranslation('first-screen');

  return (
    <SC.Section>
      <SC.Content>
        <SC.CloudImage src="/img/cloud.png" />
        <SC.UnitName>{t('unitName')}</SC.UnitName>
        <SC.Title>
          {t('title')} <br className="br" />
          {t('title2')}
        </SC.Title>
        <SC.Subtitle>{t('subtitle')}</SC.Subtitle>
        <SC.Buttons>
          <SC.JoinUsBtn href={ROUTER.VACANCIES}>{t('joinUsBtn')}</SC.JoinUsBtn>
          <SC.SuppBtn href={ROUTER.DONATIONS}>
            {t('suppBtn')} <Icons.ArrowRight className="icon" />
          </SC.SuppBtn>
        </SC.Buttons>
        <SC.Contacts>
          <SC.ContactLink href="tel:{contacts.tel}">
            <Icons.PhoneNum className="icon" />
            {contacts.tel}
          </SC.ContactLink>
          <SC.ContactLink href="mailto:{contacts.email}">
            <Icons.Email className="icon" />
            {contacts.email}
          </SC.ContactLink>
        </SC.Contacts>
      </SC.Content>
    </SC.Section>
  );
}

export default FirstScreen;
