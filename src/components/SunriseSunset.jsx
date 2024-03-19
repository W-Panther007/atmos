import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { format } from 'date-fns';
import '../styles/sunrisesunset.css';

// Make sure to run in the terminal 'npm install axios' and 'npm install date-fns'

function SunriseSunset({ sunriseIcon, sunsetIcon }) {
    const [sunriseTime, setSunriseTime] = useState('');
    const [sunsetTime, setSunsetTime] = useState('');
    const city = 'London';
    const apiKey = 'c989b743d32fb1ad7b24437ad6dc56b3';

    useEffect(() => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


        // axios.get allows you to perform a GET request to the API URL. 
        // axios.get returns a promise, allowing you to use .then to handle a successful response

        axios.get(apiUrl).then((response) => {          
            const { sunrise, sunset } = response.data.sys; // Destructures sunrise and sunset from response.data.sys
            // Convert UNIX timestamp to readable time
            const sunriseDate = new Date(sunrise * 1000);
            const sunsetDate = new Date(sunset * 1000);
            setSunriseTime(format(sunriseDate, 'HH:mm'));
            setSunsetTime(format(sunsetDate, 'HH:mm'));
        }).catch(error => console.error('Error fetching sunrise and sunset data:', error));
    }, [city, apiKey]);

    return (
        <>
            <div className="sun-container">
                <div className="sunrise">
                    <img src={sunriseIcon} alt="Sunrise"/>
                    <div className="sunrise-time">
                        <p className="header">SUNRISE</p>
                        <p>{sunriseTime}</p>
                    </div>
                </div>
                <div className="sunset">
                    <div className="sunset-time">
                        <p className="header">SUNSET</p>
                        <p>{sunsetTime}</p>
                    </div>
                    <img src={sunsetIcon} alt="Sunset"/>
                </div>
            </div> 
        </>
    );
}

SunriseSunset.propTypes = {
    sunriseIcon: PropTypes.string.isRequired,
    sunsetIcon: PropTypes.string.isRequired,
};

export default SunriseSunset;
