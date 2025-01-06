import { SC } from './statistics.styles';
import useTranslation from 'next-translate/useTranslation';
import { Label } from '@/shared/assets/styles/layout';
import { analyticsArray } from './statistics.data';

function Statistics() {
  const { t } = useTranslation('statistics');

  return (
    <SC.Section>
      <SC.Content>
        <SC.AnalyticsBlock>
          <Label>{t('affectedForces')}</Label>
          <SC.Title>{t('title')}</SC.Title>
        </SC.AnalyticsBlock>
        <SC.CardsContainer>
          {analyticsArray.map((member, index) => (
            <SC.CardWrapper key={member.id}>
              {index < 3 && (
                <SC.Labels className="labels">
                  <SC.HeaderItem $firstElement>{t('goals')}</SC.HeaderItem>
                  <SC.HeaderItem>{t('impressed')}</SC.HeaderItem>
                  <SC.HeaderItem>{t('destroyed')}</SC.HeaderItem>
                </SC.Labels>
              )}
              <SC.CardContainer>
                <SC.MilitaryEquipment>
                  {member.militaryEquipment}
                </SC.MilitaryEquipment>
                <SC.NumImpressed $lowOpacity>
                  {member.impressed}
                </SC.NumImpressed>
                <SC.NumImpressed>{member.destroyed}</SC.NumImpressed>
              </SC.CardContainer>
            </SC.CardWrapper>
          ))}
        </SC.CardsContainer>
        <SC.MoreStatisticsBtn href={'/'}>
          {t('moreStatistics')}
        </SC.MoreStatisticsBtn>
      </SC.Content>
    </SC.Section>
  );
}

export default Statistics;
