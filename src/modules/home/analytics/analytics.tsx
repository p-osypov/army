import { SC } from './analytics.styles';
import useTranslation from 'next-translate/useTranslation';
import { Label } from '@/shared/assets/styles/layout';
import { analyticsArray } from './analytics.data';

function Analytics() {
  const { t } = useTranslation('analytics');

  return (
    <SC.Section>
      <SC.Content>
        <SC.AnalyticsBlock>
          <Label>{t('affectedForces')}</Label>
          <SC.Title>{t('title')}</SC.Title>
        </SC.AnalyticsBlock>
        <SC.CardsContainer>
          {analyticsArray.map((member) => (
            <SC.CardContainer key={member.id}>
              <SC.InfoBlock>
                <SC.NumDestroyed>{member.num}</SC.NumDestroyed>
                <SC.BlockTitle>{member.title}</SC.BlockTitle>
                <SC.AnalyticsText>{member.text}</SC.AnalyticsText>
              </SC.InfoBlock>
            </SC.CardContainer>
          ))}
        </SC.CardsContainer>
      </SC.Content>
    </SC.Section>
  );
}

export default Analytics;
