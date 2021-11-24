import React, { useRef } from 'react';

import DynamicImage from '@/components/DynamicImage';
import Footer from '@/components/Footer';
import GithubLogo from '@/components/GithubLogo';
import Hero from '@/components/Hero';
import LeadTechnology from '@/components/LeadTechnology';
import LeadTechnologyDetail from '@/components/LeadTechnologyDetail';
import Navbar from '@/components/Navbar';
import Select from '@/components/Select';

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
