import React from 'react';
import { IconProps } from '@/shared/assets/icons/icons.types';

const ChevronDown = ({ color, ...props }: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 9 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.75 4.75C4.57422 4.75 4.41797 4.69141 4.30078 4.57422L1.17578 1.44922C0.921875 1.21484 0.921875 0.804688 1.17578 0.570312C1.41016 0.316406 1.82031 0.316406 2.05469 0.570312L4.75 3.24609L7.42578 0.570312C7.66016 0.316406 8.07031 0.316406 8.30469 0.570312C8.55859 0.804688 8.55859 1.21484 8.30469 1.44922L5.17969 4.57422C5.0625 4.69141 4.90625 4.75 4.75 4.75Z"
      fill={color || '#FAFAFA'}
    />
  </svg>
);

export default ChevronDown;