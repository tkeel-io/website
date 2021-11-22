import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.scss';

function LeadTechnologyDetail({}, ref): JSX.Element {
  type CardProps = {
    title: string;
    img: string;
    arr: string[];
    bg?: string;
    bgStyle?: object;
  };
  type CloudNativeDetailCardProps = {
    title: string;
    img: string;
    arr: string[];
  };

  const Card = ({ title, img, arr, bg, bgStyle }: CardProps) => {
    return (
      <div className={styles.card}>
        <div className={styles.minWidth}>
          <img src={useBaseUrl(bg)} alt="" style={bgStyle} />
          <div className={styles.title}>{title} </div>
          <ul>
            {arr.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
          <div className={styles.img}>
            <video
              src={img}
              width="1009"
              height="606"
              autoPlay
              loop
              muted
              className={styles.video}
            />
          </div>
        </div>
      </div>
    );
  };

  const CloudNativeDetailCard = ({
    title,
    img,
    arr,
  }: CloudNativeDetailCardProps) => {
    const numEl = useRef<HTMLDivElement>(null);
    const cloudNativeDetailCard = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const checkInPage = (el) => {
        const pageHeight: number = document.documentElement.clientHeight;
        const contentTop: number = el.getBoundingClientRect()?.top;
        const contentHeight: number = el.offsetHeight;
        return (
          (contentTop < pageHeight && contentTop >= 0) ||
          (contentTop < 0 && contentTop + contentHeight > 0)
        );
      };

      function btnClick() {
        if (checkInPage(numEl.current)) {
          let num = 0;
          const t = setInterval(function fn() {
            num += 1;
            numEl.current.innerHTML = `${num}%`;
            if (num === 100) {
              clearInterval(t);
            }
          }, 10);
          // 删除事件绑定
          window.removeEventListener('scroll', btnClick, false);
        }
      }

      window.addEventListener('scroll', btnClick, false);
    });

    return (
      <div className={styles.card} ref={cloudNativeDetailCard}>
        <div className={styles.minWidth}>
          <div className={styles.title}>{title} </div>
          <ul>
            {arr.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
          <div className={styles.img}>
            <img src={useBaseUrl(img)} alt="" />
            <div ref={numEl} className={styles.number}>
              0
            </div>
          </div>
        </div>
      </div>
    );
  };

  const leadTechnologyDetail = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => leadTechnologyDetail.current);
  return (
    <div className={styles.leadTechnologyDetail} ref={leadTechnologyDetail}>
      {CloudNativeDetailCard({
        title: '100% Cloud Native',
        img: '/images/cloud-native-detail.png',
        arr: [
          'tKeel 采用云原生方法构建，基于微服务架构提高灵活性和可维护性，利用云平台设施实现弹性伸缩、动态调度、优化资源利用率，具有比传统系统更高的灵活性，同时能够促进开发、加快速度和提高性能。',
        ],
      })}

      {Card({
        title: 'Any language',
        img: '/videos/any-language-detail.mp4',
        arr: [
          '通过利用 SDK 或进行简单的 HTTP 或 gRPC 调用，将 tKeel 与您选择的语言一起使用。',
          'tKeel 利用 Dapr 实现语言无关性，可以在任何托管环境中运行，提供非厂商绑定且可扩展、可靠和高性能的伴随开发方法。',
        ],
        bg: '/images/any-language-detail-bg.png',
        bgStyle: { position: 'absolute', left: '-180px', top: '-280px' },
      })}
      {Card({
        title: 'Everything is plugin',
        img: '/videos/everything-plugin-detail.mp4',
        arr: [
          '平台基于应用插件机制扩展功能，通过插件机制可以方便的将您的应用复用、模块化。',
          '使得应用轻松应对各种解决方案。',
        ],
        bg: '/images/everything-plugin-detail-bg.png',
        bgStyle: { position: 'absolute', right: '-260px', top: '-220px' },
      })}
      {Card({
        title: 'Never so easy',
        img: '/videos/so-easy-detail.mp4',
        arr: [
          '平台提供高性能的处理模式，通过通过数据平面处理分布式系统的复杂性',
          ' 实现插件非常的简单，企业可以继续利用原有应用能力。',
          '基于云原生方式使得部署方式上没有限制。',
        ],
        bg: '/images/so-easy-detail-bg.png',
        bgStyle: { position: 'absolute', left: '-220px', top: '-220px' },
      })}
    </div>
  );
}

export default forwardRef(LeadTechnologyDetail);
