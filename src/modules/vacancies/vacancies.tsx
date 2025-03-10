import { Label } from '@/shared/assets/styles/layout';
import useTranslation from 'next-translate/useTranslation';
import { SC } from './vacancies.styles';
import { vacanciesArray } from '@/shared/vacancies-card/vacancies.mock';
import VacancyCard from '@/shared/vacancies-card';

function Vacancies() {
  const { t } = useTranslation('vacancies');

  return (
    <SC.Section>
      <SC.Content>
        <SC.CloudImage src="/img/cloud.png" />
        <SC.TitleBlock>
          <Label>{t('label')}</Label>
          <SC.Title>{t('title')}</SC.Title>
          <SC.Subtitle>{t('subtitle')}</SC.Subtitle>
        </SC.TitleBlock>
        <SC.Vacancies>
          {vacanciesArray.map((vacancy) => (
            <SC.CardWrapper key={vacancy.id}>
              <VacancyCard vacancy={vacancy} />
            </SC.CardWrapper>
          ))}
        </SC.Vacancies>
      </SC.Content>
    </SC.Section>
  );
}

export default Vacancies;
