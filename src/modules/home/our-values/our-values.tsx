import { Label, Title } from '@/shared/assets/styles/layout';
import useTranslation from 'next-translate/useTranslation';
import { ourValuesArray, SliderSettings } from './our-values.data';
import { SC } from './our-values.styles';

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
