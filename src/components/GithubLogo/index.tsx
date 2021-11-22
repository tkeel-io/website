import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

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
    <div className={styles.githubLogo}>
      <div className={styles.githubImg}>
        <img
          className={styles.logo}
          src={useBaseUrl('/images/gitbub.png')}
          alt=""
        />
        <img
          className={styles.githubBg}
          src={useBaseUrl('/images/github-bg.png')}
          alt=""
        />
        <div className={styles.text}>GitHub</div>
      </div>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div
        className={styles.moveTop}
        role="button"
        tabIndex={0}
        onClick={onButtonClick}
      >
        {/* <img src={useBaseUrl("/images/move-top.png") }  alt="" /> */}
      </div>
    </div>
  );
}

export default GithubLogo;
