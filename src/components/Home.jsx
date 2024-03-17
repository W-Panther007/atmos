import React, { useContext, useState } from 'react';
import { ThemeContext } from './App.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import Banner from './Banner.jsx';
import Card from './Card.jsx';
import AddCard from './AddCard.jsx';
import sunnyImg from '../assets/sunny.png';
import 'swiper/css/bundle';
import '../styles/home.css';


function Home() {
    const { theme } = useContext(ThemeContext);
    const [showAddCityForm, setShowAddCityForm] = useState(false);

    const swiperClass = theme === 'light' ? 'swiper-light' : 'swiper-dark';
    
    const handleOpenAddCityForm = () => {
        setShowAddCityForm(true);
    };

    const handleCloseAddCityForm = () => {
        setShowAddCityForm(false);
    };

    

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
            <Swiper className={swiperClass} slidesPerView='1.5' spaceBetween={4} centeredSlides={true} pagination={{clickable: false, dynamicBullets: true,}} modules={[Pagination]} >
                {cardsData.map((card, index) => (
                    <SwiperSlide key={index}>
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
                        <form>
                            <input className='city-search' type="text" placeholder="Enter city name" />
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
