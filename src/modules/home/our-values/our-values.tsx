import { SC } from './our-values.styles';
import useTranslation from 'next-translate/useTranslation';
import { Label } from '@/shared/assets/styles/layout';
import { ourValuesArray, SliderSettings } from './our-values.data';

function OurValues() {
  const { t } = useTranslation('our-values');

  return (
    <SC.Section>
      <SC.Content>
        <SC.ValueBlock>
          <Label>{t('ourValues')}</Label>
          <SC.Title>{t('title')}</SC.Title>
          <SC.ValueText>{t('text')}</SC.ValueText>
        </SC.ValueBlock>
        <SC.Slider {...SliderSettings}>
          {ourValuesArray.map((item) => (
            <SC.CardWrapper key={`slider-card-${item.title}`}>
              <SC.Card>
                <SC.BlockTitle>{item.title}</SC.BlockTitle>
                <SC.ValueText>{item.text}</SC.ValueText>
              </SC.Card>
            </SC.CardWrapper>
          ))}
        </SC.Slider>
      </SC.Content>
    </SC.Section>
  );
}

export default OurValues;
