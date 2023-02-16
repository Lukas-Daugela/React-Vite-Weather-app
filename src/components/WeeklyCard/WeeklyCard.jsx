import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

// import { iconUrlFromCode } from '../../services/weatherService';
import styles from './WeeklyCard.module.scss';

const cn = classNames.bind(styles);

export default function WeeklyCard({ title, temp, icon }) {
  return (
    <div className={cn('card')}>
      <p className={cn('card__info')}>{title}</p>
      <img src={icon} alt="" />
      <p className={cn('card__info')}>{temp}</p>
    </div>
  );
}

WeeklyCard.propTypes = {
  title: PropTypes.string,
  temp: PropTypes.number,
  icon: PropTypes.node,
};
