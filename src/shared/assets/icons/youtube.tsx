import React from 'react';
import { IconProps } from '@/shared/assets/icons/icons.types';

const Youtube = ({ color, ...props }: IconProps) => (
  <svg viewBox="-0.5 -2 17 16" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4.27 12.51L11.72 12.51C14.28 12.51 16 10.79 16 8.23L16 3.76C16 1.2 14.28 -0.52 11.72 -0.52L4.27 -0.52C1.71 -0.52 0 1.2 0 3.76L0 8.23C0 10.79 1.71 12.51 4.27 12.51ZM1.11 3.76C1.11 1.84 2.35 0.6 4.27 0.6L11.72 0.6C13.64 0.6 14.88 1.84 14.88 3.76L14.88 8.23C14.88 10.15 13.64 11.39 11.72 11.39L4.27 11.39C2.35 11.39 1.11 10.15 1.11 8.23L1.11 3.76ZM6.34 8.47C6.52 8.57 6.73 8.62 6.95 8.62C7.24 8.62 7.55 8.53 7.85 8.35L9.69 7.25C10.2 6.94 10.49 6.49 10.49 6C10.49 5.52 10.2 5.06 9.69 4.76L7.85 3.66C7.33 3.34 6.77 3.29 6.34 3.54C5.9 3.79 5.65 4.28 5.65 4.9L5.65 7.1C5.65 7.72 5.9 8.22 6.34 8.47ZM6.88 4.5C6.89 4.49 6.92 4.48 6.95 4.48C7.02 4.48 7.14 4.52 7.27 4.6L9.11 5.7C9.3 5.82 9.36 5.93 9.36 6C9.36 6.06 9.3 6.17 9.11 6.29L7.27 7.39C7.08 7.51 6.94 7.52 6.88 7.49C6.83 7.45 6.77 7.32 6.77 7.1L6.77 4.89C6.77 4.66 6.83 4.53 6.88 4.5Z"
      fill={color || 'white'}
    />
  </svg>
);

export default Youtube;