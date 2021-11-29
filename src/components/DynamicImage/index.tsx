import React from 'react';
import Image from 'next/image';

import styles from './index.module.scss';

type ContainerProps = {
  order: number;
  img: string;
  gradient: string;
  text: {
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    text5: string;
  };
  video: {
    width: string;
    height: string;
  };
  bg?: string;
  bgStyle?: object;
  bgColor?: string;
};

function DynamicImage(): JSX.Element {
  function Container({
    order,
    img,
    gradient,
    text,
    bg = '',
    bgStyle = {},
    bgColor = '',
    video,
  }: ContainerProps) {
    return (
      <div className={styles.container} style={{ backgroundColor: bgColor }}>
        <div className={styles['min-width']}>
          {bg && (
            <div style={bgStyle}>
              <Image src={bg} alt="" layout="fill" />
            </div>
          )}

          <div className={styles.text} style={{ order }}>
            <div className={styles['text-inner']}>
              {text?.text1}
              <br />
              {text?.text2}
              <span
                style={{
                  background: gradient,
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {' '}
                {text?.text3}{' '}
              </span>
              <br />
              <div className={styles.describe}>
                <div>{text?.text4}</div>
                <div>{text?.text5}</div>
              </div>
            </div>
          </div>
          <video
            src={img}
            width={video.width}
            height={video.height}
            autoPlay
            loop
            muted
            className={styles.video}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles['dynamic-image']}>
      {Container({
        order: 0,
        img: '/videos/digital-object.mp4',
        gradient: 'linear-gradient(116.96deg, #5efbdf 13.81%, #3c6be3 94.18%)',
        text: {
          text1: '不仅关注设备',
          text2: '聚焦',
          text3: '多维数字对象',
          text4: '将设备抽象作为物在数字平行世界的映射是不够的，空',
          text5: '间以及逻辑上的对象都应该可以找到对应的表现形式',
        },
        bg: '/images/digital-object-bg.png',
        bgStyle: { position: 'absolute', left: '-220px', top: '-200px' },
        bgColor: '#09121A',
        video: {
          width: '500',
          height: '500',
        },
      })}

      {Container({
        order: 1,
        img: '/videos/rich-data.mp4',
        gradient: 'linear-gradient(97.67deg, #81A6FF 13.63%, #8E55E9 99.09%)',
        text: {
          text1: '不单是消息通道',
          text2: '数据',
          text3: '层次更加丰富',
          text4: '消息承载的是某一时刻物的局部状态，我们需要汇聚消',
          text5: '息中的局部状态来构建物的数字平行世界',
        },
        bg: '/images/rich-data-bg.png',
        bgStyle: { position: 'absolute', left: '-120px', top: '-10px' },
        bgColor: '#09121A',
        video: {
          width: '600',
          height: '500',
        },
      })}

      {Container({
        order: 0,
        img: '/videos/digital-interaction.mp4',
        gradient: 'linear-gradient(97.67deg, #81A6FF 13.63%, #8E55E9 99.09%)',
        text: {
          text1: '不只是数采',
          text2: '关注',
          text3: '数字世界的互动',
          text4: '物联网不仅需要关注设备的采集，我们更关注采集的数',
          text5: '据如何更好的被利用',
        },
        bg: '/images/digital-interaction-bg.png',
        bgStyle: { position: 'absolute', right: '-160px', top: '-300px' },
        bgColor: '#09121A',
        video: {
          width: '400',
          height: '400',
        },
      })}
      {Container({
        order: 1,
        img: '/videos/digital-twin.mp4',
        gradient: 'linear-gradient(116.96deg, #5EFBDF 13.81%, #3C6BE3 94.18%)',
        text: {
          text1: '从时序到复杂',
          text2: '数字孪生',
          text3: '更加精彩',
          text4: '时序可以储存物的状态，它可以看做是基于时间的连续函数，通过',
          text5: '周期抽样来在数字平行世界记录每个物的历史状态',
        },
        bgColor: '#09121A',
        video: {
          width: '520',
          height: '460',
        },
      })}
    </div>
  );
}

export default DynamicImage;
