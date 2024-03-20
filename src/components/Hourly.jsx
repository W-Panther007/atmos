import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import sunny from '../assets/sunny.png';
import cws from '../assets/cloud-with-sun.png';
import cloudy from '../assets/Cloudy.png';
import night from '../assets/night.png';
import rws from '../assets/rain-with-sun.png';
import rain from '../assets/rain.png';
import snow from '../assets/snow.png';
import thunder from '../assets/thunder.png';
import clock from '../assets/clock.png';
import '../styles/hourly.css'; // Import CSS file for styling


function getImg(id) {

  const weatherImages = {
    '2xx': thunder,
    '3xx': rws,
    '5xx': rain,
    '6xx': snow,
    800: sunny,
    803: cloudy,
  };

  if (id.toString().startsWith('2')) {
    return thunder;
  }
  if (id.toString().startsWith('3')) {
    return rws;
  }
  if (id.toString().startsWith('5')) {
    return rain;
  }
  if (id.toString().startsWith('6')) {
    return snow;
  }
  if (id == 800) {
    return sunny
  }
  if (id.toString().startsWith('8')) {
    return cloudy;
  }
}


function Hourly() {
  const apiKey = "c989b743d32fb1ad7b24437ad6dc56b3";
  const [hourlyData, setHourlyData] = useState([]);
  const lat = 51.50;
  const lon = 0.12;



  useEffect(() => {
    const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const cutOffData = data.hourly.slice(0, 24);
        setHourlyData(cutOffData);
      })
      .catch(error => console.error('Error fetching weather data:', error));
  }, []); // No dependencies needed, fetch only once on component mount

  // You can access hourlyData here
  console.log(hourlyData);

  return (
    <div className='container'>
      <head className='header'>
        <img src={clock} className='clock' alt='clock'/>
        <h4 className="forecast-title">HOURLY FORECAST</h4>
      </head>
      {hourlyData.length > 0 ? (
        <div className='hours'>
          <Swiper slidesPerView={8} spaceBetween={0} centeredSlides={false} pagination={{ clickable: false, dynamicBullets: true }}>
            {hourlyData.map((hour, index) => (
              <SwiperSlide key={index}>
              <div key={hour.dt}>
                <p>{new Date(hour.dt * 1000).getHours()}</p>
                <img src={getImg(hour.weather[0].id)} alt={`Weather Icon ${hour.weather[0].id}`} />
                <p>{Math.round(hour.temp)} °C</p>
              </div>
            </SwiperSlide>
          ))}
          </Swiper>
        </div>
      ) : (
        <p>Loading hourly weather data...</p>
      )}
    </div>
  );
};

export default Hourly;
