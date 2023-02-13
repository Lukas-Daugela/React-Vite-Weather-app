import React from 'react';

import { Search_icon } from '../public/assets/svg';
import Button from './components/Button/Button';

function App() {
  return (
    <>
      <div>App</div>
      <Button type={'search'}>
        <Search_icon />
      </Button>
    </>
  );
}

export default App;
