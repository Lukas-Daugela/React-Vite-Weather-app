import PropTypes from 'prop-types';
import React from 'react';

export default function WindIcon({ className }) {
  return (
    <svg
      className={className}
      width="24"
      height="13"
      viewBox="0 0 24 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.81836 6.15654C6.81836 6.15654 17.4768 6.24855 19.7844 5.64494C22.0921 5.04133 22.0891 1.90857 19.7844 1.13633C17.4797 0.364101 16.6921 3.1244 16.6921 3.1244"
        stroke="white"
        strokeLinecap="round"
      />
      <path
        d="M9.46094 9.44892C9.46094 9.44892 17.283 8.81239 20.7314 9.44892C24.1798 10.0854 23.0817 11.9115 21.4475 11.9949C19.8132 12.0784 18.3051 11.1112 18.3051 11.1112"
        stroke="white"
        strokeLinecap="round"
      />
      <path
        d="M1 2.23183C1 2.23183 3.3728 2.409 6.18441 2.409C8.99602 2.409 12.807 2.07666 12.807 2.07666"
        stroke="white"
        strokeLinecap="round"
      />
    </svg>
  );
}

WindIcon.propTypes = {
  className: PropTypes.string,
};
