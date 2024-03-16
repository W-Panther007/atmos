import React, { useContext, useState } from 'react';
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
    const [cardsData, setCardsData] = useState([
        { city: "London", weatherIconSrc: sunnyImg, temp: 20, condition: "Sunny", feelTemp: 18 },
        { city: "London", weatherIconSrc: sunnyImg, temp: 20, condition: "Sunny", feelTemp: 18 },
        { city: "London", weatherIconSrc: sunnyImg, temp: 20, condition: "Sunny", feelTemp: 18 },
        // Add more cards here...
    ]);


    // CODE FOR DELETE CARD:
    
    // Initialize a timer ID for managing the long press
    let longPressTimerId;

    const handleLongPressStart = (index) => {
        // Start a timer of 2 seconds
        longPressTimerId = setTimeout(() => {
            const confirmDelete = window.confirm("Do you want to delete this card?");
            if (confirmDelete) {
                const newCardsData = cardsData.filter((_, cardIndex) => cardIndex !== index);
                setCardsData(newCardsData);
            }
        }, 2000); // 2 seconds
    };

    const handleLongPressCancel = () => {
        // Clear the timer if the touch ends before 2 seconds
        clearTimeout(longPressTimerId);
    };

    return (
        <>
            <Banner />
            <Swiper
                className={swiperClass}
                slidesPerView='1.5'
                spaceBetween={5}
                centeredSlides={true}
                pagination={{ clickable: false, dynamicBullets: true }}
                modules={[Pagination]}
            >
                {cardsData.map((card, index) => (
                    <SwiperSlide key={index}
                        onTouchStart={() => handleLongPressStart(index)}
                        onTouchEnd={handleLongPressCancel}
                    >
                        <Card
                            city={card.city.toUpperCase()}
                            weatherIconSrc={card.weatherIconSrc}
                            temp={card.temp}
                            condition={card.condition.toUpperCase()}
                            feelTemp={card.feelTemp}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default Home;

