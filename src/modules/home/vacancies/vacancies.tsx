import { Label } from '@/shared/assets/styles/layout';
import useTranslation from 'next-translate/useTranslation';
import { SC } from './vacancies.styles';
import VacancyCard from '@/shared/vacancies-card';
import { vacanciesArray } from '@/shared/vacancies-card/vacancies.mock';

function Vacancies() {
  const { t } = useTranslation('vacancies');

  return (
    <SC.Section>
      <SC.Content>
        <SC.TitleBlock>
          <Label>{t('label')}</Label>
          <SC.Title>{t('title')}</SC.Title>
        </SC.TitleBlock>
        <SC.Scrollbar>
          <SC.Vacancies>
            {vacanciesArray.map((vacancy) => (
              <SC.CardWrapper key={vacancy.id}>
                <VacancyCard vacancy={vacancy} />
              </SC.CardWrapper>
            ))}
          </SC.Vacancies>
        </SC.Scrollbar>
        <SC.PullHere>{t('pullHere')}</SC.PullHere>
      </SC.Content>
    </SC.Section>
  );
}

export default Vacancies;
