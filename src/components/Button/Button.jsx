import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Button.module.scss';

const cn = classNames.bind(styles);

export default function Button({ children, type }) {
  return <button className={cn('button', `button__${type}`)}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  type: PropTypes.oneOf(['search', 'degree']).isRequired,
};
