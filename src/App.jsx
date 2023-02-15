import classNames from 'classnames/bind';
import React, { useEffect } from 'react';

import styles from './App.module.scss';
import {
  CloudyNight,
  HumidityIcon,
  LocationIcon,
  SearchIcon,
  SunriseIcon,
  SunsetIcon,
  ThermometerIcon,
  WindIcon,
} from './assets/svg';
import Button from './components/Button';
import Input from './components/Input';
import WeatherCondition from './components/WeatherCondition';
import WeeklyCard from './components/WeeklyCard';
import getFormattedWeatherData from './services/weatherService';

const cn = classNames.bind(styles);

function App() {
  const query = { q: 'Kaunas' };
  const units = 'metric';

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getFormattedWeatherData({ ...query, units });

      console.log(data);
    };

    fetchWeather();
  }, []);

  return (
    <main className={cn('main')}>
      <div className={cn('search-bar')}>
        <Input placeholder={'Enter your city'} />
        <Button type="search">
          <SearchIcon />
        </Button>
      </div>
      <div className={cn('main-info__wrapper')}>
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
      <div className={cn('weekly-cards')}>
        <WeeklyCard />
        <WeeklyCard />
        <WeeklyCard />
        <WeeklyCard />
      </div>
    </main>
  );
}

export default App;
