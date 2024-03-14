import styles from './Widget.module.css'; // Import as styles
import Visibility from '../Visibility/Visibility.jsx';
import Precipitation from '../Precipitation/Precipitation.jsx';
import Wind from '../Wind/Wind.jsx';
import Humidity from '../Humidity/Humidity.jsx';
import React, { useState, useEffect } from 'react';

function Widgets() {
  const apiKey = "c989b743d32fb1ad7b24437ad6dc56b3";
  const city = "London";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const [weatherData, setWeatherData] = useState({
    visibility: 0,
    precipitation: 0, // This is an assumed field; might need adjustment based on API response
    windSpeed: 0,
    humidity: 0,
  });

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setWeatherData({
          visibility: data.visibility / 1000, // Convert from meters to kilometers
          precipitation: data.rain ? data.rain["1h"] : 0, // Assuming rain volume in the last 1 hour; might need adjustment
          windSpeed: data.wind.speed,
          humidity: data.main.humidity,
        });
      })
      .catch(error => console.error('Error fetching weather data:', error));
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className={styles.weatherApp}>
      <Visibility visibility={weatherData.visibility} />
      <div className={styles.weatherStats}>
        <Precipitation chanceOfRain={weatherData.precipitation} />
        <Humidity humidityVal={weatherData.humidity} />
        <Wind windSpeed={weatherData.windSpeed} />
      </div>
    </div>
  );
}




export default Widgets
