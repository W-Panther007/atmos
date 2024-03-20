import calendar from '../assets/calendar.png';
import Sunny from '../assets/sunny.png';
import '../styles/daily.css';

function Daily() {
    return(
        <>
            <div className="daily-container">
                <div className="daily-header">
                    <img src={calendar} alt="calendar-icon" />
                    <h4 className='header-title'>DAILY FORECAST</h4>
                </div>
                <div className="day-entry">
                    <div className="day">
                        <p className="day-txt">Today</p>
                    </div>
                    <div className="img-condition">
                        <img src={Sunny} alt="weather-icon" className="weather-icon" />
                        <p className="condition-txt">Sunny</p>
                    </div>
                    <div className="temps">
                        <div className="lo-temps">
                            <p>LO: 11°</p>
                        </div>
                        <div className="hi-temps">
                            <p>HI: 22°</p>
                        </div>
                    </div>
                </div>
                <div className="day-entry">
                    <div className="day">
                        <p className="day-txt">Tue</p>
                    </div>
                    <div className="img-condition">
                        <img src={Sunny} alt="weather-icon" className="weather-icon" />
                        <p className="condition-txt">Sunny</p>
                    </div>
                    <div className="temps">
                        <div className="lo-temps">
                            <p>LO: 11°</p>
                        </div>
                        <div className="hi-temps">
                            <p>HI: 22°</p>
                        </div>
                    </div>
                </div>
                <div className="day-entry">
                    <div className="day">
                        <p className="day-txt">Wed</p>
                    </div>
                    <div className="img-condition">
                        <img src={Sunny} alt="weather-icon" className="weather-icon" />
                        <p className="condition-txt">Sunny</p>
                    </div>
                    <div className="temps">
                        <div className="lo-temps">
                            <p>LO: 11°</p>
                        </div>
                        <div className="hi-temps">
                            <p>HI: 22°</p>
                        </div>
                    </div>
                </div>
                <div className="day-entry">
                    <div className="day">
                        <p className="day-txt">Thu</p>
                    </div>
                    <div className="img-condition">
                        <img src={Sunny} alt="weather-icon" className="weather-icon" />
                        <p className="condition-txt">Sunny</p>
                    </div>
                    <div className="temps">
                        <div className="lo-temps">
                            <p>LO: 11°</p>
                        </div>
                        <div className="hi-temps">
                            <p>HI: 22°</p>
                        </div>
                    </div>
                </div>
                <div className="day-entry">
                    <div className="day">
                        <p className="day-txt">Fri</p>
                    </div>
                    <div className="img-condition">
                        <img src={Sunny} alt="weather-icon" className="weather-icon" />
                        <p className="condition-txt">Sunny</p>
                    </div>
                    <div className="temps">
                        <div className="lo-temps">
                            <p>LO: 11°</p>
                        </div>
                        <div className="hi-temps">
                            <p>HI: 22°</p>
                        </div>
                    </div>
                </div>
                <div className="day-entry">
                    <div className="day">
                        <p className="day-txt">Sat</p>
                    </div>
                    <div className="img-condition">
                        <img src={Sunny} alt="weather-icon" className="weather-icon" />
                        <p className="condition-txt">Sunny</p>
                    </div>
                    <div className="temps">
                        <div className="lo-temps">
                            <p>LO: 11°</p>
                        </div>
                        <div className="hi-temps">
                            <p>HI: 22°</p>
                        </div>
                    </div>
                </div>
                <div className="day-entry">
                    <div className="day">
                        <p className="day-txt">Sun</p>
                    </div>
                    <div className="img-condition">
                        <img src={Sunny} alt="weather-icon" className="weather-icon" />
                        <p className="condition-txt">Sunny</p>
                    </div>
                    <div className="temps">
                        <div className="lo-temps">
                            <p>LO: 11°</p>
                        </div>
                        <div className="hi-temps">
                            <p>HI: 22°</p>
                        </div>
                    </div>
                </div>
                <div className="day-entry">
                    <div className="day">
                        <p className="day-txt">Mon</p>
                    </div>
                    <div className="img-condition">
                        <img src={Sunny} alt="weather-icon" className="weather-icon" />
                        <p className="condition-txt">Sunny</p>
                    </div>
                    <div className="temps">
                        <div className="lo-temps">
                            <p>LO: 11°</p>
                        </div>
                        <div className="hi-temps">
                            <p>HI: 22°</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Daily;