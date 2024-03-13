import React from 'react';
import styles from './Precipitation.module.css';
import precipitationIcon from '../assets/drop.jpg';

function Precipitation({ chanceOfRain }) {
    return (
      <div className={styles.box}>
          <div className={styles.title}><img src={precipitationIcon} alt="Precipitation" className={styles.icon}/><br/>PRECIPITATION</div>
          <div className={styles.value}>{chanceOfRain}%</div>
          <div className={styles.subtitle}>Chance of rain</div>
      </div>
    );
  }

export default Precipitation;
