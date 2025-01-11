import DirectedArrow from './directed-arrow';
import { SC } from './slider.styles';

type Props = {
  className?: string;
  previous: () => void;
  next: () => void;
};

function SliderArrows({ className, previous, next }: Props) {
  return (
    <SC.SliderControls className={className}>
      <DirectedArrow direction="left" onClick={previous} />
      <DirectedArrow direction="right" onClick={next} />
    </SC.SliderControls>
  );
}

export default SliderArrows;
