import React from 'react'
import './Widget.module.css'
import Visibility from '../Visibility/Visibility.jsx'
import Precipitation from '../Precipitation/Precipitation.jsx'
import Wind from '../Wind/Wind.jsx'

function Widgets() {
  return (
    <div className="weather-app">
      <Visibility visibility={10} />
      <div className="weather-stats">
        <Precipitation chanceOfRain={4} />
        <Wind windSpeed={5} />
      </div>
    </div>
  );
}


export default Widgets
