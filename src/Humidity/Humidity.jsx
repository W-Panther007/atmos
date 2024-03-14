import React from 'react';
import styles from './Humidity.module.css';
import humidityIcon from '../assets/humidity.jpg';

function Humidity({ humidityVal }) {
    return (
      <div className={styles.box}>
          <div className={styles.title}><img src={humidityIcon} alt="Humidity" className={styles.icon} />HUMIDITY</div>
          <div className={styles.value}>{humidityVal}%</div>
          <div className={styles.subtitle}><br/></div>
      </div>
    );
  }

export default Humidity;
