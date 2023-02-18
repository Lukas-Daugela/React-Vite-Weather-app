import classNames from 'classnames/bind';
import React from 'react';

import styles from './Loaders.module.scss';

const cn = classNames.bind(styles);

export function Spinner() {
  return (
    <div className={cn('spinner__container')}>
      <span className={cn('spinner__animation')}></span>
    </div>
  );
}
