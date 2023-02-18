import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import { LocationIcon } from '../../assets/svg';
import iconLinks from '../../context/iconLinks.json';
import DegreeButtons from '../DegreeButton';
import styles from './DateAndTemperature.module.scss';

const cn = classNames.bind(styles);

export default function DateAndTemperature({ dateAndTemp, unit, setUnit }) {
  const { iconTitle, temp, country, city, date } = dateAndTemp;
  const degree = unit === 'metric' ? '°C' : '°F';

  const iconLink = iconLinks.find((icon) => icon.title === iconTitle);

  return (
    <div className={cn('date-and-temperature')}>
      <DegreeButtons setUnits={setUnit} unit={unit} />
      <div className={cn('current-weather')}>
        <img className={cn('current-weather__image')} src={iconLink.url} alt="" />
        <p className={cn('current-weather__temperature')}>
          {temp}
          <span className={cn('current-weather__degree')}>{degree}</span>
        </p>
      </div>
      <div className={cn('location-time')}>
        <div className={cn('location-time__location')}>
          <LocationIcon />
          <p className={cn('location-time__city')}>{`${city}, ${country}`}</p>
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
  unit: PropTypes.string,
  setUnit: PropTypes.func,
};
