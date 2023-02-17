import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';

import styles from './App.module.scss';
import DateAndTemperature from './components/DateAndTemperature/DateAndTemperature';
import DegreeButtons from './components/DegreeButton/DegreeButtons';
import { Spinner } from './components/Loaders';
import SearchBar from './components/SearchBar';
import SectionWeatherConditions from './components/SectionWeatherConditions/SectionWeatherConditions';
import SectionWeeklyCards from './components/SectionWeeklyCards';
import getFormattedWeatherData from './services/weatherService';

const cn = classNames.bind(styles);

function App() {
  const [city, setCity] = useState('');
  const [unit, setUnit] = useState('metric');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    setLoading(true);
    const data = await getFormattedWeatherData(city, unit);
    const { formatedWeather } = data;
    setWeather(formatedWeather);
    setLoading(false);
  };
  useEffect(() => {
    if (city !== '') fetchWeather();
  }, [city, unit]);

  return (
    <main className={cn('main')}>
      <SearchBar setCity={setCity} />

      {loading && <Spinner />}
      {weather && (
        <>
          <DegreeButtons setUnits={setUnit} unit={unit} />
          <DateAndTemperature dateAndTemp={weather.dateAndTemp} unit={unit} />
          <SectionWeatherConditions
            weatherConditions={weather.weatherConditions}
            unit={unit}
          />
          <SectionWeeklyCards weeklyData={weather.weeklyWeather} unit={unit} />
        </>
      )}
      {weather === undefined ? (
        <p className={cn('error__text')}>Please enter a valid city</p>
      ) : (
        <></>
      )}
    </main>
  );
}

export default App;
