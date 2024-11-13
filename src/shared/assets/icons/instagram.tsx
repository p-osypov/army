import React from 'react';
import { IconProps } from '@/shared/assets/icons/icons.types';

const Instagram = ({ color, ...props }: IconProps) => (
  <svg
    data-icon="instagram"
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient
        id="instagramGradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" style={{ stopColor: '#F58529', stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: '#DD2A7B', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#8134AF', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
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
        d="M33.1279 17.4113C33.1142 16.4712 32.94 15.5386 32.6067 14.6594C32.0233 13.158 30.8354 11.9708 29.3315 11.3897C28.462 11.0631 27.5428 10.888 26.6124 10.8681C25.4157 10.8147 25.0363 10.7998 21.9988 10.7998C18.9612 10.7998 18.5718 10.7998 17.3839 10.8681C16.4547 10.888 15.5355 11.0631 14.666 11.3897C13.1622 11.9708 11.973 13.158 11.3909 14.6594C11.0637 15.5274 10.8871 16.4451 10.8697 17.3728C10.8162 18.5687 10.8 18.9474 10.8 21.9799C10.8 25.0125 10.8 25.3999 10.8697 26.5871C10.8883 27.516 11.0637 28.4325 11.3909 29.303C11.9742 30.8031 13.1622 31.9903 14.6673 32.5714C15.533 32.9092 16.4522 33.1005 17.3852 33.1303C18.583 33.1837 18.9624 33.1998 22 33.1998C25.0376 33.1998 25.4269 33.1998 26.6148 33.1303C27.544 33.1116 28.4633 32.9365 29.334 32.6099C30.8379 32.0275 32.0258 30.8403 32.6092 29.3402C32.9363 28.4709 33.1117 27.5545 33.1303 26.6244C33.1838 25.4297 33.2 25.051 33.2 22.0172C33.1975 18.9847 33.1975 18.5997 33.1279 17.4113ZM21.9913 27.7147C18.8144 27.7147 16.2408 25.1453 16.2408 21.9737C16.2408 18.8021 18.8144 16.2328 21.9913 16.2328C25.1657 16.2328 27.7418 18.8021 27.7418 21.9737C27.7418 25.1453 25.1657 27.7147 21.9913 27.7147ZM27.9707 17.3591C27.2281 17.3591 26.6298 16.7606 26.6298 16.0204C26.6298 15.2803 27.2281 14.6817 27.9707 14.6817C28.7108 14.6817 29.3104 15.2803 29.3104 16.0204C29.3104 16.7606 28.7108 17.3591 27.9707 17.3591Z"
        fill={color || '#FAFAFA'}
      />
      <path
        d="M21.9931 25.4792C23.928 25.4792 25.4966 23.9106 25.4966 21.9757C25.4966 20.0407 23.928 18.4722 21.9931 18.4722C20.0581 18.4722 18.4896 20.0407 18.4896 21.9757C18.4896 23.9106 20.0581 25.4792 21.9931 25.4792Z"
        fill={color || '#FAFAFA'}
      />
    </g>
  </svg>
);

export default Instagram;
