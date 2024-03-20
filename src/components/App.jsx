import React, { useState, useRef, createContext } from 'react';
import Home from './Home.jsx';
import Info from './Info.jsx';
import sunnyImg from '../assets/sunny.png';
import cloudyImg from '../assets/cloudy.png';
import rainImg from '../assets/rain.png';
import nightImg from '../assets/night.png';
import snowImg from '../assets/snow.png';
import '../styles/app.css';

export const ThemeContext = createContext(null);

// Mapping image
const weatherIcons = {
    night: nightImg,
	sunny: sunnyImg,
    clouds: cloudyImg,
    rain: rainImg,
	snow: snowImg,
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




function App() {
	const [theme, setTheme] = useState('light');
	const [currentPage, setCurrentPage] = useState('home');
	const [hasCities, setHasCities] = useState(false);
	const [cardsData, setCardsData] = useState([]);
	const [activeIndex, setActiveIndex] = useState(0);
  	const appRef = useRef(null);

	// Toggle function for theme switch
	const toggleTheme = () => {
		setTheme((currTheme) => (currTheme === "light" ? "dark" : "light"));
	}

  	const handleSwipeUp = () => {
    	// If on the home page, scroll to the widgets
    	if (currentPage === 'home') {
			appRef.current.scrollTo({
        		top: window.innerHeight,
        		behavior: 'smooth',
      		});
      		setCurrentPage('info');
    	}
  	};

  	const handleSwipeDown = () => {
    	// If on the widgets page, scroll to the home page
    	if (currentPage === 'info') {
      		appRef.current.scrollTo({
        		top: 0,
        		behavior: 'smooth',
      		});
      		setCurrentPage('home');
    	}
  	};

  	const handleTouchStart = (e) => {
    	const touchStartY = e.touches[0].clientY;
    	e.currentTarget.dataset.touchStartY = touchStartY;
  	};
	

  	const handleTouchEnd = (e) => {
    	const touchStartY = parseFloat(e.currentTarget.dataset.touchStartY);
    	const touchEndY = e.changedTouches[0].clientY;
    	const deltaY = touchEndY - touchStartY;
		const swipeThreshold = window.innerHeight * 0.9;
		
		if (deltaY <= -swipeThreshold) { // Swipe Up
			handleSwipeUp();
		} else if (deltaY >= swipeThreshold) { // Swipe Down
			handleSwipeDown();
		}
  	};

	function convertUnixTimeToLocalTime(unixTime, timezoneOffset, needMin) {
		// Create a Date object for the unix time
		const date = new Date(unixTime * 1000);
	
		// Convert the date to the UTC date/time + timezoneOffset
		// timezoneOffset from the API is in seconds, JavaScript's getTimezoneOffset() returns minutes,
		// and Date object operations are in milliseconds.
		const localTime = new Date(date.getTime() + timezoneOffset * 1000 - date.getTimezoneOffset() * 60000);
	
		// Format the local time
		if (needMin) {
			return localTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
		}
		else {
			return localTime.toLocaleTimeString([], { hour: '2-digit', });
		}
		
	}

  	return (
		<ThemeContext.Provider value={{theme, toggleTheme}}>
			<div className="App" ref={appRef} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
  	    		<div className={`home-container ${theme}`}>
  	      			<Home setActiveIndex={setActiveIndex} cardsData={cardsData} setCardsData={setCardsData} setHasCities={setHasCities} weatherIcons={weatherIcons} weatherConditions={weatherConditions} atmosphereCodes={atmosphereCodes} />
  	    		</div>
				{hasCities && (
                	<div className={`info-container ${theme}`}>
                    	<Info activeIndex={activeIndex} cardsData={cardsData} weatherIcons={weatherIcons} weatherConditions={weatherConditions} atmosphereCodes={atmosphereCodes} timeConversion={convertUnixTimeToLocalTime} />
                	</div>
            	)}
  	  		</div>
		</ThemeContext.Provider>
  	);
}

export default App;
