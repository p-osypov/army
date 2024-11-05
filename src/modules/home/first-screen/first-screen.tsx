import Icons from '@/shared/assets/icons';
import { SC } from './first-screen.styles';

function FirstScreen() {
  return (
    <SC.Section>
      <SC.Content>
        <SC.UnitName>103 ОБР ТРО Чорний стриж</SC.UnitName>
        <SC.Title>
          Кожен хід армії <br /> Сила в кожній місії
        </SC.Title>
        <SC.Subtitle>
          Після повномасштабного вторгнення ми мобілізували свої зусилля.
        </SC.Subtitle>
        <SC.Button>Приєднатися до нас</SC.Button>
        <SC.Contacts>
          <SC.ContactLink href="tel:(209) 555-0104">
            <Icons.PhoneNum style={{ marginRight: '10px' }} />
            (209) 555-0104
          </SC.ContactLink>
          <SC.ContactLink href="mailto:debbie.baker@example.com">
            <Icons.Email style={{ marginRight: '10px' }} />
            debbie.baker@example.com
          </SC.ContactLink>
        </SC.Contacts>
      </SC.Content>
    </SC.Section>
  );
}

export default FirstScreen;
