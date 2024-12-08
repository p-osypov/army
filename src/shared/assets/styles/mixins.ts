// @ts-ignore
import { FlattenSimpleInterpolation, css } from 'styled-components';

type Breakpoints = {
  [key: string]: number;
};

export const breakpoints: Breakpoints = {
  xxs: 430,
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1350,
  xxl: 1512,
};

export const mediaWidth = (
  type: 'max' | 'min',
  breakpoint: keyof Breakpoints,
) =>
  `@media (${type}-width: ${breakpoints[breakpoint] + (type === 'min' ? 1 : 0)}px)`;

export const mediaHoverNone = (styles: FlattenSimpleInterpolation) => {
  return `
    @media (hover: none) {
      &:hover {
        ${styles}
      }
    }
`;
};

export const scrollbarMixin = css`
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 4px;
    background-color: var(--color-white);
  }
  &::-webkit-scrollbar-thumb {
    background: var(--color-black);
    width: 20px;
  }
  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: var(--color-black) var(--color-white);
`;
