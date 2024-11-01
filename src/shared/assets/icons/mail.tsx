import React from 'react';
import { IconProps } from '@/shared/assets/icons/icons.types';

const Email = ({ color, ...props }: IconProps) => (
  <svg
    width="16"
    height="12"
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.5 0C15.3125 0 16 0.6875 16 1.5C16 2 15.75 2.4375 15.375 2.71875L8.59375 7.8125C8.21875 8.09375 7.75 8.09375 7.375 7.8125L0.59375 2.71875C0.21875 2.4375 0 2 0 1.5C0 0.6875 0.65625 0 1.5 0H14.5ZM6.78125 8.625C7.5 9.15625 8.46875 9.15625 9.1875 8.625L16 3.5V10C16 11.125 15.0938 12 14 12H2C0.875 12 0 11.125 0 10V3.5L6.78125 8.625Z"
      fill="url(#paint0_linear_1_14630)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_14630"
        x1="-6.5"
        y1="0.500002"
        x2="17.8771"
        y2="1.64803"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FAFAFA" />
        <stop offset="1" stop-color="#FAFAFA" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export default Email;
