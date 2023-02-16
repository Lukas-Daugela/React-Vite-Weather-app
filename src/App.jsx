import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';

import styles from './App.module.scss';
import { SearchIcon } from './assets/svg';
import Button from './components/Button';
import DateAndTemperature from './components/DateAndTemperature/DateAndTemperature';
import Input from './components/Input';
import SectionWeatherConditions from './components/SectionWeatherConditions/SectionWeatherConditions';
import SectionWeeklyCards from './components/SectionWeeklyCards';
import getFormattedWeatherData from './services/weatherService';

const cn = classNames.bind(styles);

function App() {
  const query = { q: 'Kaunas' };
  const units = 'metric';
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getFormattedWeatherData({ ...query, units });

      setWeather(data);
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
      <SectionWeatherConditions />
      {weather && <SectionWeeklyCards weeklyData={weather.forecastData} />}
    </main>
  );
}

export default App;
