import React, { useEffect, useRef } from 'react';

import styles from './index.module.scss';

function Navbar(): JSX.Element {
  const navbarEl = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 100) {
        navbarEl.current.style.backgroundColor = 'rgba(50, 69, 88, 0.3)';
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        navbarEl.current.style.backdropFilter = 'blur(24px)';
      } else {
        navbarEl.current.style.backgroundColor = 'transparent';
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        navbarEl.current.style.backdropFilter = 'blur(0)';
      }
    });
  });

  return (
    <div className={styles.navbar} ref={navbarEl}>
      <div className={styles.left}>LOGO</div>
      <div className={styles.center}>
        <div>
        概览
          {/* <a href="#" style={{color:"black"}}></a> */}
        </div>
        <div>
          {/* <a href="#">文档</a> */}
          文档
        </div>
        <div>GitHub</div>
      </div>
      {/* <div className={styles.right}>EN</div> */}
    </div>
  );
}

export default Navbar;
