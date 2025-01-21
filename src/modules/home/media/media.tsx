import { Label, Title } from '@/shared/assets/styles/layout';
import useTranslation from 'next-translate/useTranslation';
import { mediaArray, mediaSliderSettings } from './media.data';
import { SC } from './media.styles';

function Media() {
  const { t } = useTranslation('media');

  return (
    <SC.Section>
      <SC.Content>
        <SC.MediaBlock>
          <Label>{t('media')}</Label>
          <Title.Span>{t('title')}</Title.Span>
          <SC.MediaText>{t('text')}</SC.MediaText>
        </SC.MediaBlock>
        <SC.Slider {...mediaSliderSettings}>
          {mediaArray.map((item) => (
            <SC.VideoWrapper key={`slider-card-${item.src}`}>
              <SC.Video
                src={item.src}
                title={`YouTube video ${item.src}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </SC.VideoWrapper>
          ))}
        </SC.Slider>
      </SC.Content>
    </SC.Section>
  );
}

export default Media;
