import { Label } from '@/shared/assets/styles/layout';
import useTranslation from 'next-translate/useTranslation';
import { SC } from './vacancies.styles';
import { vacanciesArray } from './vacancies.data';
import Icons from '@/shared/assets/icons';
import { Scrollbar } from 'react-scrollbars-custom';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '@/shared/assets/styles/mixins';

function Vacancies() {
  const { t } = useTranslation('vacancies');
  const isDesktopOrLaptop = useMediaQuery({
    query: `(min-width: ${breakpoints.xs}px)`,
  });
  const isTabletOrMobile = useMediaQuery({
    query: `(min-width: ${breakpoints.xxs}px)`,
  });

  return (
    <SC.Section>
      <SC.Content>
        <SC.TitleBlock>
          <Label>{t('vacancies')}</Label>
          <SC.TitleText>{t('title')}</SC.TitleText>
        </SC.TitleBlock>
        <Scrollbar
          style={{
            width: '100%',
            height: isDesktopOrLaptop
              ? '440px'
              : isTabletOrMobile
                ? '330px'
                : '220px',
          }}
        >
          <SC.Vacancies>
            {vacanciesArray.map((vacancy) => (
              <SC.Card key={vacancy.id}>
                <SC.Image src={vacancy.image} />
                <SC.InfoBlock>
                  <SC.InfoBlockItem>
                    <SC.MilitaryRank>{vacancy.militaryRank}</SC.MilitaryRank>
                    <SC.BlockText>{vacancy.text}</SC.BlockText>
                    <SC.LearnMoreBtn href={vacancy.url}>
                      {vacancy.learnMore} <Icons.ArrowRight className="icon" />
                    </SC.LearnMoreBtn>
                  </SC.InfoBlockItem>
                </SC.InfoBlock>
              </SC.Card>
            ))}
          </SC.Vacancies>
        </Scrollbar>
        <SC.PullHere>{t('pullHere')}</SC.PullHere>
      </SC.Content>
    </SC.Section>
  );
}

export default Vacancies;
