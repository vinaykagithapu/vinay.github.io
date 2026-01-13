import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'LLM Infrastructure',
    emoji: '🧠',
    description: (
      <>
        Building and optimizing inference platforms with vLLM, TensorRT-LLM, and SGLang. 
        Expertise in deploying and scaling large language models for production workloads.
      </>
    ),
  },
  {
    title: 'Kubernetes & Cloud Native',
    emoji: '☸️',
    description: (
      <>
        Designing and managing scalable, resilient Kubernetes clusters. 
        Experienced in cloud infrastructure, container orchestration, and microservices architecture.
      </>
    ),
  },
  {
    title: 'DevSecOps & Automation',
    emoji: '🔒',
    description: (
      <>
        Implementing secure CI/CD pipelines and infrastructure as code. 
        Focused on building systems that are reliable, fast, and secure by design.
      </>
    ),
  },
];

function Feature({emoji, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div>
        <div className="text--center">
          <span className={styles.featureEmoji}>{emoji}</span>
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
