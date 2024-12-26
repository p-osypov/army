import { SC } from './our-values.styles';
import useTranslation from 'next-translate/useTranslation';
import { Label, Title } from '@/shared/assets/styles/layout';

function OurValues() {
  const { t } = useTranslation('our-values');

  return (
    <SC.Section>
      <SC.Content>
        <SC.ValueBlock>
          <Label>{t('ourValues')}</Label>
          <Title.Span>{t('title')}</Title.Span>
          <SC.ValueText>{t('text')}</SC.ValueText>
        </SC.ValueBlock>
        <SC.InfoBlock>
          <SC.Block>
            <SC.BlockTitle>{t('blockTitle1')}</SC.BlockTitle>
            <SC.ValueText>{t('blockText1')}</SC.ValueText>
          </SC.Block>
          <SC.Block>
            <SC.BlockTitle>{t('blockTitle2')}</SC.BlockTitle>
            <SC.ValueText>{t('blockText2')}</SC.ValueText>
          </SC.Block>
          <SC.Block>
            <SC.BlockTitle>{t('blockTitle3')}</SC.BlockTitle>
            <SC.ValueText>{t('blockText3')}</SC.ValueText>
          </SC.Block>
        </SC.InfoBlock>
      </SC.Content>
    </SC.Section>
  );
}

export default OurValues;
