import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './WeatherCondition.module.scss';

const cn = classNames.bind(styles);

export default function WeatherCondition({ children, text, weatherData }) {
  return (
    <div className={cn('test')}>
      <div className={cn('condition')}>
        <div className={cn('condition__illustration')}>{children}</div>
        <p className={cn('condition__description')}>{text}</p>
        <p className={cn('condition__description')}>{weatherData}</p>
      </div>
    </div>
  );
}

WeatherCondition.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  weatherData: PropTypes.string.isRequired,
};
