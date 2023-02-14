import React from 'react';

function Cloud() {
  return (
    <svg
      width="111"
      height="86"
      viewBox="0 0 111 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.67" filter="url(#filter0_f_409_5210)">
        <path
          d="M66.8586 27.9467C73.5381 32.8966 89.2131 38.1453 83.1848 43.6299C77.1566 49.1146 42.7008 64.7819 28.3544 58.726C21.6749 53.7762 34.3387 37.8383 40.3669 32.3537C46.3951 26.869 60.179 22.9969 66.8586 27.9467Z"
          fill="url(#paint0_linear_409_5210)"
          fillOpacity="0.3"
        />
      </g>
      <g filter="url(#filter1_ii_409_5210)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M56.5215 49.3227V49.3232H41.2916C35.9313 49.3232 31.5859 44.9778 31.5859 39.6175C31.5859 34.2572 35.9313 29.9119 41.2916 29.9119H44.0537C46.5937 29.9119 48.9562 30.6714 50.9267 31.9757C53.7177 25.6694 60.0301 21.2694 67.3701 21.2694H71.3165C79.0632 21.2694 85.3431 27.5494 85.3431 35.2961C85.3431 43.0428 79.0632 49.3227 71.3165 49.3227H56.5215Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_409_5210"
          x="0.844309"
          y="0.0519505"
          width="109.309"
          height="85.6601"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="12.8083"
            result="effect1_foregroundBlur_409_5210"
          />
        </filter>
        <filter
          id="filter1_ii_409_5210"
          x="21.3393"
          y="12.7305"
          width="68.5585"
          height="42.8544"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4.55407" dy="-8.53888" />
          <feGaussianBlur stdDeviation="8.53888" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_409_5210" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-10.2467" dy="6.26184" />
          <feGaussianBlur stdDeviation="8.53888" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_409_5210"
            result="effect2_innerShadow_409_5210"
          />
        </filter>
        <linearGradient
          id="paint0_linear_409_5210"
          x1="35.4481"
          y1="61.1512"
          x2="66.0142"
          y2="19.3748"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#254659" />
          <stop offset="1" stopColor="#023553" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Cloud;
