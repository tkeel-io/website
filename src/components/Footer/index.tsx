import React from 'react';
import Image from 'next/image';

import styles from './index.module.scss';

function Footer(): JSX.Element {
  return (
    <div className={styles.footer}>
      <div className={styles['min-width']}>
        <div className={styles.left}>
          <div className={styles.logo}>LOGO</div>
          <div className={styles['copy-right']}>
            © 2021 tKeel 版权所有 备案信息备案信息备案信息{' '}
          </div>
        </div>
        <div className={styles.center}>
          <span>tKeel</span>
          <span>文档</span>
          <span>GitHub</span>
        </div>
        <div className={styles.right}>
          <div className={styles.img}>
            <Image
              src="/images/wechat.png"
              alt="wechat"
              width={128}
              height={128}
            />
          </div>
          <div>关注tKeel企业微信</div>
          <div>随时了解最新活动与资讯</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
