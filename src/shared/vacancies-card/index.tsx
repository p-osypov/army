import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Icons from '../assets/icons';
import { SC } from './vacancies-card.styles';

interface Vacancy {
  id: string;
  image: string;
  militaryRank: string;
  text: string;
  url: string;
}

interface VacancyCardProps {
  vacancy: Vacancy;
}

const VacancyCard: React.FC<VacancyCardProps> = ({ vacancy }) => {
  const { t } = useTranslation('vacancies');

  return (
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
  );
};

export default VacancyCard;
