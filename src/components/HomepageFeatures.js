import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Better Perfomance / More Players',
    Svg: require('../../static/img/speed.svg').default,
    description: (
      <>
        Layercraft was built with the goal of improving the performance of your minecraft server. 
        So you can handle more players and have a better experience.
      </>
    ),
  },
  {
    title: 'Concentrace on content',
    Svg: require('../../static/img/content.svg').default,
    description: (
      <>
        Layercraft was designed that you can focus on the content you want to add to your server.
      </>
    ),
  },
  {
    title: 'Microservices',
    Svg: require('../../static/img/microservices.svg').default,
    description: (
      <>
        Layercraft is built with microservices. This means that you belance your players and servers.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
