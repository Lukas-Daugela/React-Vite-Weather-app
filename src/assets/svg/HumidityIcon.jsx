import PropTypes from 'prop-types';
import React from 'react';

export default function HumidityIcon({ className }) {
  return (
    <svg
      className={className}
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_409_5173)" filter="url(#filter0_di_409_5173)">
        <path
          d="M7.5 1.67954L4.81875 4.36079C4.28852 4.89108 3.92743 5.56669 3.78116 6.30219C3.63489 7.03769 3.71 7.80005 3.997 8.49286C4.28399 9.18568 4.76998 9.77783 5.39351 10.1944C6.01703 10.6111 6.7501 10.8334 7.5 10.8334C8.24991 10.8334 8.98297 10.6111 9.6065 10.1944C10.23 9.77783 10.716 9.18568 11.003 8.49286C11.29 7.80005 11.3651 7.03769 11.2188 6.30219C11.0726 5.56669 10.7115 4.89108 10.1813 4.36079L7.5 1.67954ZM7.5 0.147705L10.9472 3.59487C11.6289 4.27666 12.0932 5.1453 12.2813 6.09095C12.4694 7.03661 12.3729 8.01681 12.0039 8.90759C11.6349 9.79838 11.0101 10.5597 10.2084 11.0954C9.40671 11.6311 8.46418 11.917 7.5 11.917C6.53582 11.917 5.59329 11.6311 4.7916 11.0954C3.98992 10.5597 3.36507 9.79838 2.9961 8.90759C2.62712 8.01681 2.53057 7.03661 2.71867 6.09095C2.90677 5.1453 3.37106 4.27666 4.05284 3.59487L7.5 0.147705V0.147705Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_di_409_5173"
          x="-1.26241"
          y="0"
          width="15.2624"
          height="16.0165"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-1.50827" dy="2.26241" />
          <feGaussianBlur stdDeviation="0.377069" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_409_5173"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_409_5173"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-0.754137" dy="0.754137" />
          <feGaussianBlur stdDeviation="0.754137" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_409_5173" />
        </filter>
        <clipPath id="clip0_409_5173">
          <rect width="13" height="13" fill="white" transform="translate(1)" />
        </clipPath>
      </defs>
    </svg>
  );
}

HumidityIcon.propTypes = {
  className: PropTypes.string,
};
