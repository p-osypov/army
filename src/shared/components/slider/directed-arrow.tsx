import { SC } from './slider.styles';

export type DirectedArrowProps = {
  direction: 'right' | 'left';
  onClick?: () => void;
  className?: string;
};

function DirectedArrow({ direction, onClick, ...props }: DirectedArrowProps) {
  return <SC.Arrow onClick={onClick} $direction={direction} {...props} />;
}

export default DirectedArrow;
