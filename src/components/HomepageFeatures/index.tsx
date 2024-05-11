import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'What is a Green Energy Citizen',
  Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        A green energy citizen is someone who is passionate about the environment
        and conscious of how we obtain power for our daily lives.
      </>
    ),
  },
  {
    title: 'Why Clean Energy',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Our consumption of fossil fuels has led to increased carbon dioxide in our
        atmosphere which has contributed to global warming. 
      </>
    ),
  },
  {
    title: 'How you can Help',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Choosing Clean Green Energy over Fossil Fuels is a great start. Educate yourself about the ways to use solar, wind and hydro electric energy.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
