import classNames from 'classnames/bind';
// import PropTypes from 'prop-types';
import React from 'react';

import { CloudyNight, LocationIcon } from '../../assets/svg';
import styles from './DateAndTemperature.module.scss';

const cn = classNames.bind(styles);

export default function DateAndTemperature() {
  return (
    <div className={cn('date-and-temperature')}>
      <div className={cn('current-weather')}>
        <CloudyNight />
        <p className={cn('current-weather__temperature')}>
          15<span className={cn('current-weather__degree')}>°C</span>
        </p>
      </div>
      <div className={cn('location-time')}>
        <div className={cn('location-time__location')}>
          <LocationIcon />
          <p className={cn('location-time__city')}>London, GB</p>
        </div>
        <div className={cn('location-time__time')}>
          <p className={cn('location-time__date')}>Thursday 17th Jun</p>
          <p className={cn('location-time__hours')}>2:45 pm</p>
        </div>
      </div>
    </div>
  );
}

// DateAndTemperature.propTypes = {};
