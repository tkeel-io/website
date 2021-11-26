import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import CardBg from 'react-animated-3d-card';
import Particles from 'react-tsparticles';
import Image from 'next/image';

import styles from './index.module.scss';

type AppProps = {
  dom: {
    current: {
      offsetTop: number;
      style: {
        marginTop: string;
        position: string;
        top: string;
        zIndex: string;
      };
    };
  };
};

type CardProps = {
  img: string;
  text: string;
};

function Card({ img = '', text }: CardProps) {
  return (
    <CardBg
      style={{
        width: '400px',
        height: '200px',
        borderRadius: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        marginBottom: '44px',
      }}
      borderRadius="0"
    >
      <div className={styles.card}>
        <div>
          <Image src={img} alt="" width={64} height={65}  />
        </div>
        <div className={styles.text}>{text}</div>
      </div>
    </CardBg>
  );
}

function LeadTechnology({ dom }: AppProps, ref): JSX.Element {
  const params = {
    particles: {
      line_linked: {
        shadow: {
          enable: true,
          color: '#fff',
          blur: 15,
          opacity: 0.5,
        },
      },
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 1000,
        },
      },
      color: {
        value: '#fff',
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000',
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 1,
          sync: false,
        },
      },
      size: {
        random: {
          enable: true,
        },
        value: {
          min: 1,
          max: 3,
        },
        animation: {
          speed: 4,
          minimumValue: 0.3,
        },
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
      },
      modes: {
        grab: {
          distance: 100,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 100,
          size: 80,
          duration: 2,
          opacity: 0.8,
          speed: 3,
        },
        repulse: {
          distance: 150,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };

  const leadTechnology = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => leadTechnology.current);
  useEffect(() => {
    const { offsetTop } = leadTechnology.current;
    window.addEventListener(
      'scroll',
      () => {
        const scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop + 60 > offsetTop) {
          leadTechnology.current.style.position = 'fixed';
          leadTechnology.current.style.top = '60px';
          leadTechnology.current.style.zIndex = '2';
          dom.current.style.marginTop = '720px';
        } else {
          leadTechnology.current.style.position = 'relative';
          leadTechnology.current.style.top = '0';
          leadTechnology.current.style.zIndex = '1';
          dom.current.style.marginTop = '0';
        }
      },
      false
    );
  });

  return (
    <div className={styles['lead-technology']} ref={leadTechnology}>
      <Particles params={params} className={styles.particles} />
      <div  className={styles.bg}>
        <Image
          src="/images/lead-technology-bg.png"
          width={526}
          height={528}
          alt=""
      />
      </div>
      <div className={styles.title}>技术领先性</div>
      <div className={styles.container}>
        {Card({ img: '/images/cloud-native.png', text: '100% Cloud Native' })}
        {Card({ img: '/images/any-language.png', text: 'Any language' })}
        {Card({
          img: '/images/everything-plugin.png',
          text: 'Everything is plugin',
        })}
        {Card({ img: '/images/so-easy.png', text: 'Never so easy' })}
      </div>
    </div>
  );
}

export default forwardRef(LeadTechnology);
