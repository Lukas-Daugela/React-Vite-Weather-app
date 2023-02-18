import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

import { SearchIcon } from '../../assets/svg';
import styles from './SearchBar.module.scss';

const cn = classNames.bind(styles);

export default function SearchBar({ setCity }) {
  const inputRef = useRef();

  function onSearch() {
    const value = inputRef.current.value;
    setCity(value);
    inputRef.current.value = '';
  }

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === 'Enter') {
        onSearch();
      }
    };

    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  return (
    <div className={cn('search-bar')}>
      <input
        type={'text'}
        className={cn('input')}
        placeholder="Enter your city"
        autoFocus
        ref={inputRef}
      />

      <button type="button" onClick={() => onSearch()} className={cn('button')}>
        <SearchIcon />
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  setCity: PropTypes.func,
};
