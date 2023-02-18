import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
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

export default function SectionWeatherConditions({ weatherConditions, unit }) {
  const { feelsLike, humidity, wind, sunrise, sunset } = weatherConditions;

  return (
    <div className={cn('conditions')}>
      <div className={cn('condition__wrapper')}>
        <WeatherCondition
          className="separate"
          weatherData={feelsLike}
          unit={unit}
          degree
          name={'Feels like'}
        >
          <ThermometerIcon className={cn('weather__illustration')} />
        </WeatherCondition>
        <WeatherCondition className="separate" weatherData={`${humidity} %`} name={'Hum'}>
          <HumidityIcon className={cn('weather__illustration')} />
        </WeatherCondition>
        <WeatherCondition weatherData={wind} wind unit={unit} name={'Wind'}>
          <WindIcon className={cn('weather__illustration')} />
        </WeatherCondition>
      </div>
      <div className={cn('day-night-cycles')}>
        <WeatherCondition weatherData={`${sunrise} am`} name={'Sunrise'}>
          <SunriseIcon className={cn('weather__illustration')} />
        </WeatherCondition>
        <WeatherCondition weatherData={`${sunset} pm`} name={'Sunset'}>
          <SunsetIcon className={cn('weather__illustration')} />
        </WeatherCondition>
      </div>
    </div>
  );
}

SectionWeatherConditions.propTypes = {
  weatherConditions: PropTypes.object,
  unit: PropTypes.string,
};
