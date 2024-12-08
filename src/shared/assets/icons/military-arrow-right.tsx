import { IconProps } from '@/shared/assets/icons/icons.types';

const MilitaryArrowRight = ({ color, ...props }: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity="0.4">
      <path
        d="M59.4865 28.6629L41.4875 8.66396C41.1035 8.23999 40.5675 8 39.9995 8H28.0002C27.2122 8 26.4963 8.46397 26.1723 9.18394C25.8523 9.9079 25.9843 10.7519 26.5123 11.3358L43.3074 29.9988L26.5123 48.6578C25.9843 49.2458 25.8483 50.0897 26.1723 50.8097C26.4963 51.5336 27.2122 51.9976 28.0002 51.9976H39.9995C40.5675 51.9976 41.1035 51.7536 41.4875 51.3377L59.4865 31.3387C60.1704 30.5788 60.1704 29.4188 59.4865 28.6629Z"
        fill="url(#paint0_linear_18_946)"
      />
      <path
        d="M33.4884 28.6629L15.4894 8.66396C15.1054 8.23999 14.5695 8 14.0015 8H2.00214C1.21418 8 0.498222 8.46397 0.17424 9.18394C-0.145743 9.9079 -0.0137502 10.7519 0.514221 11.3358L17.3093 29.9988L0.514221 48.6578C-0.0137502 49.2458 -0.149743 50.0897 0.17424 50.8097C0.498222 51.5336 1.21418 51.9976 2.00214 51.9976H14.0015C14.5695 51.9976 15.1054 51.7536 15.4894 51.3377L33.4884 31.3387C34.1724 30.5788 34.1724 29.4188 33.4884 28.6629Z"
        fill="url(#paint1_linear_18_946)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_18_946"
        x1="25.2449"
        y1="25.0157"
        x2="66.4743"
        y2="25.2951"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFAFA" />
        <stop offset="1" stopColor="#FAFAFA" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_18_946"
        x1="-0.753196"
        y1="25.0157"
        x2="40.4763"
        y2="25.2951"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFAFA" />
        <stop offset="1" stopColor="#FAFAFA" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export default MilitaryArrowRight;
