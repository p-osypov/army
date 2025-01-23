import dynamic from 'next/dynamic';
import { Label, Title } from '@/shared/assets/styles/layout';
import useTranslation from 'next-translate/useTranslation';
import { mediaArray, mediaSliderSettings } from './media.data';
import { SC } from './media.styles';
import { useState } from 'react';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

function Media() {
  const { t } = useTranslation('media');
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handlePause = () => {
    setPlayingIndex(null);
  };

  return (
    <SC.Section>
      <SC.Content>
        <SC.MediaBlock>
          <Label>{t('media')}</Label>
          <Title.Span>{t('title')}</Title.Span>
          <SC.MediaText>{t('text')}</SC.MediaText>
        </SC.MediaBlock>
        <SC.Slider {...mediaSliderSettings}>
          {mediaArray.map((item, index) => (
            <SC.VideoWrapper key={`slider-card-${item.src}`}>
              <ReactPlayer
                url={item.src}
                playing={playingIndex === index}
                onPlay={() => setPlayingIndex(index)}
                onPause={handlePause}
                style={{ border: '5px solid var(--color-accent)' }}
                width="100%"
                height="250px"
                controls
              />
            </SC.VideoWrapper>
          ))}
        </SC.Slider>
      </SC.Content>
    </SC.Section>
  );
}

export default Media;
