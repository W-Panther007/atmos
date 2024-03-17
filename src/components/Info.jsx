import React, { useContext } from 'react';
import { ThemeContext } from './App.jsx';
import { IoIosArrowUp } from "react-icons/io";
import '../styles/info.css';

function Info() {

    const { theme } = useContext(ThemeContext);

    return(
        <>
            <IoIosArrowUp className="arrow-up" style={{color: theme === 'light' ? 'white' : 'black'}}/>
        </>
    );

}

export default Info;