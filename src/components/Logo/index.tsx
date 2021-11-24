import React from 'react';

import styles from './index.module.scss';
import LogoImage from '@/assets/images/logo.svg';

function Logo(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <LogoImage />
    </div>
  );
}

export default Logo;
