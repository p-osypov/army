import { SC } from './analytics.styles';
import useTranslation from 'next-translate/useTranslation';
import { Label } from '@/shared/components/label/label';
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
        <SC.BlockContainer>
          {analyticsArray.map((member) => (
            <SC.DestroyedEquipBlock key={member.id}>
              <SC.NumDestroyed>{member.num}</SC.NumDestroyed>
              <SC.InfoBlock>
                <SC.BlockTitle>{member.title}</SC.BlockTitle>
                <SC.AnalyticsText>{member.text}</SC.AnalyticsText>
              </SC.InfoBlock>
            </SC.DestroyedEquipBlock>
          ))}
        </SC.BlockContainer>
      </SC.Content>
    </SC.Section>
  );
}

export default Analytics;
