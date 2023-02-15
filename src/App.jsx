import classNames from 'classnames/bind';
import React, { useEffect } from 'react';

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
import DateAndTemperature from './components/DateAndTemperature/DateAndTemperature';
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
      <DateAndTemperature />

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
