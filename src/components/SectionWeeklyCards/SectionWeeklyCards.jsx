import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import WeeklyCard from '../WeeklyCard';
import styles from './SectionWeeklyCards.module.scss';

const cn = classNames.bind(styles);

export default function SectionWeeklyCards({ weeklyData }) {
  return (
    <div className={cn('weekly-cards')}>
      {weeklyData.map((singleDay, index) => (
        <WeeklyCard
          key={index}
          title={singleDay.title}
          temp={singleDay.temp}
          icon={singleDay.icon}
        />
      ))}
    </div>
  );
}

SectionWeeklyCards.propTypes = {
  weeklyData: PropTypes.array,
};
