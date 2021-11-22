import React from 'react';
import CardBg from 'react-animated-3d-card';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.scss';

const Card = (img: string, theme: string, desc: string) => {
  return (
    <CardBg
      style={{
        width: '250px',
        height: '250px',
        borderRadius: 0,
        backgroundColor: 'rgba(34, 43, 50, 1)',
        marginBottom: '44px',
      }}
      borderRadius="0"
    >
      <div className={styles.card}>
        <div className={styles.img}>
          <img src={useBaseUrl(img)} alt="" />
        </div>
        <div className={styles.theme}>{theme}</div>
        <div className={styles.desc}>{desc}</div>
      </div>
    </CardBg>
  );
};

function Select(): JSX.Element {
  return (
    <div className={styles.select}>
      <img
        src={useBaseUrl('/images/selectBg.png')}
        alt=""
        className={styles.selectBg}
      />

      <div className={styles.title}>为什么要选择tKeel？</div>
      <div className={styles.subtitle}>功能特性</div>

      <div className={styles.container}>
        {Card(
          '/images/multiplexing.png',
          '功能特性',
          '一句话解释一段话解释一段话解释一段话解释一句话解释'
        )}
        {Card(
          '/images/any.png',
          '功能特性',
          '一句话解释一段话解释一段话解释一段话解释一句话解释'
        )}
        {Card(
          '/images/mix.png',
          '功能特性',
          '一句话解释一段话解释一段话解释一段话解释一句话解释'
        )}
        {Card(
          '/images/fast.png',
          '功能特性',
          '一句话解释一段话解释一段话解释一段话解释一句话解释'
        )}
        {Card(
          '/images/dimension.png',
          '功能特性',
          '一句话解释一段话解释一段话解释一段话解释一句话解释'
        )}
        {Card(
          '/images/performance.png',
          '功能特性',
          '一句话解释一段话解释一段话解释一段话解释一句话解释'
        )}
      </div>
    </div>
  );
}

export default Select;
