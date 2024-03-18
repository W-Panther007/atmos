import React, { useContext } from 'react';
import { ThemeContext } from './App.jsx';
import { IoIosArrowUp } from "react-icons/io";
import SunriseSunset from './SunriseSunset.jsx';
import Hourly from './Hourly.jsx';
import sunriseImg from '../assets/sunrise.png';
import sunsetImg from '../assets/sunset.png';
import '../styles/info.css';

function Info() {

    const { theme } = useContext(ThemeContext);

    return(
        <>
            <IoIosArrowUp className="arrow-up" style={{color: theme === 'light' ? 'white' : 'black'}}/>
            <SunriseSunset sunriseIcon={sunriseImg} sunsetIcon={sunsetImg} sunriseTime="06:25" sunsetTime="19:40"/>
            <Hourly />
        </>
    );

}

export default Info;