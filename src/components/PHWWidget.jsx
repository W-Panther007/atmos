import raindropIcon from '../assets/raindrop.png';
import humidityIcon from '../assets/humidity.png';
import windIcon from '../assets/wind.png';
import '../styles/phwWidget.css';

function PHWWidget() {

    const precipitation = 4;
    const humidity = 70;
    const wind = 5;

    return(
        <>
            <div className="w-container">
                <div className="widget">
                    <div className="individual-header">
                        <img src={raindropIcon} alt="raindrop-icon" id='rainComp' />
                        <h4 className='individual-title' id='precip'>PRECIPITATION</h4>
                    </div>
                    <div className="individual-value">
                        <p>{precipitation}%</p>
                    </div>
                    <div className="widget-caption">
                        <p>Chance of Rain</p>
                    </div>
                </div>
                <div className="widget">
                    <div className="individual-header">
                        <img src={humidityIcon} alt="humidity-icon" id='humidityComp' />
                        <h4 className='individual-title'>HUMIDITY</h4>
                    </div>
                    <div className="individual-value">
                        <p>{humidity}%</p>
                    </div>
                    <div className="widget-caption"></div>
                </div>
                <div className="widget">
                    <div className="individual-header">
                        <img src={windIcon} alt="wind-icon" id='windComp' />
                        <h4 className='individual-title'>WIND</h4>
                    </div>
                    <div className="individual-value">
                        <p>{wind}MPH</p>
                    </div>
                    <div className="widget-caption">
                        <p>Speed</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PHWWidget;