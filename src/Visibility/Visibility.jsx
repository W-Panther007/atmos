import React from 'react';
import styles from './Visibility.module.css';
import visibilityIcon from '../assets/view.jpg';


function Visibility({ visibility }) {
    return (
      <div className={styles.visibilityContainer}>
        <div className={styles.visibilityBox}>
        <img src={visibilityIcon} alt="Visibility" className={styles.icon} />
          <div className={styles.title}>VISIBILITY</div>
          <div className={styles.value}>{visibility} KM</div>
        </div>
      </div>
    );
  }

export default Visibility