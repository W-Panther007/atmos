import React, { useContext, useState } from 'react';
import { ThemeContext } from './App.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { fetchCoordinatesForCity, fetchWeatherForCoordinates } from './weatherService.js';
import Banner from './Banner.jsx';
import Card from './Card.jsx';
import AddCard from './AddCard.jsx';
import sunnyImg from '../assets/sunny.png';
import cloudyImg from '../assets/cloudy.png';
import rainImg from '../assets/rain.png';
import 'swiper/css/bundle';
import '../styles/home.css';

// Mapping image
const weatherIcons = {
    sunny: sunnyImg,
    clouds: cloudyImg,
    rain: rainImg,
};

// Mapping api weather desc code to desc
const weatherConditions = {
    '2': 'thunder',
    '3': 'rain',
    '5': 'rain',
    '6': 'snow',
    '7': 'atmosphere',
    '800-day': 'sunny',
    '800-night': 'night',
    '8': 'clouds',
};

// atmospere codes for weather conditions
const atmosphereCodes = {
    '701': 'mist',
    '711': 'smoke',
    '721': 'haze',
    '731': 'dust-whirls',
    '741': 'fog',
    '751': 'sand',
    '761': 'dust',
    '762': 'ash',
    '771': 'squall',
    '781': 'tornado',
}

function Home(props) {
    const { theme } = useContext(ThemeContext);
    const [showAddCityForm, setShowAddCityForm] = useState(false);
    const [cardsData, setCardsData] = useState([]);
    const [cityInput, setCityInput] = useState('');

    const swiperClass = theme === 'light' ? 'swiper-light' : 'swiper-dark';
    
    const handleOpenAddCityForm = () => {
        setShowAddCityForm(true);
    };

    const handleCloseAddCityForm = () => {
        setShowAddCityForm(false);
    };

    const addCard = (newCity, conditionCode, newTemp, newFeelTemp, sunrise, sunset) => {
        const currentTimeInSeconds = new Date().getTime() / 1000;
        const isDay = currentTimeInSeconds >= sunrise && currentTimeInSeconds < sunset;
        let conditionKey;

        if (conditionCode === 800) {
            conditionKey = isDay ? '800-day' : '800-night';
        } else {
            conditionKey = conditionCode.toString().startsWith('7') ? conditionCode.toString() : conditionCode.toString()[0];
        }

        let conditionText = atmosphereCodes[conditionCode.toString()] || weatherConditions[conditionKey];
        
        const newCard = {
            city: newCity,
            weatherIconSrc: weatherIcons[conditionText] || sunnyImg,
            temp: Math.round(newTemp),
            condition: conditionText,
            feelTemp: Math.round(newFeelTemp), 
        };
        setCardsData([...cardsData, newCard]);
        props.setHasCities(true);
    };


    const handleCityInputChange = (event) => {
        setCityInput(event.target.value);
    };

    const handleAddCityFormSubmit = async (event) => {
        event.preventDefault();
        const city = cityInput.trim();
        if (!city) return;

        try {
            const { lat, lon } = await fetchCoordinatesForCity(city);
            const data = await fetchWeatherForCoordinates(lat, lon);
            console.log(data);
            addCard(city, data.current.weather[0].id, data.current.temp, data.current.feels_like, data.current.sunrise, data.current.sunset);
        } catch (error) {
            console.error(error);
            alert("Failed to fetch weather data for the city");
        }

        setCityInput('');
        setShowAddCityForm(false);
    };


    // Initialize a timer ID for managing the long press
    let longPressTimerId;

    const handleLongPressStart = (index) => {
        // Start a timer of 2 seconds
        longPressTimerId = setTimeout(() => {
            const confirmDelete = window.confirm("Do you want to delete this card?");
            if (confirmDelete) {
                const newCardsData = cardsData.filter((_, cardIndex) => cardIndex !== index);
                setCardsData(newCardsData);
                props.setHasCities(newCardsData.length > 0);
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
            <Swiper className={swiperClass} slidesPerView='1.5' spaceBetween={4} centeredSlides={true} pagination={{clickable: false, dynamicBullets: true,}} modules={[Pagination]} >
                {cardsData.map((card, index) => (
                    <SwiperSlide key={index} onTouchStart={() => handleLongPressStart(index)} onTouchEnd={handleLongPressCancel}>
                        <Card city={card.city.toUpperCase()} weatherIconSrc={card.weatherIconSrc} temp={card.temp} condition={card.condition.toUpperCase()} feelTemp={card.feelTemp} />
                    </SwiperSlide>
                ))} 

                <SwiperSlide>
                    <AddCard onAddClick={handleOpenAddCityForm}/>
                </SwiperSlide>
            </Swiper>

            {showAddCityForm && (
                <div className="backdrop" onClick={handleCloseAddCityForm}>
                    <div className="add-city-form" onClick={(e) => e.stopPropagation()} style={{background: theme === 'light' ? '#1e667a' : '#2B244D'}}>
                        <form onSubmit={handleAddCityFormSubmit}>
                            <input className='city-search' type="text" placeholder="Enter city name" value={cityInput} onChange={handleCityInputChange} autoFocus/>
                            <button className="search-btn-container" type="submit">
                                <IoIosSearch className='search-btn'/>
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <IoIosArrowDown className='arrow-down' style={{color: theme === 'light' ? 'white' : 'black'}} />
        </>
    );

}

export default Home;

// for the widgets page to get the active index of the card - need to import React, { useState } from 'react';
    // const [activeIndex, setActiveIndex] = useState(0);
    // const handleChange = (swiper) => {setActiveIndex(swiper.activeIndex)};
    {/* <Swiper className={swiperClass} onSlideChange={handleChange} slidesPerView='1.5' spaceBetween={5} centeredSlides={true} pagination={{clickable: false, dynamicBullets: true,}} modules={[Pagination]} ></Swiper> */}



    