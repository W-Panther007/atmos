import { useState } from 'react';
import './Card.css'
import cloud from './assets/cloud.png'
import cloudLight from'./assets/cloudLight.png'
import sun from './assets/sun.png'

function Card() {
  const city = ["London","Manchester","Liverpool","Birmingham"]
  const images = [
    cloud,
    cloudLight,
    sun
  ]
  const images_index = 1
  const temps = [20]
  const degree =  "°C"
  const weather = ["Sunny","Cloudy","Rainy","Lightning"]
  const feel_like = [18]
  


    return (
        <>
            <div className='card'>
                <div className='card-City'>
                <h1>{city[0].toUpperCase()}</h1>
                </div>
                <div className='card-images'>
                <img className='images' src={images[images_index]} alt="placholder-image" />
                </div>
                <div className='card-temp'>
                <p className='card-temp-text'>{temps + degree}</p>
                </div>
                <div className='card-weather'>
                <p className='card-weather-text'>{weather[1].toUpperCase()}</p>
                </div>
                <div className='card-feels'>
                <p className='card-feels-text'>FEELS LIKE {feel_like + degree}</p>
                </div>
            </div>
        </>
    )
}

export default Card;