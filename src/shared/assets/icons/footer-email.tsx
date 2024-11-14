import React from 'react';
import { IconProps } from '@/shared/assets/icons/icons.types';

const FooterEmail = ({ color, ...props }: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 14 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.6875 0C13.3984 0 14 0.601562 14 1.3125C14 1.75 13.7812 2.13281 13.4531 2.37891L7.51953 6.83594C7.19141 7.08203 6.78125 7.08203 6.45312 6.83594L0.519531 2.37891C0.191406 2.13281 0 1.75 0 1.3125C0 0.601562 0.574219 0 1.3125 0H12.6875ZM5.93359 7.54688C6.5625 8.01172 7.41016 8.01172 8.03906 7.54688L14 3.0625V8.75C14 9.73438 13.207 10.5 12.25 10.5H1.75C0.765625 10.5 0 9.73438 0 8.75V3.0625L5.93359 7.54688Z"
      fill={color || '#415346'}
    />
  </svg>
);

export default FooterEmail;
