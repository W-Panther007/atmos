import React, { useState, useRef, createContext } from 'react';
import Home from './Home.jsx';
import Info from './Info.jsx';
import '../styles/app.css';

export const ThemeContext = createContext(null);

function App() {
	const [theme, setTheme] = useState('light');
	const [currentPage, setCurrentPage] = useState('home');
	const [hasCities, setHasCities] = useState(false);
  	const appRef = useRef(null);

	// Toggle function for theme switch
	const toggleTheme = () => {
		setTheme((currTheme) => (currTheme === "light" ? "dark" : "light"));
	}

  	const handleSwipeUp = () => {
    	// If on the home page, scroll to the widgets
    	if (currentPage === 'home' && hasCities) {
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
		const swipeThreshold = window.innerHeight * 0.1;
		
		if (deltaY <= -swipeThreshold) { // Swipe Up
			handleSwipeUp();
		} else if (deltaY >= swipeThreshold) { // Swipe Down
			handleSwipeDown();
		}
  	};

  	return (
		<ThemeContext.Provider value={{theme, toggleTheme}}>
			<div className="App" ref={appRef} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
  	    		<div className={`home-container ${theme}`}>
  	      			<Home setHasCities={setHasCities} />
  	    		</div>
				{hasCities && (
                	<div className={`info-container ${theme}`}>
                    	<Info />
                	</div>
            	)}
  	  		</div>
		</ThemeContext.Provider>
  	);
}

export default App;
