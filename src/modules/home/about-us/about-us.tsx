import Icons from '@/shared/assets/icons';
import { SC } from './about-us.styles';
import useTranslation from 'next-translate/useTranslation';
import { Label } from '@/shared/components/label/label';

function AboutUs() {
  const { t } = useTranslation('about-us');

  return (
    <SC.Section>
      <SC.Content>
        <SC.Div1>
          <SC.Background1>
            <SC.Logo src="/img/logo2.png" />
            <SC.Background1Item>
              <SC.Goals>220 цілей</SC.Goals>
              <SC.Destroyed>знищено</SC.Destroyed>
            </SC.Background1Item>
          </SC.Background1>
          <SC.Background2 />
          <SC.Background3 />
        </SC.Div1>
        <SC.Div2>
          <Label>{t('aboutUS')}</Label>
          <SC.Title>{t('title')}</SC.Title>
          <SC.AboutText>{t('aboutUsText')}</SC.AboutText>
          <SC.AboutText>{t('aboutDroneText')}</SC.AboutText>
        </SC.Div2>
      </SC.Content>
    </SC.Section>
  );
}

export default AboutUs;
