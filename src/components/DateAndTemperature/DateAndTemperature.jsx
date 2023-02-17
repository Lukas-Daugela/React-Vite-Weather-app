import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import { LocationIcon } from '../../assets/svg';
import iconLinks from '../../context/iconLinks.json';
import styles from './DateAndTemperature.module.scss';

const cn = classNames.bind(styles);

export default function DateAndTemperature({ dateAndTemp }) {
  const { iconTitle, temp, cityAndCountry, date } = dateAndTemp;

  const iconLink = iconLinks.find((icon) => icon.title === iconTitle);

  return (
    <div className={cn('date-and-temperature')}>
      <div className={cn('current-weather')}>
        <img className={cn('current-weather__image')} src={iconLink.url} alt="" />
        <p className={cn('current-weather__temperature')}>
          {temp}
          <span className={cn('current-weather__degree')}>°C</span>
        </p>
      </div>
      <div className={cn('location-time')}>
        <div className={cn('location-time__location')}>
          <LocationIcon />
          <p className={cn('location-time__city')}>{cityAndCountry}</p>
        </div>
        <div className={cn('location-time__time')}>
          <p className={cn('location-time__date')}>{date}</p>
        </div>
      </div>
    </div>
  );
}

DateAndTemperature.propTypes = {
  dateAndTemp: PropTypes.object,
};
