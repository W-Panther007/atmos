import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './App.jsx';
import { IoIosArrowUp } from "react-icons/io";
import { fetchCoordinatesForCity, fetchWeatherForCoordinates } from './weatherService.js';
import SunriseSunset from './SunriseSunset.jsx';
import Hourly from './Hourly.jsx';
import Daily from './Daily.jsx';
import Visibility from './Visibility.jsx';
import PHWWidget from './PHWWidget.jsx';
import sunriseImg from '../assets/sunrise.png';
import sunsetImg from '../assets/sunset.png';
import '../styles/info.css';

function Info(props) {
    const { theme } = useContext(ThemeContext);
    const [sunrise, setSunrise] = useState('');
    const [sunset, setSunset] = useState('');
    const [hourlyForecast, setHourlyForecast] = useState([]);

    const cityName = props.cardsData.length > 0 && props.cardsData[props.activeIndex] ? props.cardsData[props.activeIndex].city.trim().toLowerCase() : null;

    useEffect(() => {
        const fetchCoordinates = async () => {
            if (!cityName) return;

            try {
                const { lat, lon } = await fetchCoordinatesForCity(cityName);
                const weatherData = await fetchWeatherForCoordinates(lat, lon);
                
                const sunriseTime = props.timeConversion(weatherData.current.sunrise, weatherData.timezone_offset, true);
                const sunsetTime = props.timeConversion(weatherData.current.sunset, weatherData.timezone_offset, true);

                
                const hourlyData = weatherData.hourly.map(hour => ({
                    time: props.timeConversion(hour.dt, weatherData.timezone_offset, false),
                    temperature: hour.temp,
                    weatherID: hour.weather[0].id
                }));

                setHourlyForecast(hourlyData);
                setSunrise(sunriseTime);
                setSunset(sunsetTime);
                
            } catch (error) {
                console.error("Failed to fetch coordinateas: ", error);
            }
        };

        fetchCoordinates();
    }, [cityName]);

    const hourlyForecastsForWidget = hourlyForecast.slice(0, 24);
    console.log(hourlyForecastsForWidget);

    return(
        <>
            <IoIosArrowUp className="arrow-up" style={{color: theme === 'light' ? 'white' : 'black'}}/>
            <SunriseSunset sunriseIcon={sunriseImg} sunsetIcon={sunsetImg} sunriseTime={sunrise} sunsetTime={sunset}/>
            <Hourly hourlyData={hourlyForecastsForWidget} weatherIcons={props.weatherIcons} weatherConditions={props.weatherConditions} atmosphereCodes={props.atmosphereCodes} sunriseTime={sunrise} sunsetTime={sunset} />
            <Daily />
            <Visibility visibility={20}/>
            <PHWWidget />
        </>
    );
}

export default Info;