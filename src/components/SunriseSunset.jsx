import PropTypes from "prop-types";
import '../styles/sunrise-sunset.css';

function SunriseSunset({sunriseIcon, sunsetIcon, sunriseTime, sunsetTime}) {
    return(
        <>
           <div className="sun-container">
                <div className="sunrise">
                    <img className="comp-img" src={sunriseIcon} alt="Sunrise"/>
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
                    <img className='comp-img' src={sunsetIcon} alt="Sunset"/>
                </div>
            </div> 
        </>
    );
}

SunriseSunset.PropTypes = {
    sunriseIcon: PropTypes.string,
    sunsetIcon: PropTypes.string,
    sunriseTime: PropTypes.string,
    sunsetTime: PropTypes.string,
}

export default SunriseSunset;