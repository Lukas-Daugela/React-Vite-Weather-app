import classNames from 'classnames/bind';
import React from 'react';

import styles from './App.module.scss';
import { SearchIcon, ThermometerIcon } from './assets/svg';
import Button from './components/Button';
import Input from './components/Input';
import WeatherCondition from './components/WeatherCondition/WeatherCondition';

const cn = classNames.bind(styles);

function App() {
  return (
    <>
      <div>App</div>
      <div className={cn('container')}>
        <Input placeholder={'Enter your city'} />
        <Button type="search">
          <SearchIcon />
        </Button>
      </div>
      <WeatherCondition weatherData="27°C" text={'Feels like'}>
        <ThermometerIcon />
      </WeatherCondition>
    </>
  );
}

export default App;
