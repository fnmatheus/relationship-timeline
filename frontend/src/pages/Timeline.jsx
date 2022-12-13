import React, { Component } from 'react';
import moments from '../utils/moments';
import styles from './Timeline.module.css';

class Timeline extends Component {
  render() {
    return (
      <>
        <header className={styles.header}>
          <h1 className={styles.title}>Our Timeline</h1>
          <div className={styles.titleDetail} />
          <h2 className={styles.subtitle}>remembering moments</h2>
        </header>
        <main>
          <p>I know it's simple, but I made to remember our moments. You changed my life in a moment if I was thinking I never meet again someone if I can trust and have the oportunity to dream something together</p>
          <section className={styles.timeline}>
            {
              moments.map((moment) => (
                <div>
                  <div className={styles.momentHeader}>
                    <h3>{moment.title}</h3>
                    <h4>{moment.date}</h4>
                  </div>
                  <div className={styles.photoContainer}>
                    <img
                      className={styles.photo}
                      src={moment.photo}
                      alt=""
                    />
                  </div>
                </div>
              ))
            }
          </section>
        </main>
      </>
    )
  }
};

export default Timeline;
