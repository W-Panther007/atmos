import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import clock from '../assets/clock.png';
import '../styles/hourly.css';
import 'swiper/css/bundle';

function Hourly(props) {

	// const data = [
    // 	{ hour: "04", img: sunny, temp: "12°" },
    //     { hour: "05", img: sunny, temp: "12°" },
    //     { hour: "06", img: sunny, temp: "12°" },
    //     { hour: "07", img: sunny, temp: "12°" },
    //     { hour: "08", img: sunny, temp: "12°" },
    //     { hour: "09", img: sunny, temp: "12°" },
    //     { hour: "10", img: sunny, temp: "12°" },
    //     { hour: "11", img: sunny, temp: "12°" },
    //     { hour: "12", img: sunny, temp: "12°" },
    //     { hour: "13", img: sunny, temp: "12°" },
    //     { hour: "14", img: sunny, temp: "12°" },
    //     { hour: "15", img: sunny, temp: "12°" }
    // ];

	// hourlyData.forEach(hour => {
    //     console.log(`Time: ${hour.time}, Temp: ${hour.temperature}, Weather ID: ${hour.weatherID}`);
    // });
	

    return(
		// <>
		// 	<div className="widget-container">
		// 		<div className="widget-header">
		// 			<img src={clock} className='clock' alt='clock'/>
		// 			<h4 className="forecast-title">HOURLY FORECAST</h4>
		// 		</div>
		// 		<Swiper className='hourly-slider' slidesPerView={8} spaceBetween={0} modules={[Scrollbar]} scrollbar={{ hide: true, draggable: true }}>
		// 			{props.hourlyData.map((hour, index) => (
		// 				<SwiperSlide key={index}>
		// 					<div className="hour-entry">
		// 						<p className="hour">{hour.time}</p>
		// 						<img src={d.img} className='weatherpic' alt='Weather Icon' />
		// 						<p className="temperature">{hour.temperature}</p>
		// 					</div>
		// 				</SwiperSlide>
		// 			))}
		// 		</Swiper>
		// 	</div>
		// </>
		<>
      		<div className="widget-container">
        		<div className="widget-header">
          			<img src={clock} className='clock' alt='clock' />
          			<h4 className="forecast-title">HOURLY FORECAST</h4>
        		</div>
        		<Swiper className='hourly-slider' slidesPerView={8} spaceBetween={0} modules={[Scrollbar]} scrollbar={{ hide: true, draggable: true }}>
          			{props.hourlyData.map((hour, index) => {
            			const isDay = hour.time >= props.sunriseTime && hour.time < props.sunsetTime;
						let conditionKey;
						let conditionText;
						
						if (hour.weatherID === 800) {
							conditionKey = isDay ? '800-day' : '800-night';
						} else {
							conditionKey = hour.weatherID.toString().startsWith('7') ? hour.weatherID.toString() : hour.weatherID.toString()[0];
						}
						
						if (isDay) {
							conditionText = props.atmosphereCodes[hour.weatherID.toString()] || props.weatherConditions[conditionKey];
						} else {
							conditionText = props.weatherConditions["800-night"];
						}

            			let iconSrc = props.weatherIcons[conditionText] || props.weatherIcons["clouds"];

            			return (
              				<SwiperSlide key={index}>
                				<div className="hour-entry">
                  					<p className="hour">{hour.time}</p>
                  					<img src={iconSrc} className='weatherpic' alt='Weather Icon' />
                  					<p className="temperature">{Math.round(hour.temperature)}°</p> {/* Assuming temperature needs to be rounded */}
                				</div>
              				</SwiperSlide>
            			);
          			})}
        		</Swiper>
      		</div>
    	</>
	);
};

export default Hourly;