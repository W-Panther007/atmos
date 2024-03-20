import React, { useContext } from 'react';
import { ThemeContext } from './App.jsx';
import { IoIosArrowUp } from "react-icons/io";
import '../styles/info.css';
import Hourly from './Hourly.jsx';

function Info() {

    const { theme } = useContext(ThemeContext);

    return(
        <>
            <IoIosArrowUp className="arrow-up" style={{color: theme === 'light' ? 'white' : 'black'}}/>
            <br></br>
            <Hourly />
        </>
    );

}

export default Info;