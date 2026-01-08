import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import profilePhoto from './vinay-photo.png';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.profileSection}>
            <div className={styles.profileImageWrapper}>
              <img 
                src={profilePhoto} 
                alt="Vinay Kagithapu" 
                className={styles.profileImage}
              />
              <div className={styles.profileGlow}></div>
            </div>
          </div>
          <div className={styles.textSection}>
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/about">
                About Me →
              </Link>
              <Link
                className="button button--outline button--secondary button--lg"
                style={{marginLeft: '1rem'}}
                to="/projects">
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Vinay Kagithapu - DevOps Engineer specializing in LLM Infrastructure, Kubernetes, and DevSecOps">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
