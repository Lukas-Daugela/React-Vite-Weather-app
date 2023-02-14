import PropTypes from 'prop-types';
import React from 'react';

export default function SunsetIcon({ className }) {
  return (
    <svg
      className={className}
      width="33"
      height="17"
      viewBox="0 0 33 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 14H31.6" stroke="#FFD646" strokeLinecap="round" />
      <path d="M6.66797 16.1547H25.9346" stroke="#FFD646" strokeLinecap="round" />
      <path
        d="M28 12C28 10.4241 27.6896 8.86371 27.0866 7.4078C26.4835 5.95189 25.5996 4.62902 24.4853 3.51472C23.371 2.40042 22.0481 1.5165 20.5922 0.913445C19.1363 0.310389 17.5759 -6.88831e-08 16 0C14.4241 6.88832e-08 12.8637 0.310389 11.4078 0.913446C9.95189 1.5165 8.62902 2.40042 7.51472 3.51472C6.40042 4.62902 5.5165 5.95189 4.91344 7.4078C4.31039 8.86371 4 10.4241 4 12H16H28Z"
        fill="#FFD646"
      />
    </svg>
  );
}

SunsetIcon.propTypes = {
  className: PropTypes.string,
};
