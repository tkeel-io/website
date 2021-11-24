import React from 'react';
import LogoImage from '@site/static/images/logo.svg';

import styles from './index.module.scss';

function Logo(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <LogoImage />
    </div>
  );
}

export default Logo;
