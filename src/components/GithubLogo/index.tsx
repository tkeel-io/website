import React from 'react';
import Image from 'next/image';

import styles from './index.module.scss';

const onButtonClick = () => {
  return window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};

function GithubLogo(): JSX.Element {
  return (
    <div className={styles['github-logo']}>
      <div className={styles['github-img']}>
        <Image className={styles.logo} src="/images/github.png" alt="" />
        <Image
          className={styles['github-bg']}
          src="/images/github-bg.png"
          alt=""
          layout="fill"
        />
        <div className={styles.text}>GitHub</div>
      </div>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/control-has-associated-label */}
      <div
        className={styles['move-top']}
        role="button"
        tabIndex={0}
        onClick={onButtonClick}
      />
    </div>
  );
}

export default GithubLogo;
