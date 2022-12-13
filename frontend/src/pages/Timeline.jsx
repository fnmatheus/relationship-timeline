import React, { Component } from 'react';
import moments from '../utils/moments';
import styles from './Timeline.module.css';

class Timeline extends Component {
  render() {
    return (
      <>
        <header>
          <h1 className={styles.title}>Our Timeline</h1>
          <h2 className={styles.subtitle}>remembering moments</h2>
        </header>
        <main>
          {
            moments.map((moment) => (
              <div>
                <h3>{moment.title}</h3>
                <h4>{moment.date}</h4>
                <p>{moment.text}</p>
                <img src={moment.photo} alt="" srcset="" />
              </div>
            ))
          }
        </main>
      </>
    )
  }
};

export default Timeline;
