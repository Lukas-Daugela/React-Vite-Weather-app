import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Input.module.scss';

const cn = classNames.bind(styles);

export default function Input({ placeholder }) {
  return <input type={'text'} className={cn('input')} placeholder={placeholder} />;
}

Input.propTypes = {
  placeholder: PropTypes.string,
};
