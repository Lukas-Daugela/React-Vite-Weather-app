import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Cloud from './Cloud';
import styles from './WeeklyCard.module.scss';

const cn = classNames.bind(styles);

export default function WeeklyCard({ props }) {
  console.log(props);
  return (
    <div className={cn('card')}>
      <p className={cn('card__info')}>Fri</p>
      <Cloud />
      <p className={cn('card__info')}>24°C</p>
    </div>
  );
}

WeeklyCard.propTypes = {
  props: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
