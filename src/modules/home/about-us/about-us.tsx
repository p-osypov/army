import { Label } from '@/shared/assets/styles/layout';
import useTranslation from 'next-translate/useTranslation';
import { SC } from './about-us.styles';

function AboutUs() {
  const { t } = useTranslation('about-us');

  return (
    <SC.Section>
      <SC.Content>
        <SC.ImgColumn>
          <SC.InfoBlock>
            <SC.Logo src="/img/logo.png" />
            <SC.InfoBlockItem>
              <SC.Goals>220 {t('goals')}</SC.Goals>
              <SC.Destroyed>{t('destroyed')}</SC.Destroyed>
            </SC.InfoBlockItem>
          </SC.InfoBlock>
          <SC.Image src="/img/about-us-image.png" />
          <SC.Image2 src="/img/about-us-image2.png" />
        </SC.ImgColumn>
        <SC.TextColumn>
          <Label>{t('aboutUS')}</Label>
          <SC.Title>{t('title')}</SC.Title>
          <SC.AboutText>{t('aboutUsText')}</SC.AboutText>
          <SC.AboutText>{t('aboutDroneText')}</SC.AboutText>
        </SC.TextColumn>
      </SC.Content>
    </SC.Section>
  );
}

export default AboutUs;
