import React, { useState, useEffect } from 'react';
import styles from './Widget.module.css';
import Visibility from '../Visibility/Visibility.jsx';
import Precipitation from '../Precipitation/Precipitation.jsx';
import Wind from '../Wind/Wind.jsx';
import Humidity from '../Humidity/Humidity.jsx';

function Widgets({ city }) { // Destructure city from props
  const apiKey = "c989b743d32fb1ad7b24437ad6dc56b3";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const [weatherData, setWeatherData] = useState({
    visibility: 0,
    precipitation: 0,
    windSpeed: 0,
    humidity: 0,
  });

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setWeatherData({
          visibility: data.visibility / 1000, // Convert from meters to kilometers
          precipitation: data.rain ? data.rain["1h"] : 0,
          windSpeed: data.wind.speed,
          humidity: data.main.humidity,
        });
      })
      .catch(error => console.error('Error fetching weather data:', error));
  }, [city]); // Add city to the dependency array to re-fetch data when the city changes

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

export default Widgets;
