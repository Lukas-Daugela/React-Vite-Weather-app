import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './WeatherCondition.module.scss';

const cn = classNames.bind(styles);

export default function WeatherCondition({
  className,
  children,
  name,
  weatherData,
  unit,
}) {
  return (
    <div className={cn('condition', className)}>
      <div className={cn('condition__wrapper')}>
        <div className={cn('condition__illustration')}>{children}</div>
        <p className={cn('condition__name', 'condition__description')}>{name}</p>
        <p className={cn('condition__description')}>
          {weatherData} {unit}
        </p>
      </div>
    </div>
  );
}

WeatherCondition.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  weatherData: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
  unit: PropTypes.string,
};
