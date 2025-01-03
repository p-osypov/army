import React from 'react';
import { IconProps } from '@/shared/assets/icons/icons.types';

const Youtube = ({ color, ...props }: IconProps) => (
  <svg
    data-icon="youtube"
    width="20"
    height="20"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="0.5"
      y="0.5"
      width="43"
      height="43"
      rx="9.5"
      stroke={color || '#FAFAFA'}
      strokeOpacity="0.1"
    />
    <g opacity="0.8">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.21 13.2499C28.02 13.1799 25.57 13.1099 21.86 13.1099H21.37C17.8 13.1099 15.4201 13.1799 14.2301 13.3199C12.6201 13.4599 11.5 13.8799 10.87 14.4399C10.31 14.9299 9.89004 15.8399 9.75004 17.0299C9.68004 17.7999 9.61003 19.4099 9.61003 21.8599V22.2099C9.61003 24.5199 9.68002 26.1299 9.82002 26.8999C10.03 28.0199 10.3801 28.8599 11.0801 29.3499C11.7801 29.9099 12.97 30.2599 14.65 30.3999C15.84 30.4699 18.29 30.5399 22 30.5399H22.49C26.06 30.5399 28.4401 30.4699 29.6301 30.3299C31.2401 30.1899 32.36 29.7699 32.99 29.2099C33.55 28.7199 33.97 27.8099 34.11 26.6199C34.18 25.8499 34.25 24.2399 34.25 21.7899V21.4399C34.25 19.1299 34.18 17.5199 34.04 16.7499C33.83 15.6299 33.4801 14.7899 32.7801 14.2999C32.0801 13.7399 30.89 13.3899 29.21 13.2499ZM26.4801 21.8599L18.7801 26.4799V17.2399L26.4801 21.8599Z"
        fill={color || '#FAFAFA'}
      />
    </g>
  </svg>
);

export default Youtube;
