import { Container } from '@/shared/assets/styles/layout';
import styled from 'styled-components';
import { DirectedArrowProps } from './directed-arrow';
import Icons from '@/shared/assets/icons';
import { mediaWidth } from '@/shared/assets/styles/mixins';

export const SC = {
  SliderControls: styled(Container)`
    position: absolute;
    top: 52%;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    width: 100%;
    ${mediaWidth('max', 'sm')} {
      top: 50%;
    }
  `,
  Arrow: styled(Icons.CardArrowRight)<{
    $direction: DirectedArrowProps['direction'];
  }>`
    position: absolute;
    width: 60px;
    height: 60px;
    left: ${({ $direction }) => ($direction === 'left' ? 0 : 'initial')};
    right: ${({ $direction }) => ($direction === 'right' ? 0 : 'initial')};
    transform: translateX(
        ${({ $direction }) => ($direction === 'left' ? '-100%' : '100%')}
      )
      rotate(${({ $direction }) => ($direction === 'left' ? '180deg' : 0)});

    &:hover {
      cursor: pointer;
      width: 70px;
      height: 70px;
      ${mediaWidth('max', 'sm')} {
        width: 60px;
        height: 60px;
      }
      ${mediaWidth('max', 'xs')} {
        width: 50px;
        height: 50px;
      }
      ${mediaWidth('max', 'xxs')} {
        width: 40px;
        height: 40px;
      }
    }
    ${mediaWidth('max', 'xxl')} {
      transform: rotate(
        ${({ $direction }) => ($direction === 'left' ? '180deg' : 0)}
      );
      left: ${({ $direction }) =>
        $direction === 'left' ? 'var(--spacing-x2)' : 'initial'};
      right: ${({ $direction }) =>
        $direction === 'right' ? 'var(--spacing-x2)' : 'initial'};
    }
    ${mediaWidth('max', 'sm')} {
      width: 50px;
      height: 50px;
    }
    ${mediaWidth('max', 'xs')} {
      width: 40px;
      height: 40px;
    }
    ${mediaWidth('max', 'xxs')} {
      width: 30px;
      height: 30px;
    }
  `,
};
