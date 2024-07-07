import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'WordPress',
    Svg: require('@site/static/img/undraw_wordpress_utxt.svg').default,
    description: (
      <>
       WordPress empowers you to build and manage your website with ease, offering customizable themes and plugins for endless possibilities.
      </>
    ),
  },
  {
    title: 'Communications Strategy',
    Svg: require('@site/static/img/undraw_browser_stats_re_j7wy.svg').default,
    description: (
      <>
       Our comprehensive communications strategy encompasses 
       a range of services designed to elevate your brand and manage your reputation.
      </>
    ),
  },
  {
    title: 'Website Design & Development',
    Svg: require('@site/static/img/undraw_website_builder_re_ii6e.svg').default,
    description: (
      <>
        Our web design and development services craft stunning, high-performing websites tailored to your brand and audience.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
