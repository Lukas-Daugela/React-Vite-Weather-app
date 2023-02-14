import classNames from 'classnames/bind';
import React from 'react';

import styles from './App.module.scss';
import { SearchIcon } from './assets/svg';
import Button from './components/Button';
import Input from './components/Input';

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
    </>
  );
}

export default App;
