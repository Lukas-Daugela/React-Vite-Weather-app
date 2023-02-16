import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';

import styles from './App.module.scss';
import DateAndTemperature from './components/DateAndTemperature/DateAndTemperature';
import SearchBar from './components/SearchBar';
import SectionWeatherConditions from './components/SectionWeatherConditions/SectionWeatherConditions';
import SectionWeeklyCards from './components/SectionWeeklyCards';
import getFormattedWeatherData from './services/weatherService';

const cn = classNames.bind(styles);

function App() {
  const [city, setCity] = useState('');
  const units = 'metric';
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getFormattedWeatherData(city, units);
      const { formatedWeather } = data;
      setWeather(formatedWeather);
    };
    fetchWeather();
  }, [city]);

  return (
    <main className={cn('main')}>
      <SearchBar setCity={setCity} />
      {weather && (
        <>
          <DateAndTemperature dateAndTemp={weather.dateAndTemp} />
          <SectionWeatherConditions weatherConditions={weather.weatherConditions} />
          <SectionWeeklyCards weeklyData={weather.weeklyWeather} />
        </>
      )}
    </main>
  );
}

export default App;
