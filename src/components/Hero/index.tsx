import React, { useEffect, useRef } from 'react';

import styles from './index.module.scss';

import moveBottom from '@site/static/images/move-bottom.png';

type AppProps = {
  dom: {
    current: {
      offsetTop: number;
    };
  };
};

function Hero({ dom }: AppProps): JSX.Element {
  const onButtonClick = () => {
    return window.scrollTo({
      top: dom.current.offsetTop - 60,
      left: 0,
      behavior: 'smooth',
    });
  };

  const hero = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener(
      'scroll',
      () => {
        const scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        hero.current.style.opacity =
          scrollTop > window.screen.height ? '0' : '1';
      },
      false
    );
    // hero.current.style.height = `${window.screen.height}px`;
  });

  return (
    <div className={styles.hero} ref={hero}>
      <div className={styles['min-width']}>
        <div className={styles.row}>
          tKeel，颠覆传统物联网应用
          <br />
          开发的新一代核心架构
        </div>
        <div className={styles.row}>
          帮助物联网服务商关注于数据层，在可插拔架构基础上
          <br />
          实现任何语言、任何架构的应用开发，100%云原生。
        </div>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <div
          className={styles.moveBottom}
          role="button"
          tabIndex={0}
          onClick={onButtonClick}
        >
          <img src={moveBottom} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
