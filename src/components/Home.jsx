import React, { useContext } from 'react';
import { ThemeContext } from './App.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Banner from './Banner.jsx';
import Card from './Card.jsx';
import '../styles/home.css';
import sunnyImg from '../assets/sunny.png';
import 'swiper/css/bundle';


function Home() {
    const { theme } = useContext(ThemeContext);

    const swiperClass = theme === 'light' ? 'swiper-light' : 'swiper-dark';

    // for the widgets page to get the active index of the card - need to import React, { useState } from 'react';
    // const [activeIndex, setActiveIndex] = useState(0);
    // const handleChange = (swiper) => {setActiveIndex(swiper.activeIndex)};
    {/* <Swiper className={swiperClass} onSlideChange={handleChange} slidesPerView='1.5' spaceBetween={5} centeredSlides={true} pagination={{clickable: false, dynamicBullets: true,}} modules={[Pagination]} ></Swiper> */}

    // Mapping image 
    const weatherIcons = {
        sunny: sunnyImg,
    };


    const cardsData = [
        { city: "London", weatherIconSrc: weatherIcons["sunny"], temp:20, condition: "Sunny", feelTemp:18 },
        { city: "London", weatherIconSrc: weatherIcons["sunny"], temp:20, condition: "Sunny", feelTemp:18 },
        { city: "London", weatherIconSrc: weatherIcons["sunny"], temp:20, condition: "Sunny", feelTemp:18 },
        { city: "London", weatherIconSrc: weatherIcons["sunny"], temp:20, condition: "Sunny", feelTemp:18 },
    ];

    


    return (
        <>
            <Banner />
            <Swiper className={swiperClass} slidesPerView='1.5' spaceBetween={5} centeredSlides={true} pagination={{clickable: false, dynamicBullets: true,}} modules={[Pagination]} >
                {cardsData.map((card, index) => (
                    <SwiperSlide key={index}>
                        <Card city={card.city.toUpperCase()} weatherIconSrc={card.weatherIconSrc} temp={card.temp} condition={card.condition.toUpperCase()} feelTemp={card.feelTemp} />
                    </SwiperSlide>
                ))} 
            </Swiper>
        </>
    );

}

export default Home;