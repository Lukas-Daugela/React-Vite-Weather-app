import classNames from 'classnames/bind';
// import PropTypes from 'prop-types';
import React from 'react';

import {
  HumidityIcon,
  SunriseIcon,
  SunsetIcon,
  ThermometerIcon,
  WindIcon,
} from '../../assets/svg';
import WeatherCondition from '../WeatherCondition';
import styles from './SectionWeatherConditions.module.scss';

const cn = classNames.bind(styles);

export default function SectionWeatherConditions() {
  return (
    <div className={cn('conditions')}>
      <div className={cn('condition__wrapper')}>
        <WeatherCondition className="separate" weatherData="27°C" name={'Feels like'}>
          <ThermometerIcon className={cn('weather__illustration')} />
        </WeatherCondition>
        <WeatherCondition className="separate" weatherData="54%" name={'Hum'}>
          <HumidityIcon className={cn('weather__illustration')} />
        </WeatherCondition>
        <WeatherCondition weatherData="10km/h" name={'Wind'}>
          <WindIcon className={cn('weather__illustration')} />
        </WeatherCondition>
      </div>
      <div className={cn('day-night-cycles')}>
        <WeatherCondition weatherData="4.45am" name={'Sunrise'}>
          <SunriseIcon className={cn('weather__illustration')} />
        </WeatherCondition>
        <WeatherCondition weatherData="8.50pm" name={'Sunset'}>
          <SunsetIcon className={cn('weather__illustration')} />
        </WeatherCondition>
      </div>
    </div>
  );
}

// SectionWeatherConditions.propTypes = {};
