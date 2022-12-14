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
          <p className={styles.text}>
          I know it's simple, but I wanted to show you how important our relationship is for me. I thought I wasn't ready for a new date but you proved me that I was wrong. You're so special and kindness.I can't imagine my life without you. Love u.
          </p>
          <section className={styles.timeline}>
            {
              moments.map((moment) => (
                <div key={moment.date}>
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
