import { Label } from '@/shared/components/label/label';
import useTranslation from 'next-translate/useTranslation';
import { SC } from './about-us.styles';

function AboutUs() {
  const { t } = useTranslation('about-us');

  return (
    <SC.Section>
      <SC.Content>
        <SC.ImgColumn>
          <SC.InfoBlock>
            <SC.Logo src="/img/logo2.png" />
            <SC.InfoBlockItem>
              <SC.Goals>220 цілей</SC.Goals>
              <SC.Destroyed>знищено</SC.Destroyed>
            </SC.InfoBlockItem>
          </SC.InfoBlock>
          <SC.ImgBlock />
          <SC.ImgBlock2 />
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