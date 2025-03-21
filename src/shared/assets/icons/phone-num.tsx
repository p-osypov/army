import React from 'react';
import { IconProps } from '@/shared/assets/icons/icons.types';

const PhoneNum = ({ color, ...props }: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 17 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.9688 13.0938L15.2188 16.25C15.125 16.7188 14.75 17.0312 14.2812 17.0312C6.40625 17 0 10.5938 0 2.71875C0 2.25 0.28125 1.875 0.75 1.78125L3.90625 1.03125C4.34375 0.9375 4.8125 1.1875 5 1.59375L6.46875 5C6.625 5.40625 6.53125 5.875 6.1875 6.125L4.5 7.5C5.5625 9.65625 7.3125 11.4062 9.5 12.4688L10.875 10.7812C11.125 10.4688 11.5938 10.3438 12 10.5L15.4062 11.9688C15.8125 12.1875 16.0625 12.6562 15.9688 13.0938Z"
      fill="url(#paint0_linear_1_14627)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_14627"
        x1="-5.5"
        y1="4"
        x2="17.7595"
        y2="4.957"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={color || '#FAFAFA'} />
        <stop offset="1" stopColor={color || '#FAFAFA'} stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export default PhoneNum;
