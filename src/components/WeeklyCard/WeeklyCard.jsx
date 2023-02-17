import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import iconLinks from '../../context/iconLinks.json';
import styles from './WeeklyCard.module.scss';

const cn = classNames.bind(styles);

export default function WeeklyCard({ title, temp, iconTitle, unit }) {
  const iconLink = iconLinks.find((icon) => icon.title === iconTitle);
  const degree = unit === 'metric' ? '°C' : '°F';

  return (
    <div className={cn('card')}>
      <p className={cn('card__info')}>{title}</p>

      <img className={cn('card__image')} src={iconLink.url} alt="This is an image" />
      <p className={cn('card__info')}>{`${temp} ${degree}`}</p>
    </div>
  );
}

WeeklyCard.propTypes = {
  title: PropTypes.string,
  temp: PropTypes.number,
  iconTitle: PropTypes.node,
  unit: PropTypes.string,
};
