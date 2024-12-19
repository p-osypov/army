import React from 'react';
import { IconProps } from '@/shared/assets/icons/icons.types';

const ArrowRight = ({ color, ...props }: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 15 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.6875 7.21875L8.6875 12.2188C8.5 12.4062 8.25 12.5 8 12.5C7.71875 12.5 7.46875 12.4062 7.28125 12.2188C6.875 11.8438 6.875 11.1875 7.28125 10.8125L10.5625 7.5H1C0.4375 7.5 0 7.0625 0 6.5C0 5.96875 0.4375 5.5 1 5.5H10.5625L7.28125 2.21875C6.875 1.84375 6.875 1.1875 7.28125 0.8125C7.65625 0.40625 8.3125 0.40625 8.6875 0.8125L13.6875 5.8125C14.0938 6.1875 14.0938 6.84375 13.6875 7.21875Z"
      fill={color || 'currentColor'}
    />
  </svg>
);

export default ArrowRight;
