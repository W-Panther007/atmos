import React from 'react';
import styles from './Wind.module.css';
import windIcon from '../assets/wind.jpg';

function Wind({ windSpeed }) {
    return (
      <div className={styles.box}>
        <div className={styles.title}> <img src={windIcon} alt="Wind" className={styles.icon} /> WIND</div>
        <div className={styles.value}>{windSpeed} MPH</div>
        <div className={styles.subtitle}>Speed</div>
      </div>
    );
  }
export default Wind;
