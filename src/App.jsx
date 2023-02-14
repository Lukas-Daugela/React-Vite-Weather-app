import classNames from 'classnames/bind';
import React from 'react';

import styles from './App.module.scss';
import {
  HumidityIcon,
  SearchIcon,
  SunriseIcon,
  SunsetIcon,
  ThermometerIcon,
  WindIcon,
} from './assets/svg';
import Button from './components/Button';
import Input from './components/Input';
import WeatherCondition from './components/WeatherCondition/WeatherCondition';

const cn = classNames.bind(styles);

function App() {
  return (
    <main className={cn('main')}>
      <div className={cn('search-bar')}>
        <Input placeholder={'Enter your city'} />
        <Button type="search">
          <SearchIcon />
        </Button>
      </div>
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
    </main>
  );
}

export default App;
