import { Label } from '@/shared/assets/styles/layout';
import useTranslation from 'next-translate/useTranslation';
import { SC } from './vacancies.styles';
import { vacanciesArray } from './vacancies.data';
import Icons from '@/shared/assets/icons';

function Vacancies() {
  const { t } = useTranslation('vacancies');

  return (
    <SC.Section>
      <SC.Content>
        <SC.TitleBlock>
          <Label>{t('label')}</Label>
          <SC.Subtitle>{t('title')}</SC.Subtitle>
        </SC.TitleBlock>
        <SC.Scrollbar>
          <SC.Vacancies>
            {vacanciesArray.map((vacancy) => (
              <SC.Card key={vacancy.id}>
                <SC.Image src={vacancy.image} />
                <SC.InfoBlock>
                  <SC.InfoBlockItem>
                    <SC.MilitaryRank>{t(vacancy.militaryRank)}</SC.MilitaryRank>
                    <SC.BlockText>{t(vacancy.text)}</SC.BlockText>
                    <SC.LearnMoreBtn href={t(vacancy.url)}>
                      {t('learnMore')} <Icons.ArrowRight className="icon" />
                    </SC.LearnMoreBtn>
                  </SC.InfoBlockItem>
                </SC.InfoBlock>
              </SC.Card>
            ))}
          </SC.Vacancies>
        </SC.Scrollbar>
        <SC.PullHere>{t('pullHere')}</SC.PullHere>
      </SC.Content>
    </SC.Section>
  );
}

export default Vacancies;
