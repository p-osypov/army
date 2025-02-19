import { Label } from '@/shared/assets/styles/layout';
import SliderArrows from '@/shared/components/slider/slider-arrows';
import useTranslation from 'next-translate/useTranslation';
import { useRef } from 'react';
import Slider from 'react-slick';
import { SC } from './team.styles';
import { teamArray, teamSliderSettings } from './team.data';
import { ROUTER } from '@/shared/constants';

function Team() {
  const { t } = useTranslation('team');

  const sliderRef = useRef<Slider>(null);
  const previous = () => {
    sliderRef.current?.slickPrev();
  };
  const next = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <SC.Section>
      <SC.Content>
        <SliderArrows previous={previous} next={next} />
        <SC.TitleBlock>
          <Label>{t('team')}</Label>
          <SC.Title>{t('title')}</SC.Title>
        </SC.TitleBlock>
        <SC.SliderContainer>
          <SC.Slider sliderRef={sliderRef} {...teamSliderSettings}>
            {teamArray.map((member) => (
              <SC.Card key={`slider-card-${member.name}`}>
                <SC.Image src={member.image} alt={member.name} />
                <SC.Name>{member.name}</SC.Name>
                <SC.MilitaryRank>{member.position}</SC.MilitaryRank>
              </SC.Card>
            ))}
          </SC.Slider>
        </SC.SliderContainer>
        <SC.JoinUsBtn href={ROUTER.VACANCIES}>{t('joinUsBtn')}</SC.JoinUsBtn>
      </SC.Content>
    </SC.Section>
  );
}

export default Team;
