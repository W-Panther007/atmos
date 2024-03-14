import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Banner from './Banner.jsx';
import Card from './Card.jsx';
import '../styles/home.css';
import sunnyImg from '../assets/sunny.png';
import 'swiper/css/bundle';


function Home() {
    
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
            <Swiper className="mySwiper" slidesPerView='auto' spaceBetween={30} centeredSlides={true} pagination={{clickable: false, dynamicBullets: true,}} modules={[Pagination]} >
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