import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import styles from './DegreeButtons.module.scss';

const cn = classNames.bind(styles);

export default function DegreeButtons({ setUnits, unit }) {
  const [toggleButton, setToggleButton] = useState(false);
  const defaultUnit = toggleButton;

  const handleClick = () => {
    if (unit === 'metric') {
      setToggleButton(true);
      return setUnits('us');
    } else {
      setToggleButton(false);
      return setUnits('metric');
    }
  };

  return (
    <div className={cn('degree-buttons')}>
      <div className={cn('degree-buttons__wrapper')}>
        <button
          className={cn(
            'degree-buttons__background',
            `${
              toggleButton
                ? 'degree-buttons__background--toggle-right'
                : 'degree-buttons__background--toggle-left'
            }`,
          )}
        ></button>
        <button
          type="button"
          onClick={() => handleClick()}
          className={cn('degree-buttons__toggle')}
          disabled={!defaultUnit}
        >
          °C
        </button>
        <button
          type="button"
          onClick={() => handleClick()}
          className={cn('degree-buttons__toggle')}
          disabled={defaultUnit}
        >
          °F
        </button>
      </div>
    </div>
  );
}

DegreeButtons.propTypes = {
  setUnits: PropTypes.func,
  unit: PropTypes.string,
};
