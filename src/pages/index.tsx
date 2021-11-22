import React, { useRef } from 'react';

import DynamicImage from '@src/components/DynamicImage';
import Footer from '@src/components/Footer';
import GithubLogo from '@src/components/GithubLogo';
import Hero from '@src/components/Hero';
import LeadTechnology from '@src/components/LeadTechnology';
import LeadTechnologyDetail from '@src/components/LeadTechnologyDetail';
import Navbar from '@src/components/Navbar';
import Select from '@src/components/Select';

// import Layout from '@theme/Layout';
import styles from './index.module.scss';

function Home(): JSX.Element {
  const leadTechnology = useRef<HTMLDivElement>(null);
  const leadTechnologyDetail = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.home}>
      <Navbar />
      <Hero dom={leadTechnology} />
      <DynamicImage />
      <LeadTechnology ref={leadTechnology} dom={leadTechnologyDetail} />
      <LeadTechnologyDetail ref={leadTechnologyDetail} />
      <Select />
      <GithubLogo />
      <Footer />
    </div>
  );
}

export default Home;
