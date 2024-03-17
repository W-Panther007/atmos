import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/Hourly.css'; // Import CSS file for styling
import clock from '../assets/clock.png';
import sunny from '../assets/sunny.png';



function Hourly() {

    const data = [
        { hour: "1", img: sunny, temp: "12°" },
        { hour: "2", img: sunny, temp: "12°" },
        { hour: "3", img: sunny, temp: "12°" },
        { hour: "4", img: sunny, temp: "12°" },
        { hour: "5", img: sunny, temp: "12°" },
        { hour: "6", img: sunny, temp: "12°" },
        { hour: "7", img: sunny, temp: "12°" },
        { hour: "8", img: sunny, temp: "12°" },
        { hour: "9", img: sunny, temp: "12°" },
        { hour: "10", img: sunny, temp: "12°" },
        { hour: "11", img: sunny, temp: "12°" },
        { hour: "12", img: sunny, temp: "12°" }
    ];


    return (
      <>
      <div className="hourly-forecast">
        <div className="App">
          <div className='container'>
            <head className='header'>
              <img src={clock} className='clock' alt='clock'/>
              <h4 className="forecast-title">HOURLY FORECAST</h4>
            </head>
            <div className="hours">
              <Swiper slidesPerView={8} spaceBetween={0} centeredSlides={false} pagination={{ clickable: false, dynamicBullets: true }}>
                {data.map((d, index) => (
                  <SwiperSlide key={index}>
                    <div>
                        <p>{d.hour}</p>
                        <img src={d.img} className='weatherpic' alt='Weather Icon' />
                        <p>{d.temp}</p>
                    </div>
                </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      </>
    );
};



export default Hourly;
