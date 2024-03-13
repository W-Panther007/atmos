import React from 'react';
import styles from './Widget.module.css'; // Import as styles
import Visibility from '../Visibility/Visibility.jsx';
import Precipitation from '../Precipitation/Precipitation.jsx';
import Wind from '../Wind/Wind.jsx';
import Humidity from '../Humidity/Humidity.jsx';

function Widgets() {
  return (
    <div className={styles.weatherApp}> {/* Use styles object to refer to class names */}
      <Visibility visibility={10} />
      <div className={styles.weatherStats}> {/* Use styles object to refer to class names */}
        <Precipitation chanceOfRain={4} />
        <Wind windSpeed={5} />
        <Humidity humidityVal={70} />
      </div>
    </div>
  );
}



export default Widgets
