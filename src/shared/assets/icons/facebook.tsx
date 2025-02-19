import React from 'react';
import { IconProps } from '@/shared/assets/icons/icons.types';

const Facebook = ({ color, ...props }: IconProps) => (
  <svg
    data-icon="facebook"
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
        d="M25.08 12.0602C25.29 12.0602 25.5 12.0602 25.92 12.0602V15.2102C25.71 15.2102 25.29 15.2102 24.87 15.2102C24.45 15.2102 24.03 15.2102 23.82 15.4202C23.61 15.6302 23.61 15.8402 23.61 16.3302C23.61 16.7502 23.61 17.0302 23.61 17.4502H25.92V20.1102H23.61V31.6602H20.04V20.0402H18.15V17.3802H20.04V16.4702C20.04 14.9302 20.25 13.8102 20.67 13.3202C21.3 12.4102 22.56 11.9902 24.45 11.9902C24.66 12.0602 24.87 12.0602 25.08 12.0602Z"
        fill={color || '#FAFAFA'}
      />
    </g>
  </svg>
);

export default Facebook;
