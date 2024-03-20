import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import clock from '../assets/clock.png';
import sunny from '../assets/sunny.png';
import '../styles/hourly.css';
import 'swiper/css/bundle';

function Hourly() {

	const data = [
    	{ hour: "NOW", img: sunny, temp: "12°" },
        { hour: "05", img: sunny, temp: "12°" },
        { hour: "06", img: sunny, temp: "12°" },
        { hour: "07", img: sunny, temp: "12°" },
        { hour: "08", img: sunny, temp: "12°" },
        { hour: "09", img: sunny, temp: "12°" },
        { hour: "10", img: sunny, temp: "12°" },
        { hour: "11", img: sunny, temp: "12°" },
        { hour: "12", img: sunny, temp: "12°" },
        { hour: "13", img: sunny, temp: "12°" },
        { hour: "14", img: sunny, temp: "12°" },
        { hour: "15", img: sunny, temp: "12°" }
    ];

    return(
		<>
			<div className="widget-container">
				<div className="widget-header">
					<img src={clock} className='clock' alt='clock'/>
					<h4 className="forecast-title">HOURLY FORECAST</h4>
				</div>
				<Swiper className='hourly-slider' slidesPerView={8} spaceBetween={0} modules={[Scrollbar]} scrollbar={{ hide: true, draggable: true }}>
					{data.map((d, index) => (
						<SwiperSlide key={index}>
							<div className="hour-entry">
								<p className="hour">{d.hour}</p>
								<img src={d.img} className='weatherpic' alt='Weather Icon' />
								<p className="temperature">{d.temp}</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
};


export default Hourly;