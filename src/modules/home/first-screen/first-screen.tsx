import Icons from '@/shared/assets/icons';
import { SC } from './first-screen.styles';
import useTranslation from 'next-translate/useTranslation';
import { contacts } from '@/shared/config';

function FirstScreen() {
  const { t } = useTranslation('first-screen');

  return (
    <SC.Section>
      <SC.Content>
        <SC.UnitName>{t('unitName')}</SC.UnitName>
        <SC.Title>
          {t('title')} <br />
          {t('title2')}
        </SC.Title>
        <SC.Subtitle>{t('subtitle')}</SC.Subtitle>
        <SC.JoinUsBtn>{t('joinUsBtn')}</SC.JoinUsBtn>
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
